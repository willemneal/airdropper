import { Context } from "near-cli/context";
import { Contract } from "../contracts/tenk/dist";
import { getPublicKey } from "./utils";


export async function main({ account, argv }: Context) {
  
  let contract = new Contract(account, account.accountId);
  console.log((await contract.nft_metadata()).icon);
}
