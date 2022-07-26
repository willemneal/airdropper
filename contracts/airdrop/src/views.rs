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
}
