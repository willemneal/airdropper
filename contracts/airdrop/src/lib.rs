use near_contract_standards::non_fungible_token::{
    metadata::{NFTContractMetadata, TokenMetadata, NFT_METADATA_SPEC},
    NonFungibleToken, Token, TokenId,
};
use near_sdk::{
    borsh::{self, BorshDeserialize, BorshSerialize},
    collections::{LazyOption, UnorderedSet},
    env,
    json_types::{Base64VecU8, U128},
    log, near_bindgen, require,
    serde::{Deserialize, Serialize},
    witgen, AccountId, Balance, BorshStorageKey, PanicOnDefault, Promise, PromiseOrValue,
};
// use near_units::{parse_gas, parse_near};

/// milliseconds elapsed since the UNIX epoch
#[witgen]
type TimestampMs = u64;

mod airdrop;
mod owner;
pub mod payout;
mod types;
mod util;
mod views;
pub mod standards;
use standards::*;

use airdrop::*;

use payout::*;
// use raffle::Raffle;
use types::*;
use util::{current_time_ms, log_mint};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]
pub struct Contract {
    pub(crate) tokens: NonFungibleToken,
    metadata: LazyOption<NFTContractMetadata>,
    airdrop: Option<Airdrop>,
    royalties: Option<Royalties>,
    admins: UnorderedSet<AccountId>,
}

#[derive(BorshSerialize, BorshStorageKey)]
enum StorageKey {
    NonFungibleToken,
    Metadata,
    TokenMetadata,
    Enumeration,
    Approval,
    Airdrop,
    Admin
}

#[near_bindgen]
impl Contract {
    /// Create a new airdrop contract
    #[init]
    pub fn new_default(
        owner_id: AccountId,
        metadata: InitialMetadata,
        royalties: Option<Royalties>,
    ) -> Self {
        Contract::new(owner_id, metadata.into(), royalties)
    }

    #[init]
    pub fn new(
        owner_id: AccountId,
        metadata: NFTContractMetadata,
        royalties: Option<Royalties>,
    ) -> Self {
        metadata.assert_valid();
        royalties.as_ref().map(|r| r.validate());
        Self {
            tokens: NonFungibleToken::new(
                StorageKey::NonFungibleToken,
                owner_id,
                Some(StorageKey::TokenMetadata),
                Some(StorageKey::Enumeration),
                Some(StorageKey::Approval),
            ),
            metadata: LazyOption::new(StorageKey::Metadata, Some(&metadata)),
            airdrop: None,
            royalties,
            admins: UnorderedSet::new(StorageKey::Admin)
        }
    }

    // pub fn nft_mint_many(&mut self, token_owners: Vec<AccountId>, max: u32) {
    //     self.assert_owner();
    //     let start_id = self.tokens.nft_total_supply().0 + 1;
    //     require!(
    //         token_owners
    //             .iter()
    //             .all(|owner| self.tokens.nft_supply_for_owner(owner.clone()).0 < max as u128),
    //         "owner already has token"
    //     );
    //     // let size = self.size;
    //     token_owners.iter().enumerate().for_each(|(i, owner)| {
    //         let id = (i as u128) + start_id;
    //         // let title = format!("The Auction Beta Access NFT - {id}/{size}");
    //         // let token = self.internal_mint(id.to_string(), owner.clone(), title);
    //         log_mint(owner, &vec![token]);
    //     })
    // }

    // Private methods

    fn assert_owner(&self) {
        require!(self.signer_is_owner(), "Method is private to owner")
    }

    fn signer_is_owner(&self) -> bool {
        self.is_owner(&env::signer_account_id())
    }

    fn is_owner(&self, minter: &AccountId) -> bool {
        minter.as_str() == self.tokens.owner_id.as_str()
    }

    fn assert_owner_or_admin(&self) {
        require!(
            self.signer_is_owner_or_admin(),
            "Method is private to owner or admin"
        )
    }

    #[allow(dead_code)]
    fn signer_is_admin(&self) -> bool {
        self.is_admin(&env::signer_account_id())
    }

    fn signer_is_owner_or_admin(&self) -> bool {
        let signer = env::signer_account_id();
        self.is_owner(&signer) || self.is_admin(&signer)
    }

    fn is_admin(&self, account_id: &AccountId) -> bool {
        self.admins.contains(account_id)
    }

    fn internal_mint(
        &mut self,
        token_id: String,
        token_owner_id: AccountId,
        title: String,
    ) -> Token {
        let token_metadata = Some(self.create_metadata(title));
        self.tokens
            .internal_mint_with_refund(token_id, token_owner_id, token_metadata, None)
    }

    fn create_metadata(&mut self, title: String) -> TokenMetadata {
        let media = Some(format!("0.png"));
        let reference = None; //Some(format!("{}.json", token_id));
        let title = Some(title);
        TokenMetadata {
            title,     // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
            media, // URL to associated media, preferably to decentralized, content-addressed storage
            reference, // URL to an off-chain JSON file with more info.
            issued_at: Some(current_time_ms().to_string()), // ISO 8601 datetime when token was issued or minted
            description: Some(
                "This NFT provides access to The Auction's closed beta. By holding this NFT, you are able to participate in the platform's first auctions.".to_string(),
            ), // free-form description
            media_hash: None, // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
            copies: None, // number of copies of this set of metadata in existence when token was minted.
            expires_at: None, // ISO 8601 datetime when token expires
            starts_at: None, // ISO 8601 datetime when token starts being valid
            updated_at: None, // ISO 8601 datetime when token was last updated
            extra: None, // anything extra the NFT wants to store on-chain. Can be stringified JSON.
            reference_hash: None, // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
        }
    }

    fn create_special(&self, num: u32) -> TokenMetadata {
        let media = Some("https://bafybeif5tnlg47uzqnt4f5eo27fiuosvmsyqvoua7hkc3g23m44h7gygb4.ipfs.dweb.link/0.png".into());
        // let reference = Some(format!("{}.json", token_id));
        let title = Some(format!("Humble Hood Crew 🤝 NEAR Nymphs — {}/211", num));
        TokenMetadata {
            title, // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"
            media, // URL to associated media, preferably to decentralized, content-addressed storage
            issued_at: Some(current_time_ms().to_string()), // ISO 8601 datetime when token was issued or minted
            reference: None, // URL to an off-chain JSON file with more info.
            description: Some(
                "Exclusive edition airdropped to holders of NEAR Nymphs and Humble Hood Crew 💎🤟"
                    .to_string(),
            ), // free-form description
            media_hash: None, // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.
            copies: None, // number of copies of this set of metadata in existence when token was minted.
            expires_at: None, // ISO 8601 datetime when token expires
            starts_at: None, // ISO 8601 datetime when token starts being valid
            updated_at: None, // ISO 8601 datetime when token was last updated
            extra: None, // anything extra the NFT wants to store on-chain. Can be stringified JSON.
            reference_hash: None, // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
        }
    }
}
