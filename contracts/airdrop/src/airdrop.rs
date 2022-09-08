use crate::*;
use near_sdk::{
    collections::UnorderedSet,
    serde::{Deserialize, Serialize},
    witgen,
};
use std::collections::HashSet;

/// Represents an airdrop currently being dropped
#[witgen]
#[derive(Serialize, Deserialize, BorshSerialize, BorshDeserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct AirdropInfo {
    /// How many NFTs are part of the drop
    pub size: u32,
    /// Title to include in each NFT
    pub title: String,
    /// Description of each NFT
    pub desc: String,
    /// Media link
    pub media: String,
    /// reference link,
    pub reference: Option<String>,
}

#[derive(BorshSerialize, BorshDeserialize)]
pub struct Airdrop {
    pub info: AirdropInfo,
    pub start_index: u64,
    pub owners: UnorderedSet<AccountId>,
    pub ready: bool,
}

pub struct AirdropItem {
    title: String,
}

/// Potentially valid account id
/// @minLength 2
/// @maxLength 64
/// @pattern ^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$
#[witgen]
pub type PossibleAccountId = String;

/// @format data-url
#[witgen]
pub type Accounts = Vec<PossibleAccountId>;

impl Airdrop {
    pub fn new(info: AirdropInfo, start_index: u64) -> Self {
        Self {
            info,
            start_index,
            owners: UnorderedSet::new(StorageKey::Airdrop),
            ready: false,
        }
    }

    pub fn add_accounts<I>(&mut self, accounts: I)
    where
        I: Iterator<Item = PossibleAccountId>,
    {
        let valid_accounts = accounts
            .filter_map(|a| {
                let res = a.parse::<AccountId>().ok();
                if res.is_none() {
                    env::log_str(&format!("Invalid AccountId: {}", a));
                }
                res
            })
            .collect::<HashSet<_>>(); // Remove duplicates
        self.owners.extend(valid_accounts);
        let (owners, size) = (self.owners.len(), self.info.size as u64);
        require!(owners <= size, "too many accounts");
        if owners == size {
            self.ready = true;
        }
    }

    pub fn drop_many(&mut self, num: u32) -> Vec<(AccountId, TokenMetadata, TokenId)> {
        if !self.owners.is_empty() {
            require!(self.ready, "More accounts need to be added");
            let mut res = Vec::with_capacity(num as _);
            for owner_id in self.owners.iter().take(num as usize).collect::<Vec<_>>() {
                let (metadata, token_id) = self.drop_one(&owner_id);
                res.push((owner_id, metadata, token_id))
            }
            res
        } else {
            env::panic_str("no more left");
        }
    }

    pub fn token_metadata(&self, num: u32) -> TokenMetadata {
        let media = Some(self.info.media.to_string());
        // let reference = Some(format!("{}.json", token_id));
        let title = Some(format!(
            "{} — {}/{}",
            self.info.title,
            num + 1,
            self.info.size
        ));
        TokenMetadata {
            title, // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
            media, // URL to associated media, preferably to decentralized, content-addressed storage
            issued_at: Some(current_time_ms().to_string()), // ISO 8601 datetime when token was issued or minted
            reference: None, // URL to an off-chain JSON file with more info.
            description: Some(self.info.desc.to_string()), // free-form description
            media_hash: None, // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
            copies: None, // number of copies of this set of metadata in existence when token was minted.
            expires_at: None, // ISO 8601 datetime when token expires
            starts_at: None, // ISO 8601 datetime when token starts being valid
            updated_at: None, // ISO 8601 datetime when token was last updated
            extra: None, // anything extra the NFT wants to store on-chain. Can be stringified JSON.
            reference_hash: None, // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
        }
    }

    pub fn drop_one(&mut self, account_id: &AccountId) -> (TokenMetadata, TokenId) {
        let num = self.next_num();
        let token_id = (num + self.start_index + 1).to_string();
        self.owners.remove(account_id);
        (self.token_metadata(num as _), token_id)
    }

    pub fn next_num(&self) -> u64 {
        self.info.size as u64 - self.left()
    }

    pub fn left(&self) -> u64 {
        self.owners.len()
    }

    pub fn is_empty(&self) -> bool {
        self.left() == 0
    }
}
