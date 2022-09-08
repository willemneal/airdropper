use crate::util::{data_url_to_string, string_to_line_iter};
use crate::*;

#[near_bindgen]
impl Contract {
    pub fn total_cost(&self, num: u32) -> U128 {
        (num as Balance * self.cost_per_token().0).into()
    }

    pub fn cost_per_token(&self) -> U128 {
        self.token_storage_cost()
    }

    pub fn token_storage_cost(&self) -> U128 {
        (env::storage_byte_cost() * self.tokens.extra_storage_in_bytes_per_token as Balance).into()
    }

    pub fn nft_metadata(&self) -> NFTContractMetadata {
        self.metadata.get().unwrap()
    }

    pub fn current_status(&self) -> String {
        match self.airdrop.as_ref() {
            Some(a) if a.ready => format!("In progress, {} left", a.owners.len()),
            Some(a) => format!(
                "Not ready, {} accounts still needed",
                a.info.size as u64 - a.owners.len()
            ),
            None => "has not started".to_string(),
        }
    }

    pub fn add_accounts_test(&mut self, accounts: AccountIdFile) {
        let accounts = data_url_to_string(&accounts);
        env::log_str(&format!("{}", env::used_gas().0));
        let res = string_to_line_iter(&accounts).collect::<Vec<_>>();
        env::log_str(&res.len().to_string());
        env::log_str(&format!("{}", env::used_gas().0));
        env::log_str(&format!("{:#?}", res));
    }
}
}
