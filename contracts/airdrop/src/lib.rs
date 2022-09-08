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
mod private;
pub mod standards;
mod types;
mod util;
mod views;

use airdrop::*;
use payout::*;
use standards::*;
use types::*;
use util::current_time_ms;

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
    Admin,
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
            admins: UnorderedSet::new(StorageKey::Admin),
        }
    }
}
