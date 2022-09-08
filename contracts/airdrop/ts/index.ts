import {
  Account,
  transactions,
  providers,
  DEFAULT_FUNCTION_CALL_GAS,
  u8,
  i8,
  u16,
  i16,
  u32,
  i32,
  u64,
  i64,
  f32,
  f64,
  BN,
  ChangeMethodOptions,
  ViewFunctionOptions,
} from './helper';

/**
* milliseconds elapsed since the UNIX epoch
*/
export type TimestampMs = u64;
/**
* Represents an airdrop currently being dropped
*/
export interface AirdropInfo {
  /**
  * How many NFTs are part of the drop
  */
  size: u32;
  /**
  * Title to include in each NFT
  */
  title: string;
  /**
  * Description of each NFT
  */
  desc: string;
  /**
  * Media link
  */
  media: string;
  /**
  * reference link,
  */
  reference?: string;
}
/**
* Potentially valid account id
* @minLength 2
* @maxLength 64
* @pattern ^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$
*/
export type PossibleAccountId = string;
/**
* @format data-url
*/
export type Accounts = PossibleAccountId[];
/**
* Copied from https://github.com/near/NEPs/blob/6170aba1c6f4cd4804e9ad442caeae9dc47e7d44/specs/Standards/NonFungibleToken/Payout.md#reference-level-explanation
* A mapping of NEAR accounts to the amount each should be paid out, in
* the event of a token-sale. The payout mapping MUST be shorter than the
* maximum length specified by the financial contract obtaining this
* payout data. Any mapping of length 10 or less MUST be accepted by
* financial contracts, so 10 is a safe upper limit.
* This currently deviates from the standard but is in the process of updating to use this type
*/
export interface Payout {
  payout: Record<AccountId, U128>;
}
export type BasisPoint = u16;
export interface Royalties {
  accounts: Record<AccountId, BasisPoint>;
  percent: BasisPoint;
}
export interface InitialMetadata {
  /**
  * required, ex. "Mosaics"
  */
  name: string;
  symbol: string;
  /**
  * Centralized gateway known to have reliable access to decentralized storage assets referenced by `reference` or `media` URLs
  */
  base_uri?: string;
  /**
  * Data URL
  */
  icon?: string;
  /**
  * a version like "nft-1.0.0" the current default
  */
  spec?: string;
  /**
  * URL to a JSON file with more info
  */
  reference?: string;
  /**
  * Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.
  */
  reference_hash?: Base64VecU8;
}
/**
* A file with an account id on each line.
* @format data-url
*/
export type AccountIdFile = string;
/**
* StorageUsage is used to count the amount of storage used by a contract.
*/
export type StorageUsage = u64;
/**
* Balance is a type for storing amounts of tokens, specified in yoctoNEAR.
*/
export type Balance = U128;
/**
* Represents the amount of NEAR tokens in "gas units" which are used to fund transactions.
*/
export type Gas = u64;
/**
* base64 string.
*/
export type Base64VecU8 = string;
/**
* Raw type for duration in nanoseconds
*/
export type Duration = u64;
/**
* @minLength 2
* @maxLength 64
* @pattern ^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$
*/
export type AccountId = string;
/**
* String representation of a u128-bit integer
* @pattern ^[0-9]+$
*/
export type U128 = string;
/**
* Public key in a binary format with base58 string serialization with human-readable curve.
* The key types currently supported are `secp256k1` and `ed25519`.
* 
* Ed25519 public keys accepted are 32 bytes and secp256k1 keys are the uncompressed 64 format.
*/
export type PublicKey = string;
/**
* Raw type for timestamp in nanoseconds
*/
export type Timestamp = u64;
/**
* In this implementation, the Token struct takes two extensions standards (metadata and approval) as optional fields, as they are frequently used in modern NFTs.
*/
export interface Token {
  token_id: TokenId;
  owner_id: AccountId;
  metadata?: TokenMetadata;
  approved_account_ids?: Record<AccountId, u64>;
}
export interface FungibleTokenMetadata {
  spec: string;
  name: string;
  symbol: string;
  icon?: string;
  reference?: string;
  reference_hash?: Base64VecU8;
  decimals: u8;
}
/**
* Note that token IDs for NFTs are strings on NEAR. It's still fine to use autoincrementing numbers as unique IDs if desired, but they should be stringified. This is to make IDs more future-proof as chain-agnostic conventions and standards arise, and allows for more flexibility with considerations like bridging NFTs across chains, etc.
*/
export type TokenId = string;
/**
* Metadata for the NFT contract itself.
*/
export interface NftContractMetadata {
  spec: string;
  name: string;
  symbol: string;
  icon?: string;
  base_uri?: string;
  reference?: string;
  reference_hash?: Base64VecU8;
}
export interface StorageBalanceBounds {
  min: U128;
  max?: U128;
}
/**
* Metadata on the individual token level.
*/
export interface TokenMetadata {
  title?: string;
  description?: string;
  media?: string;
  media_hash?: Base64VecU8;
  copies?: u64;
  issued_at?: string;
  expires_at?: string;
  starts_at?: string;
  updated_at?: string;
  extra?: string;
  reference?: string;
  reference_hash?: Base64VecU8;
}
export interface StorageBalance {
  total: U128;
  available: U128;
}
export type WrappedDuration = string;

