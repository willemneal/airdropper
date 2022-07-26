"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const near_api_js_1 = require("near-api-js");
const bn_js_1 = __importDefault(require("bn.js"));
class Contract {
    constructor(account, contractId) {
        this.account = account;
        this.contractId = contractId;
    }
    async update_allowance(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.update_allowanceRaw(args, options));
    }
    update_allowanceRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "update_allowance", args, ...options });
    }
    update_allowanceTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("update_allowance", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    async transfer_ownership(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.transfer_ownershipRaw(args, options));
    }
    transfer_ownershipRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "transfer_ownership", args, ...options });
    }
    transfer_ownershipTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("transfer_ownership", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    async nft_approve(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_approveRaw(args, options));
    }
    nft_approveRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_approve", args, ...options });
    }
    nft_approveTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_approve", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    whitelisted(args, options) {
        return this.account.viewFunction(this.contractId, "whitelisted", args, options);
    }
    total_cost(args, options) {
        return this.account.viewFunction(this.contractId, "total_cost", args, options);
    }
    async nft_mint_many(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_mint_manyRaw(args, options));
    }
    nft_mint_manyRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_mint_many", args, ...options });
    }
    nft_mint_manyTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_mint_many", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    async start_premint(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.start_premintRaw(args, options));
    }
    start_premintRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "start_premint", args, ...options });
    }
    start_premintTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("start_premint", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    nft_payout(args, options) {
        return this.account.viewFunction(this.contractId, "nft_payout", args, options);
    }
    async nft_transfer_call(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_transfer_callRaw(args, options));
    }
    nft_transfer_callRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_transfer_call", args, ...options });
    }
    nft_transfer_callTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_transfer_call", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    async nft_transfer_payout(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_transfer_payoutRaw(args, options));
    }
    nft_transfer_payoutRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_transfer_payout", args, ...options });
    }
    nft_transfer_payoutTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_transfer_payout", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    token_storage_cost(args = {}, options) {
        return this.account.viewFunction(this.contractId, "token_storage_cost", args, options);
    }
    /**
    * Create a pending token that can be claimed with corresponding private key
    */
    async create_linkdrop(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.create_linkdropRaw(args, options));
    }
    /**
    * Create a pending token that can be claimed with corresponding private key
    */
    create_linkdropRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "create_linkdrop", args, ...options });
    }
    /**
    * Create a pending token that can be claimed with corresponding private key
    */
    create_linkdropTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("create_linkdrop", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    remaining_allowance(args, options) {
        return this.account.viewFunction(this.contractId, "remaining_allowance", args, options);
    }
    async add_whitelist_accounts(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.add_whitelist_accountsRaw(args, options));
    }
    add_whitelist_accountsRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "add_whitelist_accounts", args, ...options });
    }
    add_whitelist_accountsTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("add_whitelist_accounts", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    tokens_left(args = {}, options) {
        return this.account.viewFunction(this.contractId, "tokens_left", args, options);
    }
    async end_premint(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.end_premintRaw(args, options));
    }
    end_premintRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "end_premint", args, ...options });
    }
    end_premintTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("end_premint", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    check_key(args, options) {
        return this.account.viewFunction(this.contractId, "check_key", args, options);
    }
    discount(args, options) {
        return this.account.viewFunction(this.contractId, "discount", args, options);
    }
    nft_total_supply(args = {}, options) {
        return this.account.viewFunction(this.contractId, "nft_total_supply", args, options);
    }
    nft_supply_for_owner(args, options) {
        return this.account.viewFunction(this.contractId, "nft_supply_for_owner", args, options);
    }
    async nft_transfer(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_transferRaw(args, options));
    }
    nft_transferRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_transfer", args, ...options });
    }
    nft_transferTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_transfer", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    async nft_revoke_all(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_revoke_allRaw(args, options));
    }
    nft_revoke_allRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_revoke_all", args, ...options });
    }
    nft_revoke_allTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_revoke_all", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    async update_royalties(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.update_royaltiesRaw(args, options));
    }
    update_royaltiesRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "update_royalties", args, ...options });
    }
    update_royaltiesTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("update_royalties", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    cost_per_token(args, options) {
        return this.account.viewFunction(this.contractId, "cost_per_token", args, options);
    }
    nft_metadata(args = {}, options) {
        return this.account.viewFunction(this.contractId, "nft_metadata", args, options);
    }
    async new(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.newRaw(args, options));
    }
    newRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "new", args, ...options });
    }
    newTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("new", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    /**
    * Returns the balance associated with given key.
    */
    get_key_balance(args = {}, options) {
        return this.account.viewFunction(this.contractId, "get_key_balance", args, options);
    }
    async nft_revoke(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_revokeRaw(args, options));
    }
    nft_revokeRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_revoke", args, ...options });
    }
    nft_revokeTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_revoke", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    nft_is_approved(args, options) {
        return this.account.viewFunction(this.contractId, "nft_is_approved", args, options);
    }
    get_linkdrop_contract(args = {}, options) {
        return this.account.viewFunction(this.contractId, "get_linkdrop_contract", args, options);
    }
    cost_of_linkdrop(args, options) {
        return this.account.viewFunction(this.contractId, "cost_of_linkdrop", args, options);
    }
    async nft_mint(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_mintRaw(args, options));
    }
    nft_mintRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_mint", args, ...options });
    }
    nft_mintTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_mint", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    nft_token(args, options) {
        return this.account.viewFunction(this.contractId, "nft_token", args, options);
    }
    async new_default_meta(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.new_default_metaRaw(args, options));
    }
    new_default_metaRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "new_default_meta", args, ...options });
    }
    new_default_metaTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("new_default_meta", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    async add_whitelist_account_ungaurded(args, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.add_whitelist_account_ungaurdedRaw(args, options));
    }
    add_whitelist_account_ungaurdedRaw(args, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "add_whitelist_account_ungaurded", args, ...options });
    }
    add_whitelist_account_ungaurdedTx(args, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("add_whitelist_account_ungaurded", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
    async nft_mint_one(args = {}, options) {
        return near_api_js_1.providers.getTransactionLastResult(await this.nft_mint_oneRaw(args, options));
    }
    nft_mint_oneRaw(args = {}, options) {
        return this.account.functionCall({ contractId: this.contractId, methodName: "nft_mint_one", args, ...options });
    }
    nft_mint_oneTx(args = {}, options) {
        var _a, _b;
        return near_api_js_1.transactions.functionCall("nft_mint_one", args, (_a = options === null || options === void 0 ? void 0 : options.gas) !== null && _a !== void 0 ? _a : near_api_js_1.DEFAULT_FUNCTION_CALL_GAS, (_b = options === null || options === void 0 ? void 0 : options.attachedDeposit) !== null && _b !== void 0 ? _b : new bn_js_1.default(0));
    }
}
exports.Contract = Contract;
