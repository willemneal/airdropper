import { NEAR, Gas } from "near-units";
import { readFile } from "fs/promises";
import { Context } from "near-cli/context";
import { binPath } from "./utils";
import { icon } from "./icon";
// import airdrop from "..";
import { NewDefault, InitialMetadata, Contract } from "..";

const metadata: InitialMetadata  = {
  // base_uri: "https://bafybeig2n3snesybecbnnypextbehyak54rdqeempffbvu5jqrp3oejnj4.ipfs.dweb.link",
  name: "Air Drop Me",
  symbol: "ADM",
  icon,
};

type InitArgs = NewDefault["args"];

export async function main({ account, nearAPI, argv, near }: Context) {
  let { Account } = nearAPI;
  const contractBytes = await readFile(binPath("airdrop"));

  let [contractId] = argv ?? [];
  contractId = contractId ?? account.accountId;
  let contractAccount = new Account(near.connection, contractId);

  const isTestnet = contractId.endsWith("testnet");
  

  const initialArgs: InitArgs  = {
    owner_id: account.accountId,
    metadata,
  };

  const contract = new Contract(account, contractId);

  const tx = account
    .createTransaction(contractId)
    .deployContract(contractBytes);

  if (await contractAccount.hasDeployedContract()) {
    console.log(`initializing with: \n${JSON.stringify(initialArgs, null, 2)}`);
    tx.actions.push(
      contract.new_defaultTx(initialArgs, { gas: Gas.parse("50Tgas") })
    );
  }
  let res = await tx.signAndSend();
  console.log(
    `https://explorer${isTestnet ? ".testnet" : ""}.near.org/transactions/${
      res.transaction_outcome.id
    }`
  );
  //@ts-ignore
  if (res.status.SuccessValue != undefined) {
    console.log(`deployed ${contractId}`);
  } else {
    console.log(res);
  }
}