export class Contract {
  
  constructor(public account: Account, public readonly contractId: string){}
  
  /**
  * @allow ["::admins", "::owner"]
  */
  async transfer_ownership(args: {
    new_owner: AccountId;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.transfer_ownershipRaw(args, options));
  }
  /**
  * @allow ["::admins", "::owner"]
  */
  transfer_ownershipRaw(args: {
    new_owner: AccountId;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "transfer_ownership", args, ...options});
  }
  /**
  * @allow ["::admins", "::owner"]
  */
  transfer_ownershipTx(args: {
    new_owner: AccountId;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("transfer_ownership", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * @allow ["::admins", "::owner"]
  */
  async update_uri(args: {
    uri: string;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.update_uriRaw(args, options));
  }
  /**
  * @allow ["::admins", "::owner"]
  */
  update_uriRaw(args: {
    uri: string;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "update_uri", args, ...options});
  }
  /**
  * @allow ["::admins", "::owner"]
  */
  update_uriTx(args: {
    uri: string;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("update_uri", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Create a new airdrop campaign. Can only have one active at a time.
  * Will fail if current airdrop campaign
  * @allow ["::admins", "::owner"]
  */
  async create_airdrop(args: {
    airdrop: AirdropInfo;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.create_airdropRaw(args, options));
  }
  /**
  * Create a new airdrop campaign. Can only have one active at a time.
  * Will fail if current airdrop campaign
  * @allow ["::admins", "::owner"]
  */
  create_airdropRaw(args: {
    airdrop: AirdropInfo;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "create_airdrop", args, ...options});
  }
  /**
  * Create a new airdrop campaign. Can only have one active at a time.
  * Will fail if current airdrop campaign
  * @allow ["::admins", "::owner"]
  */
  create_airdropTx(args: {
    airdrop: AirdropInfo;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("create_airdrop", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Add accounts that will be dropped to. An account
  * can only be added once.
  * @allow ["::admins", "::owner"]
  */
  async add_accounts(args: {
    accounts: AccountIdFile;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.add_accountsRaw(args, options));
  }
  /**
  * Add accounts that will be dropped to. An account
  * can only be added once.
  * @allow ["::admins", "::owner"]
  */
  add_accountsRaw(args: {
    accounts: AccountIdFile;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "add_accounts", args, ...options});
  }
  /**
  * Add accounts that will be dropped to. An account
  * can only be added once.
  * @allow ["::admins", "::owner"]
  */
  add_accountsTx(args: {
    accounts: AccountIdFile;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("add_accounts", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Drop a set of NFTs in current campaign
  * @allow ["::admins", "::owner"]
  */
  async drop_many(args: {
    num: u32;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.drop_manyRaw(args, options));
  }
  /**
  * Drop a set of NFTs in current campaign
  * @allow ["::admins", "::owner"]
  */
  drop_manyRaw(args: {
    num: u32;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "drop_many", args, ...options});
  }
  /**
  * Drop a set of NFTs in current campaign
  * @allow ["::admins", "::owner"]
  */
  drop_manyTx(args: {
    num: u32;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("drop_many", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Add a new admin. Careful who you add!
  * @allow ["::admins", "::owner"]
  */
  async add_admin(args: {
    account_id: AccountId;
  }, options?: ChangeMethodOptions): Promise<boolean> {
    return providers.getTransactionLastResult(await this.add_adminRaw(args, options));
  }
  /**
  * Add a new admin. Careful who you add!
  * @allow ["::admins", "::owner"]
  */
  add_adminRaw(args: {
    account_id: AccountId;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "add_admin", args, ...options});
  }
  /**
  * Add a new admin. Careful who you add!
  * @allow ["::admins", "::owner"]
  */
  add_adminTx(args: {
    account_id: AccountId;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("add_admin", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  nft_payout(args: {
    token_id: string;
    balance: U128;
    max_len_payout?: u32;
  }, options?: ViewFunctionOptions): Promise<Payout> {
    return this.account.viewFunction(this.contractId, "nft_payout", args, options);
  }
  async nft_transfer_payout(args: {
    receiver_id: AccountId;
    token_id: string;
    approval_id?: u64;
    memo?: string;
    balance: U128;
    max_len_payout?: u32;
  }, options?: ChangeMethodOptions): Promise<Payout> {
    return providers.getTransactionLastResult(await this.nft_transfer_payoutRaw(args, options));
  }
  nft_transfer_payoutRaw(args: {
    receiver_id: AccountId;
    token_id: string;
    approval_id?: u64;
    memo?: string;
    balance: U128;
    max_len_payout?: u32;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "nft_transfer_payout", args, ...options});
  }
  nft_transfer_payoutTx(args: {
    receiver_id: AccountId;
    token_id: string;
    approval_id?: u64;
    memo?: string;
    balance: U128;
    max_len_payout?: u32;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("nft_transfer_payout", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Simple transfer. Transfer a given `token_id` from current owner to
  * `receiver_id`.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security purposes
  * * Contract MUST panic if called by someone other than token owner or,
  * if using Approval Management, one of the approved accounts
  * * `approval_id` is for use with Approval Management,
  * see <https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html>
  * * If using Approval Management, contract MUST nullify approved accounts on
  * successful transfer.
  * * TODO: needed? Both accounts must be registered with the contract for transfer to
  * succeed. See see <https://nomicon.io/Standards/StorageManagement.html>
  * 
  * Arguments:
  * * `receiver_id`: the valid NEAR account receiving the token
  * * `token_id`: the token to transfer
  * * `approval_id`: expected approval ID. A number smaller than
  * 2^53, and therefore representable as JSON. See Approval Management
  * standard for full explanation.
  * * `memo` (optional): for use cases that may benefit from indexing or
  * providing information for a transfer
  */
  async nft_transfer(args: {
    receiver_id: AccountId;
    token_id: TokenId;
    approval_id?: u64;
    memo?: string;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.nft_transferRaw(args, options));
  }
  /**
  * Simple transfer. Transfer a given `token_id` from current owner to
  * `receiver_id`.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security purposes
  * * Contract MUST panic if called by someone other than token owner or,
  * if using Approval Management, one of the approved accounts
  * * `approval_id` is for use with Approval Management,
  * see <https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html>
  * * If using Approval Management, contract MUST nullify approved accounts on
  * successful transfer.
  * * TODO: needed? Both accounts must be registered with the contract for transfer to
  * succeed. See see <https://nomicon.io/Standards/StorageManagement.html>
  * 
  * Arguments:
  * * `receiver_id`: the valid NEAR account receiving the token
  * * `token_id`: the token to transfer
  * * `approval_id`: expected approval ID. A number smaller than
  * 2^53, and therefore representable as JSON. See Approval Management
  * standard for full explanation.
  * * `memo` (optional): for use cases that may benefit from indexing or
  * providing information for a transfer
  */
  nft_transferRaw(args: {
    receiver_id: AccountId;
    token_id: TokenId;
    approval_id?: u64;
    memo?: string;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "nft_transfer", args, ...options});
  }
  /**
  * Simple transfer. Transfer a given `token_id` from current owner to
  * `receiver_id`.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security purposes
  * * Contract MUST panic if called by someone other than token owner or,
  * if using Approval Management, one of the approved accounts
  * * `approval_id` is for use with Approval Management,
  * see <https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html>
  * * If using Approval Management, contract MUST nullify approved accounts on
  * successful transfer.
  * * TODO: needed? Both accounts must be registered with the contract for transfer to
  * succeed. See see <https://nomicon.io/Standards/StorageManagement.html>
  * 
  * Arguments:
  * * `receiver_id`: the valid NEAR account receiving the token
  * * `token_id`: the token to transfer
  * * `approval_id`: expected approval ID. A number smaller than
  * 2^53, and therefore representable as JSON. See Approval Management
  * standard for full explanation.
  * * `memo` (optional): for use cases that may benefit from indexing or
  * providing information for a transfer
  */
  nft_transferTx(args: {
    receiver_id: AccountId;
    token_id: TokenId;
    approval_id?: u64;
    memo?: string;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("nft_transfer", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Transfer token and call a method on a receiver contract. A successful
  * workflow will end in a success execution outcome to the callback on the NFT
  * contract at the method `nft_resolve_transfer`.
  * 
  * You can think of this as being similar to attaching native NEAR tokens to a
  * function call. It allows you to attach any Non-Fungible Token in a call to a
  * receiver contract.
  * 
  * Requirements:
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * Contract MUST panic if called by someone other than token owner or,
  * if using Approval Management, one of the approved accounts
  * * The receiving contract must implement `ft_on_transfer` according to the
  * standard. If it does not, FT contract's `ft_resolve_transfer` MUST deal
  * with the resulting failed cross-contract call and roll back the transfer.
  * * Contract MUST implement the behavior described in `ft_resolve_transfer`
  * * `approval_id` is for use with Approval Management extension, see
  * that document for full explanation.
  * * If using Approval Management, contract MUST nullify approved accounts on
  * successful transfer.
  * 
  * Arguments:
  * * `receiver_id`: the valid NEAR account receiving the token.
  * * `token_id`: the token to send.
  * * `approval_id`: expected approval ID. A number smaller than
  * 2^53, and therefore representable as JSON. See Approval Management
  * standard for full explanation.
  * * `memo` (optional): for use cases that may benefit from indexing or
  * providing information for a transfer.
  * * `msg`: specifies information needed by the receiving contract in
  * order to properly handle the transfer. Can indicate both a function to
  * call and the parameters to pass to that function.
  */
  async nft_transfer_call(args: {
    receiver_id: AccountId;
    token_id: TokenId;
    approval_id?: u64;
    memo?: string;
    msg: string;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.nft_transfer_callRaw(args, options));
  }
  /**
  * Transfer token and call a method on a receiver contract. A successful
  * workflow will end in a success execution outcome to the callback on the NFT
  * contract at the method `nft_resolve_transfer`.
  * 
  * You can think of this as being similar to attaching native NEAR tokens to a
  * function call. It allows you to attach any Non-Fungible Token in a call to a
  * receiver contract.
  * 
  * Requirements:
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * Contract MUST panic if called by someone other than token owner or,
  * if using Approval Management, one of the approved accounts
  * * The receiving contract must implement `ft_on_transfer` according to the
  * standard. If it does not, FT contract's `ft_resolve_transfer` MUST deal
  * with the resulting failed cross-contract call and roll back the transfer.
  * * Contract MUST implement the behavior described in `ft_resolve_transfer`
  * * `approval_id` is for use with Approval Management extension, see
  * that document for full explanation.
  * * If using Approval Management, contract MUST nullify approved accounts on
  * successful transfer.
  * 
  * Arguments:
  * * `receiver_id`: the valid NEAR account receiving the token.
  * * `token_id`: the token to send.
  * * `approval_id`: expected approval ID. A number smaller than
  * 2^53, and therefore representable as JSON. See Approval Management
  * standard for full explanation.
  * * `memo` (optional): for use cases that may benefit from indexing or
  * providing information for a transfer.
  * * `msg`: specifies information needed by the receiving contract in
  * order to properly handle the transfer. Can indicate both a function to
  * call and the parameters to pass to that function.
  */
  nft_transfer_callRaw(args: {
    receiver_id: AccountId;
    token_id: TokenId;
    approval_id?: u64;
    memo?: string;
    msg: string;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "nft_transfer_call", args, ...options});
  }
  /**
  * Transfer token and call a method on a receiver contract. A successful
  * workflow will end in a success execution outcome to the callback on the NFT
  * contract at the method `nft_resolve_transfer`.
  * 
  * You can think of this as being similar to attaching native NEAR tokens to a
  * function call. It allows you to attach any Non-Fungible Token in a call to a
  * receiver contract.
  * 
  * Requirements:
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * Contract MUST panic if called by someone other than token owner or,
  * if using Approval Management, one of the approved accounts
  * * The receiving contract must implement `ft_on_transfer` according to the
  * standard. If it does not, FT contract's `ft_resolve_transfer` MUST deal
  * with the resulting failed cross-contract call and roll back the transfer.
  * * Contract MUST implement the behavior described in `ft_resolve_transfer`
  * * `approval_id` is for use with Approval Management extension, see
  * that document for full explanation.
  * * If using Approval Management, contract MUST nullify approved accounts on
  * successful transfer.
  * 
  * Arguments:
  * * `receiver_id`: the valid NEAR account receiving the token.
  * * `token_id`: the token to send.
  * * `approval_id`: expected approval ID. A number smaller than
  * 2^53, and therefore representable as JSON. See Approval Management
  * standard for full explanation.
  * * `memo` (optional): for use cases that may benefit from indexing or
  * providing information for a transfer.
  * * `msg`: specifies information needed by the receiving contract in
  * order to properly handle the transfer. Can indicate both a function to
  * call and the parameters to pass to that function.
  */
  nft_transfer_callTx(args: {
    receiver_id: AccountId;
    token_id: TokenId;
    approval_id?: u64;
    memo?: string;
    msg: string;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("nft_transfer_call", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Returns the token with the given `token_id` or `null` if no such token.
  */
  nft_token(args: {
    token_id: TokenId;
  }, options?: ViewFunctionOptions): Promise<Token | null> {
    return this.account.viewFunction(this.contractId, "nft_token", args, options);
  }
  /**
  * Add an approved account for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of at least 1 yoctoⓃ for
  * security purposes
  * * Contract MAY require caller to attach larger deposit, to cover cost of
  * storing approver data
  * * Contract MUST panic if called by someone other than token owner
  * * Contract MUST panic if addition would cause `nft_revoke_all` to exceed
  * single-block gas limit
  * * Contract MUST increment approval ID even if re-approving an account
  * * If successfully approved or if had already been approved, and if `msg` is
  * present, contract MUST call `nft_on_approve` on `account_id`. See
  * `nft_on_approve` description below for details.
  * 
  * Arguments:
  * * `token_id`: the token for which to add an approval
  * * `account_id`: the account to add to `approvals`
  * * `msg`: optional string to be passed to `nft_on_approve`
  * 
  * Returns void, if no `msg` given. Otherwise, returns promise call to
  * `nft_on_approve`, which can resolve with whatever it wants.
  */
  async nft_approve(args: {
    token_id: TokenId;
    account_id: AccountId;
    msg?: string;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.nft_approveRaw(args, options));
  }
  /**
  * Add an approved account for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of at least 1 yoctoⓃ for
  * security purposes
  * * Contract MAY require caller to attach larger deposit, to cover cost of
  * storing approver data
  * * Contract MUST panic if called by someone other than token owner
  * * Contract MUST panic if addition would cause `nft_revoke_all` to exceed
  * single-block gas limit
  * * Contract MUST increment approval ID even if re-approving an account
  * * If successfully approved or if had already been approved, and if `msg` is
  * present, contract MUST call `nft_on_approve` on `account_id`. See
  * `nft_on_approve` description below for details.
  * 
  * Arguments:
  * * `token_id`: the token for which to add an approval
  * * `account_id`: the account to add to `approvals`
  * * `msg`: optional string to be passed to `nft_on_approve`
  * 
  * Returns void, if no `msg` given. Otherwise, returns promise call to
  * `nft_on_approve`, which can resolve with whatever it wants.
  */
  nft_approveRaw(args: {
    token_id: TokenId;
    account_id: AccountId;
    msg?: string;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "nft_approve", args, ...options});
  }
  /**
  * Add an approved account for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of at least 1 yoctoⓃ for
  * security purposes
  * * Contract MAY require caller to attach larger deposit, to cover cost of
  * storing approver data
  * * Contract MUST panic if called by someone other than token owner
  * * Contract MUST panic if addition would cause `nft_revoke_all` to exceed
  * single-block gas limit
  * * Contract MUST increment approval ID even if re-approving an account
  * * If successfully approved or if had already been approved, and if `msg` is
  * present, contract MUST call `nft_on_approve` on `account_id`. See
  * `nft_on_approve` description below for details.
  * 
  * Arguments:
  * * `token_id`: the token for which to add an approval
  * * `account_id`: the account to add to `approvals`
  * * `msg`: optional string to be passed to `nft_on_approve`
  * 
  * Returns void, if no `msg` given. Otherwise, returns promise call to
  * `nft_on_approve`, which can resolve with whatever it wants.
  */
  nft_approveTx(args: {
    token_id: TokenId;
    account_id: AccountId;
    msg?: string;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("nft_approve", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Revoke an approved account for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * If contract requires >1yN deposit on `nft_approve`, contract
  * MUST refund associated storage deposit when owner revokes approval
  * * Contract MUST panic if called by someone other than token owner
  * 
  * Arguments:
  * * `token_id`: the token for which to revoke an approval
  * * `account_id`: the account to remove from `approvals`
  */
  async nft_revoke(args: {
    token_id: TokenId;
    account_id: AccountId;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.nft_revokeRaw(args, options));
  }
  /**
  * Revoke an approved account for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * If contract requires >1yN deposit on `nft_approve`, contract
  * MUST refund associated storage deposit when owner revokes approval
  * * Contract MUST panic if called by someone other than token owner
  * 
  * Arguments:
  * * `token_id`: the token for which to revoke an approval
  * * `account_id`: the account to remove from `approvals`
  */
  nft_revokeRaw(args: {
    token_id: TokenId;
    account_id: AccountId;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "nft_revoke", args, ...options});
  }
  /**
  * Revoke an approved account for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * If contract requires >1yN deposit on `nft_approve`, contract
  * MUST refund associated storage deposit when owner revokes approval
  * * Contract MUST panic if called by someone other than token owner
  * 
  * Arguments:
  * * `token_id`: the token for which to revoke an approval
  * * `account_id`: the account to remove from `approvals`
  */
  nft_revokeTx(args: {
    token_id: TokenId;
    account_id: AccountId;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("nft_revoke", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Revoke all approved accounts for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * If contract requires >1yN deposit on `nft_approve`, contract
  * MUST refund all associated storage deposit when owner revokes approvals
  * * Contract MUST panic if called by someone other than token owner
  * 
  * Arguments:
  * * `token_id`: the token with approvals to revoke
  */
  async nft_revoke_all(args: {
    token_id: TokenId;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.nft_revoke_allRaw(args, options));
  }
  /**
  * Revoke all approved accounts for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * If contract requires >1yN deposit on `nft_approve`, contract
  * MUST refund all associated storage deposit when owner revokes approvals
  * * Contract MUST panic if called by someone other than token owner
  * 
  * Arguments:
  * * `token_id`: the token with approvals to revoke
  */
  nft_revoke_allRaw(args: {
    token_id: TokenId;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "nft_revoke_all", args, ...options});
  }
  /**
  * Revoke all approved accounts for a specific token.
  * 
  * Requirements
  * * Caller of the method must attach a deposit of 1 yoctoⓃ for security
  * purposes
  * * If contract requires >1yN deposit on `nft_approve`, contract
  * MUST refund all associated storage deposit when owner revokes approvals
  * * Contract MUST panic if called by someone other than token owner
  * 
  * Arguments:
  * * `token_id`: the token with approvals to revoke
  */
  nft_revoke_allTx(args: {
    token_id: TokenId;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("nft_revoke_all", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Check if a token is approved for transfer by a given account, optionally
  * checking an approval_id
  * 
  * Arguments:
  * * `token_id`: the token for which to revoke an approval
  * * `approved_account_id`: the account to check the existence of in `approvals`
  * * `approval_id`: an optional approval ID to check against current approval ID for given account
  * 
  * Returns:
  * if `approval_id` given, `true` if `approved_account_id` is approved with given `approval_id`
  * otherwise, `true` if `approved_account_id` is in list of approved accounts
  */
  nft_is_approved(args: {
    token_id: TokenId;
    approved_account_id: AccountId;
    approval_id?: u64;
  }, options?: ViewFunctionOptions): Promise<boolean> {
    return this.account.viewFunction(this.contractId, "nft_is_approved", args, options);
  }
  /**
  * Returns the total supply of non-fungible tokens as a string representing an
  * unsigned 128-bit integer to avoid JSON number limit of 2^53.
  */
  nft_total_supply(args = {}, options?: ViewFunctionOptions): Promise<U128> {
    return this.account.viewFunction(this.contractId, "nft_total_supply", args, options);
  }
  /**
  * Get a list of all tokens
  * 
  * Arguments:
  * * `from_index`: a string representing an unsigned 128-bit integer,
  * representing the starting index of tokens to return. (default 0)
  * * `limit`: the maximum number of tokens to return (default total supply)
  * Could fail on gas
  * 
  * Returns an array of Token objects, as described in Core standard
  */
  nft_tokens(args: {
    from_index?: U128;
    limit?: u64;
  }, options?: ViewFunctionOptions): Promise<Token[]> {
    return this.account.viewFunction(this.contractId, "nft_tokens", args, options);
  }
  /**
  * Get number of tokens owned by a given account
  * 
  * Arguments:
  * * `account_id`: a valid NEAR account
  * 
  * Returns the number of non-fungible tokens owned by given `account_id` as
  * a string representing the value as an unsigned 128-bit integer to avoid JSON
  * number limit of 2^53.
  */
  nft_supply_for_owner(args: {
    account_id: AccountId;
  }, options?: ViewFunctionOptions): Promise<U128> {
    return this.account.viewFunction(this.contractId, "nft_supply_for_owner", args, options);
  }
  /**
  * Get list of all tokens owned by a given account
  * 
  * Arguments:
  * * `account_id`: a valid NEAR account
  * * `from_index`: a string representing an unsigned 128-bit integer,
  * representing the starting index of tokens to return. (default 0)
  * * `limit`: the maximum number of tokens to return. (default unlimited)
  * Could fail on gas
  * 
  * Returns a paginated list of all tokens owned by this account
  */
  nft_tokens_for_owner(args: {
    account_id: AccountId;
    from_index?: U128;
    limit?: u64;
  }, options?: ViewFunctionOptions): Promise<Token[]> {
    return this.account.viewFunction(this.contractId, "nft_tokens_for_owner", args, options);
  }
  total_cost(args: {
    num: u32;
  }, options?: ViewFunctionOptions): Promise<U128> {
    return this.account.viewFunction(this.contractId, "total_cost", args, options);
  }
  cost_per_token(args = {}, options?: ViewFunctionOptions): Promise<U128> {
    return this.account.viewFunction(this.contractId, "cost_per_token", args, options);
  }
  token_storage_cost(args = {}, options?: ViewFunctionOptions): Promise<U128> {
    return this.account.viewFunction(this.contractId, "token_storage_cost", args, options);
  }
  nft_metadata(args = {}, options?: ViewFunctionOptions): Promise<NftContractMetadata> {
    return this.account.viewFunction(this.contractId, "nft_metadata", args, options);
  }
  current_status(args = {}, options?: ViewFunctionOptions): Promise<string> {
    return this.account.viewFunction(this.contractId, "current_status", args, options);
  }
  async add_accounts_test(args: {
    accounts: AccountIdFile;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.add_accounts_testRaw(args, options));
  }
  add_accounts_testRaw(args: {
    accounts: AccountIdFile;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "add_accounts_test", args, ...options});
  }
  add_accounts_testTx(args: {
    accounts: AccountIdFile;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("add_accounts_test", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  /**
  * Create a new airdrop contract
  */
  async new_default(args: {
    owner_id: AccountId;
    metadata: InitialMetadata;
    royalties?: Royalties;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.new_defaultRaw(args, options));
  }
  /**
  * Create a new airdrop contract
  */
  new_defaultRaw(args: {
    owner_id: AccountId;
    metadata: InitialMetadata;
    royalties?: Royalties;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "new_default", args, ...options});
  }
  /**
  * Create a new airdrop contract
  */
  new_defaultTx(args: {
    owner_id: AccountId;
    metadata: InitialMetadata;
    royalties?: Royalties;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("new_default", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
  async new(args: {
    owner_id: AccountId;
    metadata: NftContractMetadata;
    royalties?: Royalties;
  }, options?: ChangeMethodOptions): Promise<void> {
    return providers.getTransactionLastResult(await this.newRaw(args, options));
  }
  newRaw(args: {
    owner_id: AccountId;
    metadata: NftContractMetadata;
    royalties?: Royalties;
  }, options?: ChangeMethodOptions): Promise<providers.FinalExecutionOutcome> {
    return this.account.functionCall({contractId: this.contractId, methodName: "new", args, ...options});
  }
  newTx(args: {
    owner_id: AccountId;
    metadata: NftContractMetadata;
    royalties?: Royalties;
  }, options?: ChangeMethodOptions): transactions.Action {
    return transactions.functionCall("new", args, options?.gas ?? DEFAULT_FUNCTION_CALL_GAS, options?.attachedDeposit ?? new BN(0))
  }
}
/**
* @allow ["::admins", "::owner"]
* 
* @contractMethod change
*/
export interface TransferOwnership {
  args: {
    new_owner: AccountId;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type TransferOwnership__Result = void;
/**
* @allow ["::admins", "::owner"]
* 
* @contractMethod change
*/
export interface UpdateUri {
  args: {
    uri: string;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type UpdateUri__Result = void;
/**
* Create a new airdrop campaign. Can only have one active at a time.
* Will fail if current airdrop campaign
* @allow ["::admins", "::owner"]
* 
* @contractMethod change
*/
export interface CreateAirdrop {
  args: {
    airdrop: AirdropInfo;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type CreateAirdrop__Result = void;
/**
* Add accounts that will be dropped to. An account
* can only be added once.
* @allow ["::admins", "::owner"]
* 
* @contractMethod change
*/
export interface AddAccounts {
  args: {
    accounts: AccountIdFile;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type AddAccounts__Result = void;
/**
* Drop a set of NFTs in current campaign
* @allow ["::admins", "::owner"]
* 
* @contractMethod change
*/
export interface DropMany {
  args: {
    num: u32;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type DropMany__Result = void;
/**
* Add a new admin. Careful who you add!
* @allow ["::admins", "::owner"]
* 
* @contractMethod change
*/
export interface AddAdmin {
  args: {
    account_id: AccountId;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type AddAdmin__Result = boolean;
/**
* 
* @contractMethod view
*/
export interface NftPayout {
  args: {
    token_id: string;
    balance: U128;
    max_len_payout?: u32;
  };
  
}
export type NftPayout__Result = Payout;
/**
* 
* @contractMethod change
*/
export interface NftTransferPayout {
  args: {
    receiver_id: AccountId;
    token_id: string;
    approval_id?: u64;
    memo?: string;
    balance: U128;
    max_len_payout?: u32;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type NftTransferPayout__Result = Payout;
/**
* Simple transfer. Transfer a given `token_id` from current owner to
* `receiver_id`.
* 
* Requirements
* * Caller of the method must attach a deposit of 1 yoctoⓃ for security purposes
* * Contract MUST panic if called by someone other than token owner or,
* if using Approval Management, one of the approved accounts
* * `approval_id` is for use with Approval Management,
* see <https://nomicon.io/Standards/NonFungibleToken/ApprovalManagement.html>
* * If using Approval Management, contract MUST nullify approved accounts on
* successful transfer.
* * TODO: needed? Both accounts must be registered with the contract for transfer to
* succeed. See see <https://nomicon.io/Standards/StorageManagement.html>
* 
* Arguments:
* * `receiver_id`: the valid NEAR account receiving the token
* * `token_id`: the token to transfer
* * `approval_id`: expected approval ID. A number smaller than
* 2^53, and therefore representable as JSON. See Approval Management
* standard for full explanation.
* * `memo` (optional): for use cases that may benefit from indexing or
* providing information for a transfer
* 
* @contractMethod change
*/
export interface NftTransfer {
  args: {
    receiver_id: AccountId;
    token_id: TokenId;
    approval_id?: u64;
    memo?: string;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type NftTransfer__Result = void;
/**
* Transfer token and call a method on a receiver contract. A successful
* workflow will end in a success execution outcome to the callback on the NFT
* contract at the method `nft_resolve_transfer`.
* 
* You can think of this as being similar to attaching native NEAR tokens to a
* function call. It allows you to attach any Non-Fungible Token in a call to a
* receiver contract.
* 
* Requirements:
* * Caller of the method must attach a deposit of 1 yoctoⓃ for security
* purposes
* * Contract MUST panic if called by someone other than token owner or,
* if using Approval Management, one of the approved accounts
* * The receiving contract must implement `ft_on_transfer` according to the
* standard. If it does not, FT contract's `ft_resolve_transfer` MUST deal
* with the resulting failed cross-contract call and roll back the transfer.
* * Contract MUST implement the behavior described in `ft_resolve_transfer`
* * `approval_id` is for use with Approval Management extension, see
* that document for full explanation.
* * If using Approval Management, contract MUST nullify approved accounts on
* successful transfer.
* 
* Arguments:
* * `receiver_id`: the valid NEAR account receiving the token.
* * `token_id`: the token to send.
* * `approval_id`: expected approval ID. A number smaller than
* 2^53, and therefore representable as JSON. See Approval Management
* standard for full explanation.
* * `memo` (optional): for use cases that may benefit from indexing or
* providing information for a transfer.
* * `msg`: specifies information needed by the receiving contract in
* order to properly handle the transfer. Can indicate both a function to
* call and the parameters to pass to that function.
* 
* @contractMethod change
*/
export interface NftTransferCall {
  args: {
    receiver_id: AccountId;
    token_id: TokenId;
    approval_id?: u64;
    memo?: string;
    msg: string;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type NftTransferCall__Result = void;
/**
* Returns the token with the given `token_id` or `null` if no such token.
* 
* @contractMethod view
*/
export interface NftToken {
  args: {
    token_id: TokenId;
  };
  
}
export type NftToken__Result = Token | null;
/**
* Add an approved account for a specific token.
* 
* Requirements
* * Caller of the method must attach a deposit of at least 1 yoctoⓃ for
* security purposes
* * Contract MAY require caller to attach larger deposit, to cover cost of
* storing approver data
* * Contract MUST panic if called by someone other than token owner
* * Contract MUST panic if addition would cause `nft_revoke_all` to exceed
* single-block gas limit
* * Contract MUST increment approval ID even if re-approving an account
* * If successfully approved or if had already been approved, and if `msg` is
* present, contract MUST call `nft_on_approve` on `account_id`. See
* `nft_on_approve` description below for details.
* 
* Arguments:
* * `token_id`: the token for which to add an approval
* * `account_id`: the account to add to `approvals`
* * `msg`: optional string to be passed to `nft_on_approve`
* 
* Returns void, if no `msg` given. Otherwise, returns promise call to
* `nft_on_approve`, which can resolve with whatever it wants.
* 
* @contractMethod change
*/
export interface NftApprove {
  args: {
    token_id: TokenId;
    account_id: AccountId;
    msg?: string;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type NftApprove__Result = void;
/**
* Revoke an approved account for a specific token.
* 
* Requirements
* * Caller of the method must attach a deposit of 1 yoctoⓃ for security
* purposes
* * If contract requires >1yN deposit on `nft_approve`, contract
* MUST refund associated storage deposit when owner revokes approval
* * Contract MUST panic if called by someone other than token owner
* 
* Arguments:
* * `token_id`: the token for which to revoke an approval
* * `account_id`: the account to remove from `approvals`
* 
* @contractMethod change
*/
export interface NftRevoke {
  args: {
    token_id: TokenId;
    account_id: AccountId;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type NftRevoke__Result = void;
/**
* Revoke all approved accounts for a specific token.
* 
* Requirements
* * Caller of the method must attach a deposit of 1 yoctoⓃ for security
* purposes
* * If contract requires >1yN deposit on `nft_approve`, contract
* MUST refund all associated storage deposit when owner revokes approvals
* * Contract MUST panic if called by someone other than token owner
* 
* Arguments:
* * `token_id`: the token with approvals to revoke
* 
* @contractMethod change
*/
export interface NftRevokeAll {
  args: {
    token_id: TokenId;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type NftRevokeAll__Result = void;
/**
* Check if a token is approved for transfer by a given account, optionally
* checking an approval_id
* 
* Arguments:
* * `token_id`: the token for which to revoke an approval
* * `approved_account_id`: the account to check the existence of in `approvals`
* * `approval_id`: an optional approval ID to check against current approval ID for given account
* 
* Returns:
* if `approval_id` given, `true` if `approved_account_id` is approved with given `approval_id`
* otherwise, `true` if `approved_account_id` is in list of approved accounts
* 
* @contractMethod view
*/
export interface NftIsApproved {
  args: {
    token_id: TokenId;
    approved_account_id: AccountId;
    approval_id?: u64;
  };
  
}
export type NftIsApproved__Result = boolean;
/**
* Returns the total supply of non-fungible tokens as a string representing an
* unsigned 128-bit integer to avoid JSON number limit of 2^53.
* 
* @contractMethod view
*/
export interface NftTotalSupply {
  args: {};
  
}
export type NftTotalSupply__Result = U128;
/**
* Get a list of all tokens
* 
* Arguments:
* * `from_index`: a string representing an unsigned 128-bit integer,
* representing the starting index of tokens to return. (default 0)
* * `limit`: the maximum number of tokens to return (default total supply)
* Could fail on gas
* 
* Returns an array of Token objects, as described in Core standard
* 
* @contractMethod view
*/
export interface NftTokens {
  args: {
    from_index?: U128;
    limit?: u64;
  };
  
}
export type NftTokens__Result = Token[];
/**
* Get number of tokens owned by a given account
* 
* Arguments:
* * `account_id`: a valid NEAR account
* 
* Returns the number of non-fungible tokens owned by given `account_id` as
* a string representing the value as an unsigned 128-bit integer to avoid JSON
* number limit of 2^53.
* 
* @contractMethod view
*/
export interface NftSupplyForOwner {
  args: {
    account_id: AccountId;
  };
  
}
export type NftSupplyForOwner__Result = U128;
/**
* Get list of all tokens owned by a given account
* 
* Arguments:
* * `account_id`: a valid NEAR account
* * `from_index`: a string representing an unsigned 128-bit integer,
* representing the starting index of tokens to return. (default 0)
* * `limit`: the maximum number of tokens to return. (default unlimited)
* Could fail on gas
* 
* Returns a paginated list of all tokens owned by this account
* 
* @contractMethod view
*/
export interface NftTokensForOwner {
  args: {
    account_id: AccountId;
    from_index?: U128;
    limit?: u64;
  };
  
}
export type NftTokensForOwner__Result = Token[];
/**
* 
* @contractMethod view
*/
export interface TotalCost {
  args: {
    num: u32;
  };
  
}
export type TotalCost__Result = U128;
/**
* 
* @contractMethod view
*/
export interface CostPerToken {
  args: {};
  
}
export type CostPerToken__Result = U128;
/**
* 
* @contractMethod view
*/
export interface TokenStorageCost {
  args: {};
  
}
export type TokenStorageCost__Result = U128;
/**
* 
* @contractMethod view
*/
export interface NftMetadata {
  args: {};
  
}
export type NftMetadata__Result = NftContractMetadata;
/**
* 
* @contractMethod view
*/
export interface CurrentStatus {
  args: {};
  
}
export type CurrentStatus__Result = string;
/**
* 
* @contractMethod change
*/
export interface AddAccountsTest {
  args: {
    accounts: AccountIdFile;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type AddAccountsTest__Result = void;
/**
* Create a new airdrop contract
* 
* @contractMethod change
*/
export interface NewDefault {
  args: {
    owner_id: AccountId;
    metadata: InitialMetadata;
    royalties?: Royalties;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type NewDefault__Result = void;
/**
* 
* @contractMethod change
*/
export interface New {
  args: {
    owner_id: AccountId;
    metadata: NftContractMetadata;
    royalties?: Royalties;
  };
  options: {
    /** Units in gas
    * @pattern [0-9]+
    * @default "30000000000000"
    */
    gas?: string;
    /** Units in yoctoNear
    * @default "0"
    */
    attachedDeposit?: Balance;
  }
  
}
export type New__Result = void;
