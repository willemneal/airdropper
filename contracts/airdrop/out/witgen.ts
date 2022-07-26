// Note that token IDs for NFTs are strings on NEAR. It's still fine to use autoincrementing numbers as unique IDs if desired, but they should be stringified. This is to make IDs more future-proof as chain-agnostic conventions and standards arise, and allows for more flexibility with considerations like bridging NFTs across chains, etc.
export type TokenId = string;
export type AccountId = string;
export type Base64VecU8 = string;
export type U128 = string;
export interface Token {
  token_id: TokenId,
  owner_id: AccountId,
  metadata?: TokenMetadata,
  approved_account_ids?: {[key: AccountId]:bigint},
}
// Metadata on the individual token level.
export interface TokenMetadata {
  title?: string,
  description?: string,
  media?: string,
  media_hash?: Base64VecU8,
  copies?: bigint,
  issued_at?: string,
  expires_at?: string,
  starts_at?: string,
  updated_at?: string,
  extra?: string,
  reference?: string,
  reference_hash?: Base64VecU8,
}
// Metadata for the NFT contract itself.
export interface NftContractMetadata {
  spec: string,
  name: string,
  symbol: string,
  icon?: string,
  base_uri?: string,
  reference?: string,
  reference_hash?: Base64VecU8,
}
export type PublicKey = string;
export type BasisPoint = number;
export type BatchPromise = [];
export interface InitialMetadata {
  name: string,
  symbol: string,
  uri: string,
  icon?: string,
  spec?: string,
  reference?: string,
  reference_hash?: Base64VecU8,
}
export interface Sale {
  royalties?: Royalties,
  initial_royalties?: Royalties,
  is_premint?: boolean,
  is_premint_over?: boolean,
  allowance?: number,
}
// Copied from https://github.com/near/NEPs/blob/6170aba1c6f4cd4804e9ad442caeae9dc47e7d44/specs/Standards/NonFungibleToken/Payout.md#reference-level-explanation
// A mapping of NEAR accounts to the amount each should be paid out, in
// the event of a token-sale. The payout mapping MUST be shorter than the
// maximum length specified by the financial contract obtaining this
// payout data. Any mapping of length 10 or less MUST be accepted by
// financial contracts, so 10 is a safe upper limit.
// This currently deviates from the standard but is in the process of updating to use this type
export interface Payout {
  payout: {[key: AccountId]:U128},
}
export interface PriceStructure {
  base_cost: U128,
  min_cost?: U128,
  percent_off?: number,
}
export interface Royalties {
  accounts: {[key: AccountId]:BasisPoint},
  percent: BasisPoint,
}

