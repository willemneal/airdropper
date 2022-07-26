# Types

## <a href="#account_id" name="account_id"></a> `account-id`: record

Account identifier. This is the human readable utf8 string which is used internally to index
accounts on the network and their respective state.

Because these IDs have to be validated, they have to be converted from a string
with [`FromStr`] or [`TryFrom`] a compatible type. To skip validation on initialization,
[`AccountId::new_unchecked`] can be used.

# Examples
```
use near_sdk::AccountId;
use std::convert::{TryFrom, TryInto};

// `FromStr` conversion
let alice: AccountId = "alice.near".parse().unwrap();
assert!("invalid.".parse::<AccountId>().is_err());

let alice_string = "alice".to_string();

// From string with validation
let alice = AccountId::try_from(alice_string.clone()).unwrap();
let alice: AccountId = alice_string.try_into().unwrap();

// Initialize without validating
let alice_unchecked = AccountId::new_unchecked("alice".to_string());
assert_eq!(alice, alice_unchecked);
```

[`FromStr`]: std::str::FromStr

Size: 8, Alignment: 4

### Record Fields

- <a href="account_id.0" name="account_id.0"></a> [`0`](#account_id.0): `string`
  
  
## <a href="#u128" name="u128"></a> `u128`: `string`


Size: 8, Alignment: 4

## <a href="#balance" name="balance"></a> `balance`: `string`

Balance is a type for storing amounts of tokens, specified in yoctoNEAR.

Size: 8, Alignment: 4

## <a href="#base64_vec_u8" name="base64_vec_u8"></a> `base64-vec-u8`: record

Helper class to serialize/deserialize `Vec<u8>` to base64 string.

Size: 8, Alignment: 4

### Record Fields

- <a href="base64_vec_u8.0" name="base64_vec_u8.0"></a> [`0`](#base64_vec_u8.0): list<`u8`>
  
  
## <a href="#basis_point" name="basis_point"></a> `basis-point`: `u16`


Size: 2, Alignment: 2

## <a href="#block_height" name="block_height"></a> `block-height`: `u64`

Height of the block.

Size: 8, Alignment: 8

## <a href="#block_height_delta" name="block_height_delta"></a> `block-height-delta`: `u64`

Block height delta that measures the difference between `BlockHeight`s.

Size: 8, Alignment: 8

## <a href="#epoch_height" name="epoch_height"></a> `epoch-height`: `u64`

Height of the epoch.

Size: 8, Alignment: 8

## <a href="#nft_contract_metadata" name="nft_contract_metadata"></a> `nft-contract-metadata`: record

Metadata for the NFT contract itself.

Size: 72, Alignment: 4

### Record Fields

- <a href="nft_contract_metadata.spec" name="nft_contract_metadata.spec"></a> [`spec`](#nft_contract_metadata.spec): `string`
  
  
- <a href="nft_contract_metadata.name" name="nft_contract_metadata.name"></a> [`name`](#nft_contract_metadata.name): `string`
  
  
- <a href="nft_contract_metadata.symbol" name="nft_contract_metadata.symbol"></a> [`symbol`](#nft_contract_metadata.symbol): `string`
  
  
- <a href="nft_contract_metadata.icon" name="nft_contract_metadata.icon"></a> [`icon`](#nft_contract_metadata.icon): option<`string`>
  
  
- <a href="nft_contract_metadata.base_uri" name="nft_contract_metadata.base_uri"></a> [`base-uri`](#nft_contract_metadata.base_uri): option<`string`>
  
  
- <a href="nft_contract_metadata.reference" name="nft_contract_metadata.reference"></a> [`reference`](#nft_contract_metadata.reference): option<`string`>
  
  
- <a href="nft_contract_metadata.reference_hash" name="nft_contract_metadata.reference_hash"></a> [`reference-hash`](#nft_contract_metadata.reference_hash): option<[`base64-vec-u8`](#base64_vec_u8)>
  
  
## <a href="#nonce" name="nonce"></a> `nonce`: `u64`

Nonce for transactions.

Size: 8, Alignment: 8

## <a href="#num_blocks" name="num_blocks"></a> `num-blocks`: `u64`

Number of blocks in current group.

Size: 8, Alignment: 8

## <a href="#num_seats" name="num_seats"></a> `num-seats`: `u64`

Number of seats of validators (block producer or hidden ones) in current group (settlement).

Size: 8, Alignment: 8

## <a href="#num_shards" name="num_shards"></a> `num-shards`: `u64`

Number of shards in current group.

Size: 8, Alignment: 8

## <a href="#promise" name="promise"></a> `promise`: `string`


Size: 8, Alignment: 4

## <a href="#promise_id" name="promise_id"></a> `promise-id`: list<`u64`>


Size: 8, Alignment: 4

## <a href="#public_key" name="public_key"></a> `public-key`: `string`


Size: 8, Alignment: 4

## <a href="#shard_id" name="shard_id"></a> `shard-id`: `u64`

Shard index, from 0 to NUM_SHARDS - 1.

Size: 8, Alignment: 8

## <a href="#storage_usage" name="storage_usage"></a> `storage-usage`: `u64`

StorageUsage is used to count the amount of storage used by a contract.

Size: 8, Alignment: 8

## <a href="#storage_usage_change" name="storage_usage_change"></a> `storage-usage-change`: `s64`

StorageUsageChange is used to count the storage usage within a single contract call.

Size: 8, Alignment: 8

## <a href="#token_id" name="token_id"></a> `token-id`: `string`

Note that token IDs for NFTs are strings on NEAR. It's still fine to use autoincrementing numbers as unique IDs if desired, but they should be stringified. This is to make IDs more future-proof as chain-agnostic conventions and standards arise, and allows for more flexibility with considerations like bridging NFTs across chains, etc.

Size: 8, Alignment: 4

## <a href="#token_metadata" name="token_metadata"></a> `token-metadata`: record

Metadata on the individual token level.

Size: 152, Alignment: 8

### Record Fields

- <a href="token_metadata.title" name="token_metadata.title"></a> [`title`](#token_metadata.title): option<`string`>
  
  
- <a href="token_metadata.description" name="token_metadata.description"></a> [`description`](#token_metadata.description): option<`string`>
  
  
- <a href="token_metadata.media" name="token_metadata.media"></a> [`media`](#token_metadata.media): option<`string`>
  
  
- <a href="token_metadata.media_hash" name="token_metadata.media_hash"></a> [`media-hash`](#token_metadata.media_hash): option<[`base64-vec-u8`](#base64_vec_u8)>
  
  
- <a href="token_metadata.copies" name="token_metadata.copies"></a> [`copies`](#token_metadata.copies): option<`u64`>
  
  
- <a href="token_metadata.issued_at" name="token_metadata.issued_at"></a> [`issued-at`](#token_metadata.issued_at): option<`string`>
  
  
- <a href="token_metadata.expires_at" name="token_metadata.expires_at"></a> [`expires-at`](#token_metadata.expires_at): option<`string`>
  
  
- <a href="token_metadata.starts_at" name="token_metadata.starts_at"></a> [`starts-at`](#token_metadata.starts_at): option<`string`>
  
  
- <a href="token_metadata.updated_at" name="token_metadata.updated_at"></a> [`updated-at`](#token_metadata.updated_at): option<`string`>
  
  
- <a href="token_metadata.extra" name="token_metadata.extra"></a> [`extra`](#token_metadata.extra): option<`string`>
  
  
- <a href="token_metadata.reference" name="token_metadata.reference"></a> [`reference`](#token_metadata.reference): option<`string`>
  
  
- <a href="token_metadata.reference_hash" name="token_metadata.reference_hash"></a> [`reference-hash`](#token_metadata.reference_hash): option<[`base64-vec-u8`](#base64_vec_u8)>
  
  
## <a href="#token" name="token"></a> `token`: record


Size: 192, Alignment: 8

### Record Fields

- <a href="token.token_id" name="token.token_id"></a> [`token-id`](#token.token_id): [`token-id`](#token_id)
  
  
- <a href="token.owner_id" name="token.owner_id"></a> [`owner-id`](#token.owner_id): [`account-id`](#account_id)
  
  
- <a href="token.metadata" name="token.metadata"></a> [`metadata`](#token.metadata): option<[`token-metadata`](#token_metadata)>
  
  
- <a href="token.approved_account_ids" name="token.approved_account_ids"></a> [`approved-account-ids`](#token.approved_account_ids): option<list<([`account-id`](#account_id), `u64`)>>
  
  
## <a href="#validator_id" name="validator_id"></a> `validator-id`: `u64`

Validator identifier in current group.

Size: 8, Alignment: 8

## <a href="#validator_mask" name="validator_mask"></a> `validator-mask`: list<`bool`>

Mask which validators participated in multi sign.

Size: 8, Alignment: 4

## <a href="#nft_transfer_payout_args" name="nft_transfer_payout_args"></a> `nft-transfer-payout-args`: record


Size: 64, Alignment: 8

### Record Fields

- <a href="nft_transfer_payout_args.receiver_id" name="nft_transfer_payout_args.receiver_id"></a> [`receiver-id`](#nft_transfer_payout_args.receiver_id): [`account-id`](#account_id)
  
  
- <a href="nft_transfer_payout_args.token_id" name="nft_transfer_payout_args.token_id"></a> [`token-id`](#nft_transfer_payout_args.token_id): `string`
  
  
- <a href="nft_transfer_payout_args.approval_id" name="nft_transfer_payout_args.approval_id"></a> [`approval-id`](#nft_transfer_payout_args.approval_id): option<`u64`>
  
  
- <a href="nft_transfer_payout_args.memo" name="nft_transfer_payout_args.memo"></a> [`memo`](#nft_transfer_payout_args.memo): option<`string`>
  
  
- <a href="nft_transfer_payout_args.balance" name="nft_transfer_payout_args.balance"></a> [`balance`](#nft_transfer_payout_args.balance): [`u128`](#u128)
  
  
- <a href="nft_transfer_payout_args.max_len_payout" name="nft_transfer_payout_args.max_len_payout"></a> [`max-len-payout`](#nft_transfer_payout_args.max_len_payout): option<`u32`>
  
  
## <a href="#claim_args" name="claim_args"></a> `claim-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="claim_args.account_id" name="claim_args.account_id"></a> [`account-id`](#claim_args.account_id): [`account-id`](#account_id)
  
  
## <a href="#cost_of_linkdrop_args" name="cost_of_linkdrop_args"></a> `cost-of-linkdrop-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="cost_of_linkdrop_args.minter" name="cost_of_linkdrop_args.minter"></a> [`minter`](#cost_of_linkdrop_args.minter): [`account-id`](#account_id)
  
  
## <a href="#nft_approve_args" name="nft_approve_args"></a> `nft-approve-args`: record


Size: 28, Alignment: 4

### Record Fields

- <a href="nft_approve_args.token_id" name="nft_approve_args.token_id"></a> [`token-id`](#nft_approve_args.token_id): [`token-id`](#token_id)
  
  
- <a href="nft_approve_args.account_id" name="nft_approve_args.account_id"></a> [`account-id`](#nft_approve_args.account_id): [`account-id`](#account_id)
  
  
- <a href="nft_approve_args.msg" name="nft_approve_args.msg"></a> [`msg`](#nft_approve_args.msg): option<`string`>
  
  
## <a href="#on_create_and_claim_args" name="on_create_and_claim_args"></a> `on-create-and-claim-args`: record


Size: 1, Alignment: 1

### Record Fields

- <a href="on_create_and_claim_args.mint_for_free" name="on_create_and_claim_args.mint_for_free"></a> [`mint-for-free`](#on_create_and_claim_args.mint_for_free): `bool`
  
  Bit: 0

## <a href="#total_cost_args" name="total_cost_args"></a> `total-cost-args`: record


Size: 12, Alignment: 4

### Record Fields

- <a href="total_cost_args.num" name="total_cost_args.num"></a> [`num`](#total_cost_args.num): `u32`
  
  
- <a href="total_cost_args.minter" name="total_cost_args.minter"></a> [`minter`](#total_cost_args.minter): [`account-id`](#account_id)
  
  
## <a href="#nft_revoke_args" name="nft_revoke_args"></a> `nft-revoke-args`: record


Size: 16, Alignment: 4

### Record Fields

- <a href="nft_revoke_args.token_id" name="nft_revoke_args.token_id"></a> [`token-id`](#nft_revoke_args.token_id): [`token-id`](#token_id)
  
  
- <a href="nft_revoke_args.account_id" name="nft_revoke_args.account_id"></a> [`account-id`](#nft_revoke_args.account_id): [`account-id`](#account_id)
  
  
## <a href="#add_whitelist_accounts_args" name="add_whitelist_accounts_args"></a> `add-whitelist-accounts-args`: record


Size: 16, Alignment: 4

### Record Fields

- <a href="add_whitelist_accounts_args.accounts" name="add_whitelist_accounts_args.accounts"></a> [`accounts`](#add_whitelist_accounts_args.accounts): list<[`account-id`](#account_id)>
  
  
- <a href="add_whitelist_accounts_args.allowance" name="add_whitelist_accounts_args.allowance"></a> [`allowance`](#add_whitelist_accounts_args.allowance): option<`u32`>
  
  
## <a href="#check_key_args" name="check_key_args"></a> `check-key-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="check_key_args.public_key" name="check_key_args.public_key"></a> [`public-key`](#check_key_args.public_key): [`public-key`](#public_key)
  
  
## <a href="#new_default_meta_args" name="new_default_meta_args"></a> `new-default-meta-args`: record


Size: 148, Alignment: 4

### Record Fields

- <a href="new_default_meta_args.owner_id" name="new_default_meta_args.owner_id"></a> [`owner-id`](#new_default_meta_args.owner_id): [`account-id`](#account_id)
  
  
- <a href="new_default_meta_args.name" name="new_default_meta_args.name"></a> [`name`](#new_default_meta_args.name): `string`
  
  
- <a href="new_default_meta_args.symbol" name="new_default_meta_args.symbol"></a> [`symbol`](#new_default_meta_args.symbol): `string`
  
  
- <a href="new_default_meta_args.uri" name="new_default_meta_args.uri"></a> [`uri`](#new_default_meta_args.uri): `string`
  
  
- <a href="new_default_meta_args.size" name="new_default_meta_args.size"></a> [`size`](#new_default_meta_args.size): `u32`
  
  
- <a href="new_default_meta_args.base_cost" name="new_default_meta_args.base_cost"></a> [`base-cost`](#new_default_meta_args.base_cost): [`u128`](#u128)
  
  
- <a href="new_default_meta_args.min_cost" name="new_default_meta_args.min_cost"></a> [`min-cost`](#new_default_meta_args.min_cost): [`u128`](#u128)
  
  
- <a href="new_default_meta_args.percent_off" name="new_default_meta_args.percent_off"></a> [`percent-off`](#new_default_meta_args.percent_off): option<`u8`>
  
  
- <a href="new_default_meta_args.icon" name="new_default_meta_args.icon"></a> [`icon`](#new_default_meta_args.icon): option<`string`>
  
  
- <a href="new_default_meta_args.spec" name="new_default_meta_args.spec"></a> [`spec`](#new_default_meta_args.spec): option<`string`>
  
  
- <a href="new_default_meta_args.reference" name="new_default_meta_args.reference"></a> [`reference`](#new_default_meta_args.reference): option<`string`>
  
  
- <a href="new_default_meta_args.reference_hash" name="new_default_meta_args.reference_hash"></a> [`reference-hash`](#new_default_meta_args.reference_hash): option<[`base64-vec-u8`](#base64_vec_u8)>
  
  
- <a href="new_default_meta_args.royalties" name="new_default_meta_args.royalties"></a> [`royalties`](#new_default_meta_args.royalties): option<[`royalties`](#royalties)>
  
  
- <a href="new_default_meta_args.initial_royalties" name="new_default_meta_args.initial_royalties"></a> [`initial-royalties`](#new_default_meta_args.initial_royalties): option<[`royalties`](#royalties)>
  
  
- <a href="new_default_meta_args.is_premint" name="new_default_meta_args.is_premint"></a> [`is-premint`](#new_default_meta_args.is_premint): option<`bool`>
  
  
- <a href="new_default_meta_args.is_premint_over" name="new_default_meta_args.is_premint_over"></a> [`is-premint-over`](#new_default_meta_args.is_premint_over): option<`bool`>
  
  
- <a href="new_default_meta_args.allowance" name="new_default_meta_args.allowance"></a> [`allowance`](#new_default_meta_args.allowance): option<`u32`>
  
  
## <a href="#new_args" name="new_args"></a> `new-args`: record


Size: 160, Alignment: 8

### Record Fields

- <a href="new_args.owner_id" name="new_args.owner_id"></a> [`owner-id`](#new_args.owner_id): [`account-id`](#account_id)
  
  
- <a href="new_args.metadata" name="new_args.metadata"></a> [`metadata`](#new_args.metadata): [`nft-contract-metadata`](#nft_contract_metadata)
  
  
- <a href="new_args.size" name="new_args.size"></a> [`size`](#new_args.size): `u32`
  
  
- <a href="new_args.base_cost" name="new_args.base_cost"></a> [`base-cost`](#new_args.base_cost): [`u128`](#u128)
  
  
- <a href="new_args.min_cost" name="new_args.min_cost"></a> [`min-cost`](#new_args.min_cost): [`u128`](#u128)
  
  
- <a href="new_args.percent_off" name="new_args.percent_off"></a> [`percent-off`](#new_args.percent_off): `u8`
  
  
- <a href="new_args.royalties" name="new_args.royalties"></a> [`royalties`](#new_args.royalties): option<[`royalties`](#royalties)>
  
  
- <a href="new_args.initial_royalties" name="new_args.initial_royalties"></a> [`initial-royalties`](#new_args.initial_royalties): option<[`royalties`](#royalties)>
  
  
- <a href="new_args.is_premint" name="new_args.is_premint"></a> [`is-premint`](#new_args.is_premint): `bool`
  
  
- <a href="new_args.is_premint_over" name="new_args.is_premint_over"></a> [`is-premint-over`](#new_args.is_premint_over): `bool`
  
  
- <a href="new_args.premint_deadline_at" name="new_args.premint_deadline_at"></a> [`premint-deadline-at`](#new_args.premint_deadline_at): `u64`
  
  
- <a href="new_args.allowance" name="new_args.allowance"></a> [`allowance`](#new_args.allowance): option<`u32`>
  
  
## <a href="#nft_mint_many_args" name="nft_mint_many_args"></a> `nft-mint-many-args`: record


Size: 4, Alignment: 4

### Record Fields

- <a href="nft_mint_many_args.num" name="nft_mint_many_args.num"></a> [`num`](#nft_mint_many_args.num): `u32`
  
  
## <a href="#whitelisted_args" name="whitelisted_args"></a> `whitelisted-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="whitelisted_args.account_id" name="whitelisted_args.account_id"></a> [`account-id`](#whitelisted_args.account_id): [`account-id`](#account_id)
  
  
## <a href="#create_linkdrop_args" name="create_linkdrop_args"></a> `create-linkdrop-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="create_linkdrop_args.public_key" name="create_linkdrop_args.public_key"></a> [`public-key`](#create_linkdrop_args.public_key): [`public-key`](#public_key)
  
  
## <a href="#nft_resolve_transfer_args" name="nft_resolve_transfer_args"></a> `nft-resolve-transfer-args`: record


Size: 36, Alignment: 4

### Record Fields

- <a href="nft_resolve_transfer_args.previous_owner_id" name="nft_resolve_transfer_args.previous_owner_id"></a> [`previous-owner-id`](#nft_resolve_transfer_args.previous_owner_id): [`account-id`](#account_id)
  
  
- <a href="nft_resolve_transfer_args.receiver_id" name="nft_resolve_transfer_args.receiver_id"></a> [`receiver-id`](#nft_resolve_transfer_args.receiver_id): [`account-id`](#account_id)
  
  
- <a href="nft_resolve_transfer_args.token_id" name="nft_resolve_transfer_args.token_id"></a> [`token-id`](#nft_resolve_transfer_args.token_id): [`token-id`](#token_id)
  
  
- <a href="nft_resolve_transfer_args.approved_account_ids" name="nft_resolve_transfer_args.approved_account_ids"></a> [`approved-account-ids`](#nft_resolve_transfer_args.approved_account_ids): option<list<([`account-id`](#account_id), `u64`)>>
  
  
## <a href="#end_premint_args" name="end_premint_args"></a> `end-premint-args`: record


Size: 20, Alignment: 4

### Record Fields

- <a href="end_premint_args.base_cost" name="end_premint_args.base_cost"></a> [`base-cost`](#end_premint_args.base_cost): [`u128`](#u128)
  
  
- <a href="end_premint_args.min_cost" name="end_premint_args.min_cost"></a> [`min-cost`](#end_premint_args.min_cost): [`u128`](#u128)
  
  
- <a href="end_premint_args.percent_off" name="end_premint_args.percent_off"></a> [`percent-off`](#end_premint_args.percent_off): option<`u8`>
  
  
## <a href="#nft_token_args" name="nft_token_args"></a> `nft-token-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="nft_token_args.token_id" name="nft_token_args.token_id"></a> [`token-id`](#nft_token_args.token_id): [`token-id`](#token_id)
  
  
## <a href="#add_whitelist_account_ungaurded_args" name="add_whitelist_account_ungaurded_args"></a> `add-whitelist-account-ungaurded-args`: record


Size: 12, Alignment: 4

### Record Fields

- <a href="add_whitelist_account_ungaurded_args.account_id" name="add_whitelist_account_ungaurded_args.account_id"></a> [`account-id`](#add_whitelist_account_ungaurded_args.account_id): [`account-id`](#account_id)
  
  
- <a href="add_whitelist_account_ungaurded_args.allowance" name="add_whitelist_account_ungaurded_args.allowance"></a> [`allowance`](#add_whitelist_account_ungaurded_args.allowance): `u32`
  
  
## <a href="#start_premint_args" name="start_premint_args"></a> `start-premint-args`: record


Size: 8, Alignment: 8

### Record Fields

- <a href="start_premint_args.duration" name="start_premint_args.duration"></a> [`duration`](#start_premint_args.duration): `u64`
  
  
## <a href="#remaining_allowance_args" name="remaining_allowance_args"></a> `remaining-allowance-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="remaining_allowance_args.account_id" name="remaining_allowance_args.account_id"></a> [`account-id`](#remaining_allowance_args.account_id): [`account-id`](#account_id)
  
  
## <a href="#create_account_and_claim_args" name="create_account_and_claim_args"></a> `create-account-and-claim-args`: record


Size: 16, Alignment: 4

### Record Fields

- <a href="create_account_and_claim_args.new_account_id" name="create_account_and_claim_args.new_account_id"></a> [`new-account-id`](#create_account_and_claim_args.new_account_id): [`account-id`](#account_id)
  
  
- <a href="create_account_and_claim_args.new_public_key" name="create_account_and_claim_args.new_public_key"></a> [`new-public-key`](#create_account_and_claim_args.new_public_key): [`public-key`](#public_key)
  
  
## <a href="#discount_args" name="discount_args"></a> `discount-args`: record


Size: 4, Alignment: 4

### Record Fields

- <a href="discount_args.num" name="discount_args.num"></a> [`num`](#discount_args.num): `u32`
  
  
## <a href="#link_callback_args" name="link_callback_args"></a> `link-callback-args`: record


Size: 12, Alignment: 4

### Record Fields

- <a href="link_callback_args.account_id" name="link_callback_args.account_id"></a> [`account-id`](#link_callback_args.account_id): [`account-id`](#account_id)
  
  
- <a href="link_callback_args.mint_for_free" name="link_callback_args.mint_for_free"></a> [`mint-for-free`](#link_callback_args.mint_for_free): `bool`
  
  
## <a href="#cost_per_token_args" name="cost_per_token_args"></a> `cost-per-token-args`: record


Size: 12, Alignment: 4

### Record Fields

- <a href="cost_per_token_args.num" name="cost_per_token_args.num"></a> [`num`](#cost_per_token_args.num): `u32`
  
  
- <a href="cost_per_token_args.minter" name="cost_per_token_args.minter"></a> [`minter`](#cost_per_token_args.minter): [`account-id`](#account_id)
  
  
## <a href="#nft_payout_args" name="nft_payout_args"></a> `nft-payout-args`: record


Size: 24, Alignment: 4

### Record Fields

- <a href="nft_payout_args.token_id" name="nft_payout_args.token_id"></a> [`token-id`](#nft_payout_args.token_id): `string`
  
  
- <a href="nft_payout_args.balance" name="nft_payout_args.balance"></a> [`balance`](#nft_payout_args.balance): [`u128`](#u128)
  
  
- <a href="nft_payout_args.max_len_payout" name="nft_payout_args.max_len_payout"></a> [`max-len-payout`](#nft_payout_args.max_len_payout): option<`u32`>
  
  
## <a href="#nft_mint_args" name="nft_mint_args"></a> `nft-mint-args`: record


Size: 168, Alignment: 8

### Record Fields

- <a href="nft_mint_args.token_id" name="nft_mint_args.token_id"></a> [`token-id`](#nft_mint_args.token_id): [`token-id`](#token_id)
  
  
- <a href="nft_mint_args.token_owner_id" name="nft_mint_args.token_owner_id"></a> [`token-owner-id`](#nft_mint_args.token_owner_id): [`account-id`](#account_id)
  
  
- <a href="nft_mint_args.token_metadata" name="nft_mint_args.token_metadata"></a> [`token-metadata`](#nft_mint_args.token_metadata): [`token-metadata`](#token_metadata)
  
  
## <a href="#nft_transfer_args" name="nft_transfer_args"></a> `nft-transfer-args`: record


Size: 48, Alignment: 8

### Record Fields

- <a href="nft_transfer_args.receiver_id" name="nft_transfer_args.receiver_id"></a> [`receiver-id`](#nft_transfer_args.receiver_id): [`account-id`](#account_id)
  
  
- <a href="nft_transfer_args.token_id" name="nft_transfer_args.token_id"></a> [`token-id`](#nft_transfer_args.token_id): [`token-id`](#token_id)
  
  
- <a href="nft_transfer_args.approval_id" name="nft_transfer_args.approval_id"></a> [`approval-id`](#nft_transfer_args.approval_id): option<`u64`>
  
  
- <a href="nft_transfer_args.memo" name="nft_transfer_args.memo"></a> [`memo`](#nft_transfer_args.memo): option<`string`>
  
  
## <a href="#update_royalties_args" name="update_royalties_args"></a> `update-royalties-args`: record


Size: 12, Alignment: 4

### Record Fields

- <a href="update_royalties_args.royalties" name="update_royalties_args.royalties"></a> [`royalties`](#update_royalties_args.royalties): [`royalties`](#royalties)
  
  
## <a href="#nft_revoke_all_args" name="nft_revoke_all_args"></a> `nft-revoke-all-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="nft_revoke_all_args.token_id" name="nft_revoke_all_args.token_id"></a> [`token-id`](#nft_revoke_all_args.token_id): [`token-id`](#token_id)
  
  
## <a href="#nft_is_approved_args" name="nft_is_approved_args"></a> `nft-is-approved-args`: record


Size: 32, Alignment: 8

### Record Fields

- <a href="nft_is_approved_args.token_id" name="nft_is_approved_args.token_id"></a> [`token-id`](#nft_is_approved_args.token_id): [`token-id`](#token_id)
  
  
- <a href="nft_is_approved_args.approved_account_id" name="nft_is_approved_args.approved_account_id"></a> [`approved-account-id`](#nft_is_approved_args.approved_account_id): [`account-id`](#account_id)
  
  
- <a href="nft_is_approved_args.approval_id" name="nft_is_approved_args.approval_id"></a> [`approval-id`](#nft_is_approved_args.approval_id): option<`u64`>
  
  
## <a href="#transfer_ownership_args" name="transfer_ownership_args"></a> `transfer-ownership-args`: record


Size: 8, Alignment: 4

### Record Fields

- <a href="transfer_ownership_args.new_owner" name="transfer_ownership_args.new_owner"></a> [`new-owner`](#transfer_ownership_args.new_owner): [`account-id`](#account_id)
  
  
## <a href="#payout" name="payout"></a> `payout`: record

Copied from https://github.com/near/NEPs/blob/6170aba1c6f4cd4804e9ad442caeae9dc47e7d44/specs/Standards/NonFungibleToken/Payout.md#reference-level-explanation
A mapping of NEAR accounts to the amount each should be paid out, in
the event of a token-sale. The payout mapping MUST be shorter than the
maximum length specified by the financial contract obtaining this
payout data. Any mapping of length 10 or less MUST be accepted by
financial contracts, so 10 is a safe upper limit.
This currently deviates from the standard but is in the process of updating to use this type

Size: 8, Alignment: 4

### Record Fields

- <a href="payout.payout" name="payout.payout"></a> [`payout`](#payout.payout): list<([`account-id`](#account_id), [`u128`](#u128))>
  
  
## <a href="#update_allowance_args" name="update_allowance_args"></a> `update-allowance-args`: record


Size: 4, Alignment: 4

### Record Fields

- <a href="update_allowance_args.allowance" name="update_allowance_args.allowance"></a> [`allowance`](#update_allowance_args.allowance): `u32`
  
  
## <a href="#royalties" name="royalties"></a> `royalties`: record


Size: 12, Alignment: 4

### Record Fields

- <a href="royalties.accounts" name="royalties.accounts"></a> [`accounts`](#royalties.accounts): list<([`account-id`](#account_id), [`basis-point`](#basis_point))>
  
  
- <a href="royalties.percent" name="royalties.percent"></a> [`percent`](#royalties.percent): [`basis-point`](#basis_point)
  
  
# Functions

----

#### <a href="#nft_transfer_payout" name="nft_transfer_payout"></a> `nft-transfer-payout` 

##### Params

- <a href="#nft_transfer_payout.args" name="nft_transfer_payout.args"></a> `args`: [`nft-transfer-payout-args`](#nft_transfer_payout_args)
##### Results

- <a href="#nft_transfer_payout." name="nft_transfer_payout."></a> ``: [`payout`](#payout)

----

#### <a href="#claim" name="claim"></a> `claim` 

##### Params

- <a href="#claim.args" name="claim.args"></a> `args`: [`claim-args`](#claim_args)
##### Results

- <a href="#claim." name="claim."></a> ``: [`promise`](#promise)

----

#### <a href="#get_linkdrop_contract" name="get_linkdrop_contract"></a> `get-linkdrop-contract` 

##### Results

- <a href="#get_linkdrop_contract." name="get_linkdrop_contract."></a> ``: [`account-id`](#account_id)

----

#### <a href="#cost_of_linkdrop" name="cost_of_linkdrop"></a> `cost-of-linkdrop` 

##### Params

- <a href="#cost_of_linkdrop.args" name="cost_of_linkdrop.args"></a> `args`: [`cost-of-linkdrop-args`](#cost_of_linkdrop_args)
##### Results

- <a href="#cost_of_linkdrop." name="cost_of_linkdrop."></a> ``: [`u128`](#u128)

----

#### <a href="#nft_approve" name="nft_approve"></a> `nft-approve` 

##### Params

- <a href="#nft_approve.args" name="nft_approve.args"></a> `args`: [`nft-approve-args`](#nft_approve_args)
##### Results

- <a href="#nft_approve." name="nft_approve."></a> ``: option<[`promise`](#promise)>

----

#### <a href="#nft_mint_one" name="nft_mint_one"></a> `nft-mint-one` 

##### Results

- <a href="#nft_mint_one." name="nft_mint_one."></a> ``: [`token`](#token)

----

#### <a href="#on_create_and_claim" name="on_create_and_claim"></a> `on-create-and-claim` 

##### Params

- <a href="#on_create_and_claim.args" name="on_create_and_claim.args"></a> `args`: [`on-create-and-claim-args`](#on_create_and_claim_args)

----

#### <a href="#total_cost" name="total_cost"></a> `total-cost` 

##### Params

- <a href="#total_cost.args" name="total_cost.args"></a> `args`: [`total-cost-args`](#total_cost_args)
##### Results

- <a href="#total_cost." name="total_cost."></a> ``: [`u128`](#u128)

----

#### <a href="#nft_revoke" name="nft_revoke"></a> `nft-revoke` 

##### Params

- <a href="#nft_revoke.args" name="nft_revoke.args"></a> `args`: [`nft-revoke-args`](#nft_revoke_args)

----

#### <a href="#add_whitelist_accounts" name="add_whitelist_accounts"></a> `add-whitelist-accounts` 

##### Params

- <a href="#add_whitelist_accounts.args" name="add_whitelist_accounts.args"></a> `args`: [`add-whitelist-accounts-args`](#add_whitelist_accounts_args)

----

#### <a href="#tokens_left" name="tokens_left"></a> `tokens-left` 

##### Results

- <a href="#tokens_left." name="tokens_left."></a> ``: `u32`

----

#### <a href="#check_key" name="check_key"></a> `check-key` 

##### Params

- <a href="#check_key.args" name="check_key.args"></a> `args`: [`check-key-args`](#check_key_args)
##### Results

- <a href="#check_key." name="check_key."></a> ``: `bool`

----

#### <a href="#new_default_meta" name="new_default_meta"></a> `new-default-meta` 

##### Params

- <a href="#new_default_meta.args" name="new_default_meta.args"></a> `args`: [`new-default-meta-args`](#new_default_meta_args)

----

#### <a href="#new" name="new"></a> `new` 

##### Params

- <a href="#new.args" name="new.args"></a> `args`: [`new-args`](#new_args)

----

#### <a href="#nft_mint_many" name="nft_mint_many"></a> `nft-mint-many` 

##### Params

- <a href="#nft_mint_many.args" name="nft_mint_many.args"></a> `args`: [`nft-mint-many-args`](#nft_mint_many_args)
##### Results

- <a href="#nft_mint_many." name="nft_mint_many."></a> ``: list<[`token`](#token)>

----

#### <a href="#token_storage_cost" name="token_storage_cost"></a> `token-storage-cost` 

##### Results

- <a href="#token_storage_cost." name="token_storage_cost."></a> ``: [`u128`](#u128)

----

#### <a href="#whitelisted" name="whitelisted"></a> `whitelisted` 

##### Params

- <a href="#whitelisted.args" name="whitelisted.args"></a> `args`: [`whitelisted-args`](#whitelisted_args)
##### Results

- <a href="#whitelisted." name="whitelisted."></a> ``: `bool`

----

#### <a href="#create_linkdrop" name="create_linkdrop"></a> `create-linkdrop` 

##### Params

- <a href="#create_linkdrop.args" name="create_linkdrop.args"></a> `args`: [`create-linkdrop-args`](#create_linkdrop_args)
##### Results

- <a href="#create_linkdrop." name="create_linkdrop."></a> ``: [`promise`](#promise)

----

#### <a href="#nft_resolve_transfer" name="nft_resolve_transfer"></a> `nft-resolve-transfer` 

##### Params

- <a href="#nft_resolve_transfer.args" name="nft_resolve_transfer.args"></a> `args`: [`nft-resolve-transfer-args`](#nft_resolve_transfer_args)
##### Results

- <a href="#nft_resolve_transfer." name="nft_resolve_transfer."></a> ``: `bool`

----

#### <a href="#end_premint" name="end_premint"></a> `end-premint` 

##### Params

- <a href="#end_premint.args" name="end_premint.args"></a> `args`: [`end-premint-args`](#end_premint_args)

----

#### <a href="#nft_token" name="nft_token"></a> `nft-token` 

##### Params

- <a href="#nft_token.args" name="nft_token.args"></a> `args`: [`nft-token-args`](#nft_token_args)
##### Results

- <a href="#nft_token." name="nft_token."></a> ``: option<[`token`](#token)>

----

#### <a href="#add_whitelist_account_ungaurded" name="add_whitelist_account_ungaurded"></a> `add-whitelist-account-ungaurded` 

##### Params

- <a href="#add_whitelist_account_ungaurded.args" name="add_whitelist_account_ungaurded.args"></a> `args`: [`add-whitelist-account-ungaurded-args`](#add_whitelist_account_ungaurded_args)

----

#### <a href="#get_key_balance" name="get_key_balance"></a> `get-key-balance` 

##### Results

- <a href="#get_key_balance." name="get_key_balance."></a> ``: [`u128`](#u128)

----

#### <a href="#start_premint" name="start_premint"></a> `start-premint` 

##### Params

- <a href="#start_premint.args" name="start_premint.args"></a> `args`: [`start-premint-args`](#start_premint_args)

----

#### <a href="#remaining_allowance" name="remaining_allowance"></a> `remaining-allowance` 

##### Params

- <a href="#remaining_allowance.args" name="remaining_allowance.args"></a> `args`: [`remaining-allowance-args`](#remaining_allowance_args)
##### Results

- <a href="#remaining_allowance." name="remaining_allowance."></a> ``: `u32`

----

#### <a href="#on_send_with_callback" name="on_send_with_callback"></a> `on-send-with-callback` 


----

#### <a href="#create_account_and_claim" name="create_account_and_claim"></a> `create-account-and-claim` 

##### Params

- <a href="#create_account_and_claim.args" name="create_account_and_claim.args"></a> `args`: [`create-account-and-claim-args`](#create_account_and_claim_args)
##### Results

- <a href="#create_account_and_claim." name="create_account_and_claim."></a> ``: [`promise`](#promise)

----

#### <a href="#discount" name="discount"></a> `discount` 

##### Params

- <a href="#discount.args" name="discount.args"></a> `args`: [`discount-args`](#discount_args)
##### Results

- <a href="#discount." name="discount."></a> ``: [`u128`](#u128)

----

#### <a href="#link_callback" name="link_callback"></a> `link-callback` 

##### Params

- <a href="#link_callback.args" name="link_callback.args"></a> `args`: [`link-callback-args`](#link_callback_args)
##### Results

- <a href="#link_callback." name="link_callback."></a> ``: [`token`](#token)

----

#### <a href="#cost_per_token" name="cost_per_token"></a> `cost-per-token` 

##### Params

- <a href="#cost_per_token.args" name="cost_per_token.args"></a> `args`: [`cost-per-token-args`](#cost_per_token_args)
##### Results

- <a href="#cost_per_token." name="cost_per_token."></a> ``: [`u128`](#u128)

----

#### <a href="#nft_payout" name="nft_payout"></a> `nft-payout` 

##### Params

- <a href="#nft_payout.args" name="nft_payout.args"></a> `args`: [`nft-payout-args`](#nft_payout_args)
##### Results

- <a href="#nft_payout." name="nft_payout."></a> ``: [`payout`](#payout)

----

#### <a href="#nft_mint" name="nft_mint"></a> `nft-mint` 

##### Params

- <a href="#nft_mint.args" name="nft_mint.args"></a> `args`: [`nft-mint-args`](#nft_mint_args)
##### Results

- <a href="#nft_mint." name="nft_mint."></a> ``: [`token`](#token)

----

#### <a href="#nft_transfer" name="nft_transfer"></a> `nft-transfer` 

##### Params

- <a href="#nft_transfer.args" name="nft_transfer.args"></a> `args`: [`nft-transfer-args`](#nft_transfer_args)

----

#### <a href="#update_royalties" name="update_royalties"></a> `update-royalties` 

##### Params

- <a href="#update_royalties.args" name="update_royalties.args"></a> `args`: [`update-royalties-args`](#update_royalties_args)
##### Results

- <a href="#update_royalties." name="update_royalties."></a> ``: option<[`royalties`](#royalties)>

----

#### <a href="#nft_metadata" name="nft_metadata"></a> `nft-metadata` 

##### Results

- <a href="#nft_metadata." name="nft_metadata."></a> ``: [`nft-contract-metadata`](#nft_contract_metadata)

----

#### <a href="#nft_revoke_all" name="nft_revoke_all"></a> `nft-revoke-all` 

##### Params

- <a href="#nft_revoke_all.args" name="nft_revoke_all.args"></a> `args`: [`nft-revoke-all-args`](#nft_revoke_all_args)

----

#### <a href="#nft_is_approved" name="nft_is_approved"></a> `nft-is-approved` 

##### Params

- <a href="#nft_is_approved.args" name="nft_is_approved.args"></a> `args`: [`nft-is-approved-args`](#nft_is_approved_args)
##### Results

- <a href="#nft_is_approved." name="nft_is_approved."></a> ``: `bool`

----

#### <a href="#transfer_ownership" name="transfer_ownership"></a> `transfer-ownership` 

##### Params

- <a href="#transfer_ownership.args" name="transfer_ownership.args"></a> `args`: [`transfer-ownership-args`](#transfer_ownership_args)

----

#### <a href="#update_allowance" name="update_allowance"></a> `update-allowance` 

##### Params

- <a href="#update_allowance.args" name="update_allowance.args"></a> `args`: [`update-allowance-args`](#update_allowance_args)

