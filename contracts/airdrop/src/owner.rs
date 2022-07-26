use crate::*;
use near_contract_standards::non_fungible_token::{events::NftMint, Token};


#[witgen]
/// @format data-url
type AccountIdFile = String;

#[near_bindgen]
impl Contract {
    // Owner private methods
    /// @allow ["::admins", "::owner"]
    pub fn transfer_ownership(&mut self, new_owner: AccountId) {
        self.assert_owner();
        env::log_str(&format!(
            "{} transfers ownership to {}",
            self.tokens.owner_id, new_owner
        ));
        self.tokens.owner_id = new_owner;
    }

    /// @allow ["::admins", "::owner"]
    pub fn update_uri(&mut self, uri: String) {
        self.assert_owner();
        let mut metadata = self.metadata.get().unwrap();
        log!("New URI: {}", &uri);
        metadata.base_uri = Some(uri);
        self.metadata.set(&metadata);
    }

    /// Create a new airdrop campaign. Can only have one active at a time.
    /// Will fail if current airdrop campaign
    /// @allow ["::admins", "::owner"]
    pub fn create_airdrop(&mut self, airdrop: AirdropInfo) {
        self.assert_owner_or_admin();
        if let Some(airdrop) = self.airdrop.as_ref() {
            if !airdrop.is_empty() {
                env::panic_str("Airdrop in progress");
            }
        }
        self.airdrop = Some(Airdrop::new(airdrop, self.nft_total_supply().0 as u64));
    }

    /// Drop a set of NFTs in current campaign
    /// @allow ["::admins", "::owner"]
    pub fn add_accounts(&mut self, accounts: AccountIdFile) {
        self.assert_owner_or_admin();
        let accounts = accounts.split("\n").map(|s| s.trim()).map(|s|s.to_lowercase());
        self.airdrop
            .as_mut()
            .expect("No current airdrop")
            .add_accounts(accounts);
    }

    /// Drop a set of NFTs in current campaign
    /// @allow ["::admins", "::owner"]
    pub fn drop_many(&mut self, num: u32) {
        // self.assert_owner_or_admin();
        let tokens = self
            .airdrop
            .as_mut()
            .expect("No current airdrop")
            .drop_many(num)
            .into_iter()
            .map(|(owner_id, metadata, token_id)| {
                self.tokens
                    .internal_mint_with_refund(token_id, owner_id, Some(metadata), None)
            })
            .collect::<Vec<_>>();
        env::log_str(&format!("{} gas burned", env::used_gas().0));
        for Token {
            token_id, owner_id, ..
        } in tokens
        {
            NftMint {
                owner_id: &owner_id,
                token_ids: &vec![token_id.as_str()],
                memo: None,
            }
            .emit()
        }
        env::log_str(&format!("{} gas burned", env::used_gas().0));
    }
}