import { Gas, NEAR } from "near-units";
/**
* Options used to initiate a function call (especially a change function call)
* @see {@link viewFunction} to initiate a view function call
*/
export interface CallOptions<T> {
  /**
  * named arguments to pass the method `{ messageText: 'my message' }`
  */
  args: T;
  /** max amount of gas that method call can use */
  gas?: Gas;
  /** amount of NEAR (in yoctoNEAR) to send together with the call */
  attachedDeposit?: NEAR;
  /**
  * Metadata to send the NEAR Wallet if using it to sign transactions.
  * @see {@link RequestSignTransactionsOptions}
  */
  walletMeta?: string;
  /**
  * Callback url to send the NEAR Wallet if using it to sign transactions.
  * @see {@link RequestSignTransactionsOptions}
  */
  walletCallbackUrl?: string;
  /**
  * Convert input arguments into bytes array.
  */
  // stringify?: (input: any) => Buffer;
}
import { Contract as _Contract, Account } from 'near-api-js';
export interface Contract extends _Contract {
  update_allowance(props: CallOptions<{allowance: number}>): Promise<void>;
  transfer_ownership(props: CallOptions<{new_owner: AccountId}>): Promise<void>;
  create_linkdrop(props: CallOptions<{public_key: PublicKey}>): Promise<void>;
  nft_approve(props: CallOptions<{token_id: TokenId, account_id: AccountId, msg?: string}>): Promise<void>;
  whitelisted(args: {account_id: AccountId}): Promise<boolean>;
  total_cost(args: {num: number, minter: AccountId}): Promise<U128>;
  nft_mint_many(props: CallOptions<{num: number}>): Promise<Token[]>;
  start_premint(props: CallOptions<{duration: bigint}>): Promise<void>;
  nft_payout(args: {token_id: string, balance: U128, max_len_payout?: number}): Promise<Payout>;
  nft_transfer_call(props: CallOptions<{receiver_id: AccountId, token_id: TokenId, approval_id?: bigint, memo?: string, msg: string}>): Promise<void>;
  nft_transfer_payout(props: CallOptions<{receiver_id: AccountId, token_id: string, approval_id?: bigint, memo?: string, balance: U128, max_len_payout?: number}>): Promise<Payout>;
  token_storage_cost(): Promise<U128>;
  remaining_allowance(args: {account_id: AccountId}): Promise<number>;
  add_whitelist_accounts(props: CallOptions<{accounts: AccountId[], allowance?: number}>): Promise<void>;
  tokens_left(): Promise<number>;
  end_premint(props: CallOptions<{base_cost: U128, min_cost: U128, percent_off?: number}>): Promise<void>;
  check_key(args: {public_key: PublicKey}): Promise<boolean>;
  discount(args: {num: number}): Promise<U128>;
  nft_total_supply(): Promise<U128>;
  nft_supply_for_owner(args: {account_id: AccountId}): Promise<U128>;
  nft_transfer(props: CallOptions<{receiver_id: AccountId, token_id: TokenId, approval_id?: bigint, memo?: string}>): Promise<void>;
  nft_revoke_all(props: CallOptions<{token_id: TokenId}>): Promise<void>;
  update_royalties(props: CallOptions<{royalties: Royalties}>): Promise<Royalties | null>;
  cost_per_token(args: {num: number, minter: AccountId}): Promise<U128>;
  nft_metadata(): Promise<NftContractMetadata>;
  new(props: CallOptions<{owner_id: AccountId, metadata: NftContractMetadata, size: number, price_structure: PriceStructure, sale: Sale}>): Promise<void>;
  // Returns the balance associated with given key.
  get_key_balance(): Promise<U128>;
  nft_revoke(props: CallOptions<{token_id: TokenId, account_id: AccountId}>): Promise<void>;
  nft_is_approved(args: {token_id: TokenId, approved_account_id: AccountId, approval_id?: bigint}): Promise<boolean>;
  get_linkdrop_contract(): Promise<AccountId>;
  cost_of_linkdrop(args: {minter: AccountId}): Promise<U128>;
  nft_mint(props: CallOptions<{token_id: TokenId, token_owner_id: AccountId, token_metadata: TokenMetadata}>): Promise<Token>;
  nft_token(args: {token_id: TokenId}): Promise<Token | null>;
  new_default_meta(props: CallOptions<{owner_id: AccountId, metadata: InitialMetadata, size: number, price_structure: PriceStructure, sale?: Sale}>): Promise<void>;
  add_whitelist_account_ungaurded(props: CallOptions<{account_id: AccountId, allowance: number}>): Promise<void>;
  nft_mint_one(): Promise<Token>;
}
export function init(account: Account, contractId: string): Contract {
  return <Contract> new _Contract(account, contractId, {viewMethods: ["whitelisted", "total_cost", "nft_payout", "token_storage_cost", "remaining_allowance", "tokens_left", "check_key", "discount", "nft_total_supply", "nft_supply_for_owner", "cost_per_token", "nft_metadata", "get_key_balance", "nft_is_approved", "get_linkdrop_contract", "cost_of_linkdrop", "nft_token"], changeMethods: ["update_allowance","transfer_ownership","create_linkdrop","nft_approve","nft_mint_many","start_premint","nft_transfer_call","nft_transfer_payout","add_whitelist_accounts","end_premint","nft_transfer","nft_revoke_all","update_royalties","new","nft_revoke","nft_mint","new_default_meta","add_whitelist_account_ungaurded","nft_mint_one"]})
}
