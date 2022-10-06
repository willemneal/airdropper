import { Contract } from "..";

export async function main({ account, argv }) {
  if (argv.length < 1) {
    console.error("Help:\n<new_admin>");
    process.exit(1);
  }

  const [account_id, ] = argv as string[];

  const contract = new Contract(account, account.accountId);

  console.log(await contract.add_admin({account_id}))
}
