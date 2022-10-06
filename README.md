# Airdropper

This contract will allow creating airdrop campaigns to drop a copy of an NFT to a list of accounts.



### Deploy

```bash
yarn deploy:testnet --accountId <contract_on.testnet>
```

### Add admin

```bash
yarn near repl -s ./scripts/add-admin.ts -- <new_admin_address>
```

### Check out admin panel

https://raen.dev/admin/

1. create_airdrop

2. add_accounts

3. drop_many