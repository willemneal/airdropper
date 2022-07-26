import { Context } from "near-cli/context";
import { Contract } from "../contracts/tenk/dist";
import { Gas } from "near-units";

const gas = Gas.parse("300 Tgas");



export async function main({ account, argv }: Context) {
  // let owners = new Set(tokens.map(t => t.ownerId));
  // let hhc_owners = new Set(hhc_tokens.map(t => t.owner_id))
  let rest_owners = new Set(rest);
  // console.log(rest_owners.size, rest.length);
  let accounts = Array.from(rest_owners);
  // return;
  // console.log(owners.size, hhc_owners.size);
  // let owners1 = Array.from(owners).concat(Array.from(hhc_owners));
  // let total_owners = new Set(owners1).size;
  // return;
  // const contract = new Contract(account, account.accountId);
  // // return;
  // let owners_count = Array.from(owners).map(o => {
  //   let num = tokens.reduce((acc, curr) => curr.ownerId === o ? acc + 1 : acc, 0);
  //   return {owner_id: o, num}
  // });
  // // console.log(owners_count)
  // let owner_array = Array.from(owners);
  // let max = owner_array.length;

  for (let i = 0; i < accounts.length; i = i + 10){
    let token_owners = accounts.slice(i, i + 10);
    // const tokens = await contract.nft_tokens_for_owner({account_id});
    console.log(`about to mint ${token_owners}`);
    // await contract.nft_mint_many({token_owners}, {gas})
  //   if (tokens.length < owner.num * 2) {
  //     console.log("owner", owner.owner_id, tokens.length, owner.num*2);
  //     const newToken = await contract.nft_mint_one();
  //     console.log("minted", newToken);
  //     await contract.nft_transfer({receiver_id: owner.owner_id, token_id: newToken.token_id}, {attachedDeposit: "1"});
  //     console.log("transfer completed", owner.owner_id)

  //   }
  }
}

let tokens = [
      {
        "id": "1",
        "ownerId": "lilcrow.near"
      },
      {
        "id": "1009",
        "ownerId": "kangarooz.near"
      },
      {
        "id": "1015",
        "ownerId": "itax.near"
      },
      {
        "id": "1031",
        "ownerId": "itax.near"
      },
      {
        "id": "1032",
        "ownerId": "starpause.near"
      },
      {
        "id": "1038",
        "ownerId": "naut.near"
      },
      {
        "id": "1046",
        "ownerId": "adzyboy.near"
      },
      {
        "id": "1062",
        "ownerId": "hansson.near"
      },
      {
        "id": "1067",
        "ownerId": "earthshine.near"
      },
      {
        "id": "1071",
        "ownerId": "sunrise22.near"
      },
      {
        "id": "1080",
        "ownerId": "tan69dao.near"
      },
      {
        "id": "1087",
        "ownerId": "5chan.near"
      },
      {
        "id": "1090",
        "ownerId": "rimberjack.near"
      },
      {
        "id": "1091",
        "ownerId": "codame.near"
      },
      {
        "id": "1098",
        "ownerId": "jiljungjuk.near"
      },
      {
        "id": "1119",
        "ownerId": "oublas.near"
      },
      {
        "id": "1121",
        "ownerId": "kbneoburner3.near"
      },
      {
        "id": "1130",
        "ownerId": "nypburn.near"
      },
      {
        "id": "1134",
        "ownerId": "kapik.near"
      },
      {
        "id": "1137",
        "ownerId": "nick.near"
      },
      {
        "id": "1144",
        "ownerId": "goudvis.near"
      },
      {
        "id": "1147",
        "ownerId": "lilcrow.near"
      },
      {
        "id": "1156",
        "ownerId": "rimberjack.near"
      },
      {
        "id": "116",
        "ownerId": "yellowbear.near"
      },
      {
        "id": "1164",
        "ownerId": "pwwm.near"
      },
      {
        "id": "1167",
        "ownerId": "person_kinds.near"
      },
      {
        "id": "1205",
        "ownerId": "nftbuzz.near"
      },
      {
        "id": "123",
        "ownerId": "kimchiman.near"
      },
      {
        "id": "1244",
        "ownerId": "kenny0001.near"
      },
      {
        "id": "1250",
        "ownerId": "adzyboy.near"
      },
      {
        "id": "1256",
        "ownerId": "oji-sama.near"
      },
      {
        "id": "1298",
        "ownerId": "adzyboy.near"
      },
      {
        "id": "1303",
        "ownerId": "malamaya.near"
      },
      {
        "id": "1305",
        "ownerId": "chadoh.near"
      },
      {
        "id": "1315",
        "ownerId": "kimchiman.near"
      },
      {
        "id": "1321",
        "ownerId": "rimberjack.near"
      },
      {
        "id": "1343",
        "ownerId": "kapik.near"
      },
      {
        "id": "1350",
        "ownerId": "nypburn.near"
      },
      {
        "id": "1352",
        "ownerId": "starpause.near"
      },
      {
        "id": "1367",
        "ownerId": "oublas.near"
      },
      {
        "id": "1369",
        "ownerId": "yellowbear.near"
      },
      {
        "id": "1373",
        "ownerId": "sunrise22.near"
      },
      {
        "id": "1404",
        "ownerId": "aqzu.near"
      },
      {
        "id": "142",
        "ownerId": "ceaze.near"
      },
      {
        "id": "1426",
        "ownerId": "oublas.near"
      },
      {
        "id": "1428",
        "ownerId": "yellowbear.near"
      },
      {
        "id": "1434",
        "ownerId": "rimberjack.near"
      },
      {
        "id": "1436",
        "ownerId": "nypburn.near"
      },
      {
        "id": "1439",
        "ownerId": "bawz.near"
      },
      {
        "id": "1440",
        "ownerId": "kimchiman.near"
      },
      {
        "id": "1442",
        "ownerId": "jotei.near"
      },
      {
        "id": "1445",
        "ownerId": "iotha.near"
      },
      {
        "id": "1447",
        "ownerId": "bawz.near"
      },
      {
        "id": "1450",
        "ownerId": "jotei.near"
      },
      {
        "id": "1451",
        "ownerId": "jotei.near"
      },
      {
        "id": "1475",
        "ownerId": "rimberjack.near"
      },
      {
        "id": "150",
        "ownerId": "boorner.near"
      },
      {
        "id": "1520",
        "ownerId": "starpause.near"
      },
      {
        "id": "1522",
        "ownerId": "goudvis.near"
      },
      {
        "id": "1525",
        "ownerId": "nick.near"
      },
      {
        "id": "1529",
        "ownerId": "tan69dao.near"
      },
      {
        "id": "153",
        "ownerId": "dyepburner.near"
      },
      {
        "id": "1535",
        "ownerId": "kbneoburner3.near"
      },
      {
        "id": "1537",
        "ownerId": "lilcrow.near"
      },
      {
        "id": "1547",
        "ownerId": "kimchiman.near"
      },
      {
        "id": "1550",
        "ownerId": "kimchiman.near"
      },
      {
        "id": "1560",
        "ownerId": "jotei.near"
      },
      {
        "id": "1561",
        "ownerId": "codame.near"
      },
      {
        "id": "1568",
        "ownerId": "solunagg.near"
      },
      {
        "id": "1581",
        "ownerId": "dyepburner.near"
      },
      {
        "id": "1597",
        "ownerId": "naut.near"
      },
      {
        "id": "1599",
        "ownerId": "boorner.near"
      },
      {
        "id": "1621",
        "ownerId": "sheeshh.near"
      },
      {
        "id": "1631",
        "ownerId": "whatshertoes.near"
      },
      {
        "id": "1640",
        "ownerId": "pwwm.near"
      },
      {
        "id": "1643",
        "ownerId": "oji-sama.near"
      },
      {
        "id": "1646",
        "ownerId": "solunagg.near"
      },
      {
        "id": "1648",
        "ownerId": "graf.near"
      },
      {
        "id": "1655",
        "ownerId": "oublas.near"
      },
      {
        "id": "1657",
        "ownerId": "ceaze.near"
      },
      {
        "id": "1689",
        "ownerId": "oublas.near"
      },
      {
        "id": "1701",
        "ownerId": "nftbuzz.near"
      },
      {
        "id": "1705",
        "ownerId": "adzyboy.near"
      },
      {
        "id": "1719",
        "ownerId": "chalok.near"
      },
      {
        "id": "1720",
        "ownerId": "jotei.near"
      },
      {
        "id": "1727",
        "ownerId": "starpause.near"
      },
      {
        "id": "1738",
        "ownerId": "malamaya.near"
      },
      {
        "id": "1746",
        "ownerId": "velz.near"
      },
      {
        "id": "1755",
        "ownerId": "b079f19414c136309da82b9dc29a7d292c2ed727b785a75e7a4ba8d39605974b"
      },
      {
        "id": "1763",
        "ownerId": "starpause.near"
      },
      {
        "id": "1783",
        "ownerId": "jhezer.near"
      },
      {
        "id": "1791",
        "ownerId": "whatshertoes.near"
      },
      {
        "id": "1808",
        "ownerId": "jotei.near"
      },
      {
        "id": "1823",
        "ownerId": "oublas.near"
      },
      {
        "id": "1826",
        "ownerId": "charliedusk.near"
      },
      {
        "id": "1837",
        "ownerId": "adzyboy.near"
      },
      {
        "id": "1838",
        "ownerId": "kenny0001.near"
      },
      {
        "id": "1850",
        "ownerId": "rimberjack.near"
      },
      {
        "id": "1851",
        "ownerId": "paus.near"
      },
      {
        "id": "1856",
        "ownerId": "mumnag.near"
      }
]

let hhc_tokens = [
  {
    "token_id": "0",
    "owner_id": "vaudoo.near"
  },
  {
    "token_id": "1",
    "owner_id": "jsibsss.near"
  },
  {
    "token_id": "3",
    "owner_id": "domsnft.near"
  },
  {
    "token_id": "5",
    "owner_id": "ae26d2a17dfd479af47c170b9139ed1a1ffda2ebe5cddf493f14639e3b135777"
  },
  {
    "token_id": "6",
    "owner_id": "burnhhc.near"
  },
  {
    "token_id": "7",
    "owner_id": "yumifurb.near"
  },
  {
    "token_id": "8",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "10",
    "owner_id": "i18.near"
  },
  {
    "token_id": "11",
    "owner_id": "0a62e9c69b344ab413f5867de6e853464d21ba4b9a75c6fd3597d7fcefc26dd2"
  },
  {
    "token_id": "12",
    "owner_id": "sledge.near"
  },
  {
    "token_id": "15",
    "owner_id": "erbazz.near"
  },
  {
    "token_id": "16",
    "owner_id": "fb43e4ca5d1e7358e0517e13dbc9adbf756b10c8fe0c1babe180d836f5f8f3a2"
  },
  {
    "token_id": "21",
    "owner_id": "train_29dayguild.near"
  },
  {
    "token_id": "22",
    "owner_id": "stainedglassnfts.near"
  },
  {
    "token_id": "23",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "24",
    "owner_id": "kentvl.near"
  },
  {
    "token_id": "28",
    "owner_id": "ae26d2a17dfd479af47c170b9139ed1a1ffda2ebe5cddf493f14639e3b135777"
  },
  {
    "token_id": "31",
    "owner_id": "defbond.near"
  },
  {
    "token_id": "32",
    "owner_id": "kevinyao0214.near"
  },
  {
    "token_id": "33",
    "owner_id": "kuroyami.near"
  },
  {
    "token_id": "39",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "42",
    "owner_id": "gungunn.near"
  },
  {
    "token_id": "43",
    "owner_id": "oceanli12.near"
  },
  {
    "token_id": "45",
    "owner_id": "ev3reth.near"
  },
  {
    "token_id": "48",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "51",
    "owner_id": "ilyadreamer.near"
  },
  {
    "token_id": "52",
    "owner_id": "f53a0bc5469cca22c28fec593c775dbc2ca7fa840ed8d13c9b45587a022bcf60"
  },
  {
    "token_id": "56",
    "owner_id": "1334c24fe59b5b83bfa048f5d515c18934143c9bac5198d47a0e68b834ea83d7"
  },
  {
    "token_id": "60",
    "owner_id": "itax.near"
  },
  {
    "token_id": "64",
    "owner_id": "oceanli12.near"
  },
  {
    "token_id": "71",
    "owner_id": "i18.near"
  },
  {
    "token_id": "76",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "80",
    "owner_id": "21187310a48ea2e5d8eb1c9027da823d96b056bcbd98441abcbbb629ad643535"
  },
  {
    "token_id": "81",
    "owner_id": "b079f19414c136309da82b9dc29a7d292c2ed727b785a75e7a4ba8d39605974b"
  },
  {
    "token_id": "83",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "84",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "85",
    "owner_id": "alpharebel.near"
  },
  {
    "token_id": "88",
    "owner_id": "1334c24fe59b5b83bfa048f5d515c18934143c9bac5198d47a0e68b834ea83d7"
  },
  {
    "token_id": "90",
    "owner_id": "buntt.near"
  },
  {
    "token_id": "91",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "101",
    "owner_id": "gigarekt.near"
  },
  {
    "token_id": "103",
    "owner_id": "guytrader.near"
  },
  {
    "token_id": "106",
    "owner_id": "jaywalker.near"
  },
  {
    "token_id": "107",
    "owner_id": "fangshi.near"
  },
  {
    "token_id": "110",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "112",
    "owner_id": "donlucas.near"
  },
  {
    "token_id": "113",
    "owner_id": "hasungis.near"
  },
  {
    "token_id": "121",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "123",
    "owner_id": "erbazz.near"
  },
  {
    "token_id": "124",
    "owner_id": "f53a0bc5469cca22c28fec593c775dbc2ca7fa840ed8d13c9b45587a022bcf60"
  },
  {
    "token_id": "126",
    "owner_id": "orangejoe.near"
  },
  {
    "token_id": "128",
    "owner_id": "gigarekt.near"
  },
  {
    "token_id": "129",
    "owner_id": "0hmyxiaoryls.near"
  },
  {
    "token_id": "130",
    "owner_id": "1d961fa297ac26b064bb344cddbc079989608eb1faed1186b7dce4c82f3ca15f"
  },
  {
    "token_id": "131",
    "owner_id": "0a62e9c69b344ab413f5867de6e853464d21ba4b9a75c6fd3597d7fcefc26dd2"
  },
  {
    "token_id": "132",
    "owner_id": "whereisasimov.near"
  },
  {
    "token_id": "134",
    "owner_id": "jabberbkk.near"
  },
  {
    "token_id": "135",
    "owner_id": "formlessdude.near"
  },
  {
    "token_id": "137",
    "owner_id": "offseason.near"
  },
  {
    "token_id": "138",
    "owner_id": "mear.near"
  },
  {
    "token_id": "139",
    "owner_id": "vixens.near"
  },
  {
    "token_id": "143",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "147",
    "owner_id": "thecartoonistme.near"
  },
  {
    "token_id": "149",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "150",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "153",
    "owner_id": "itax.near"
  },
  {
    "token_id": "156",
    "owner_id": "unknown_nft.near"
  },
  {
    "token_id": "157",
    "owner_id": "dezznate.near"
  },
  {
    "token_id": "158",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "160",
    "owner_id": "07bc52a40f98bb2e0d2fe46b3ab5402016b669002ad8f7a49420935d8dcacd9a"
  },
  {
    "token_id": "163",
    "owner_id": "4bd489641cb78576860cd341d5b9b4e1b36a0ccabcc5c8b643d6f864068dfe77"
  },
  {
    "token_id": "164",
    "owner_id": "billybones.near"
  },
  {
    "token_id": "166",
    "owner_id": "040c55d2e6fb98c0993ad81dc0c95ae771d1641011e6ab8272496feace29dd93"
  },
  {
    "token_id": "170",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "172",
    "owner_id": "kevinyao0214.near"
  },
  {
    "token_id": "174",
    "owner_id": "aadilk4.near"
  },
  {
    "token_id": "176",
    "owner_id": "ballsballs.near"
  },
  {
    "token_id": "178",
    "owner_id": "cryptobisness.near"
  },
  {
    "token_id": "179",
    "owner_id": "donny.near"
  },
  {
    "token_id": "182",
    "owner_id": "n3dc.near"
  },
  {
    "token_id": "185",
    "owner_id": "domsnft.near"
  },
  {
    "token_id": "186",
    "owner_id": "4822baa420599ae57a791821d47e3dc89026fa836664b75f9b02d09c6807b4c2"
  },
  {
    "token_id": "187",
    "owner_id": "2bdc6e44718c421cce46397519f5ca6d5e2175526ef6a3e2632fe691b45646b9"
  },
  {
    "token_id": "191",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "193",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "197",
    "owner_id": "nearghosty.near"
  },
  {
    "token_id": "198",
    "owner_id": "i18.near"
  },
  {
    "token_id": "202",
    "owner_id": "d7ac7b237fed90e2ac86affdf4293cbf98ab4d92f21d5090c845500531d6ff07"
  },
  {
    "token_id": "204",
    "owner_id": "markeymark.near"
  },
  {
    "token_id": "206",
    "owner_id": "jporta.near"
  },
  {
    "token_id": "207",
    "owner_id": "kentvl.near"
  },
  {
    "token_id": "212",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "213",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "214",
    "owner_id": "fabs10.near"
  },
  {
    "token_id": "215",
    "owner_id": "malamaya.near"
  },
  {
    "token_id": "216",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "217",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "220",
    "owner_id": "nobody83.near"
  },
  {
    "token_id": "222",
    "owner_id": "nagatoshi.near"
  },
  {
    "token_id": "225",
    "owner_id": "capybarath.near"
  },
  {
    "token_id": "226",
    "owner_id": "adzyboy.near"
  },
  {
    "token_id": "227",
    "owner_id": "aleph418.near"
  },
  {
    "token_id": "228",
    "owner_id": "alexkatz.near"
  },
  {
    "token_id": "229",
    "owner_id": "88a4b0b40c6229c95287f450c7818e0e6b39ad268a0cb1c2a7cede1f126528a7"
  },
  {
    "token_id": "231",
    "owner_id": "odins_eyehole.near"
  },
  {
    "token_id": "232",
    "owner_id": "nftdegen.near"
  },
  {
    "token_id": "233",
    "owner_id": "ppsk.near"
  },
  {
    "token_id": "237",
    "owner_id": "ariv.near"
  },
  {
    "token_id": "238",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "240",
    "owner_id": "herogranada.near"
  },
  {
    "token_id": "241",
    "owner_id": "aleph418.near"
  },
  {
    "token_id": "243",
    "owner_id": "yagagiveaway.near"
  },
  {
    "token_id": "254",
    "owner_id": "masterh.near"
  },
  {
    "token_id": "256",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "257",
    "owner_id": "f53a0bc5469cca22c28fec593c775dbc2ca7fa840ed8d13c9b45587a022bcf60"
  },
  {
    "token_id": "258",
    "owner_id": "gigarekt.near"
  },
  {
    "token_id": "259",
    "owner_id": "3790852c2eb2cc1315d4cb1c96ad3fd14a7752ba028292b125ecc5606ec11ada"
  },
  {
    "token_id": "261",
    "owner_id": "21187310a48ea2e5d8eb1c9027da823d96b056bcbd98441abcbbb629ad643535"
  },
  {
    "token_id": "263",
    "owner_id": "georgemck.near"
  },
  {
    "token_id": "264",
    "owner_id": "vaudoo.near"
  },
  {
    "token_id": "267",
    "owner_id": "andretti.near"
  },
  {
    "token_id": "269",
    "owner_id": "youngmoney19.near"
  },
  {
    "token_id": "270",
    "owner_id": "adzyboy.near"
  },
  {
    "token_id": "271",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "275",
    "owner_id": "flytosky7.near"
  },
  {
    "token_id": "277",
    "owner_id": "kevinyao0214.near"
  },
  {
    "token_id": "282",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "283",
    "owner_id": "i18.near"
  },
  {
    "token_id": "284",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "285",
    "owner_id": "nftdegen.near"
  },
  {
    "token_id": "286",
    "owner_id": "fangshi.near"
  },
  {
    "token_id": "287",
    "owner_id": "heycome.near"
  },
  {
    "token_id": "290",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "292",
    "owner_id": "icarusli.near"
  },
  {
    "token_id": "293",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "294",
    "owner_id": "billybones.near"
  },
  {
    "token_id": "298",
    "owner_id": "0xliquidity.near"
  },
  {
    "token_id": "303",
    "owner_id": "fb43e4ca5d1e7358e0517e13dbc9adbf756b10c8fe0c1babe180d836f5f8f3a2"
  },
  {
    "token_id": "306",
    "owner_id": "mear.near"
  },
  {
    "token_id": "308",
    "owner_id": "metazhou.near"
  },
  {
    "token_id": "309",
    "owner_id": "kurtruss.near"
  },
  {
    "token_id": "310",
    "owner_id": "itax.near"
  },
  {
    "token_id": "313",
    "owner_id": "prokayy.near"
  },
  {
    "token_id": "316",
    "owner_id": "nagatoshi.near"
  },
  {
    "token_id": "317",
    "owner_id": "unknown_nft.near"
  },
  {
    "token_id": "328",
    "owner_id": "lilvader.near"
  },
  {
    "token_id": "331",
    "owner_id": "formlessdude.near"
  },
  {
    "token_id": "332",
    "owner_id": "kenzeroart.near"
  },
  {
    "token_id": "334",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "335",
    "owner_id": "meatlocker.near"
  },
  {
    "token_id": "338",
    "owner_id": "icarusli.near"
  },
  {
    "token_id": "341",
    "owner_id": "kenzeroart.near"
  },
  {
    "token_id": "346",
    "owner_id": "hero199812.near"
  },
  {
    "token_id": "348",
    "owner_id": "saltak8.near"
  },
  {
    "token_id": "351",
    "owner_id": "tantophi3nd.near"
  },
  {
    "token_id": "354",
    "owner_id": "1d961fa297ac26b064bb344cddbc079989608eb1faed1186b7dce4c82f3ca15f"
  },
  {
    "token_id": "357",
    "owner_id": "oceanli12.near"
  },
  {
    "token_id": "359",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "362",
    "owner_id": "4822baa420599ae57a791821d47e3dc89026fa836664b75f9b02d09c6807b4c2"
  },
  {
    "token_id": "363",
    "owner_id": "aidarkun.near"
  },
  {
    "token_id": "365",
    "owner_id": "aidarkun.near"
  },
  {
    "token_id": "367",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "370",
    "owner_id": "mear.near"
  },
  {
    "token_id": "371",
    "owner_id": "heycome.near"
  },
  {
    "token_id": "372",
    "owner_id": "stainedglassnfts.near"
  },
  {
    "token_id": "378",
    "owner_id": "806b01c2ec6b9a4c7448777db488296aee599529157fc598d6da728aa39c0bd7"
  },
  {
    "token_id": "380",
    "owner_id": "burnerrr.near"
  },
  {
    "token_id": "385",
    "owner_id": "defbond.near"
  },
  {
    "token_id": "391",
    "owner_id": "nagatoshi.near"
  },
  {
    "token_id": "393",
    "owner_id": "kryptosuit.near"
  },
  {
    "token_id": "394",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "396",
    "owner_id": "i18.near"
  },
  {
    "token_id": "397",
    "owner_id": "i18.near"
  },
  {
    "token_id": "399",
    "owner_id": "0a73e81f3af438dc0113d84087f556b528e89ddd898cabc29eae09ccf5accd5c"
  },
  {
    "token_id": "400",
    "owner_id": "yournamefan.near"
  },
  {
    "token_id": "403",
    "owner_id": "jabberbkk.near"
  },
  {
    "token_id": "404",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "410",
    "owner_id": "jamjadam.near"
  },
  {
    "token_id": "411",
    "owner_id": "jsibsss.near"
  },
  {
    "token_id": "412",
    "owner_id": "4822baa420599ae57a791821d47e3dc89026fa836664b75f9b02d09c6807b4c2"
  },
  {
    "token_id": "414",
    "owner_id": "johnanthony.near"
  },
  {
    "token_id": "415",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "417",
    "owner_id": "prokayy.near"
  },
  {
    "token_id": "418",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "421",
    "owner_id": "youngmoney19.near"
  },
  {
    "token_id": "422",
    "owner_id": "markeymark.near"
  },
  {
    "token_id": "424",
    "owner_id": "durran.near"
  },
  {
    "token_id": "425",
    "owner_id": "oceanli12.near"
  },
  {
    "token_id": "426",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "427",
    "owner_id": "csaesta.near"
  },
  {
    "token_id": "430",
    "owner_id": "4822baa420599ae57a791821d47e3dc89026fa836664b75f9b02d09c6807b4c2"
  },
  {
    "token_id": "432",
    "owner_id": "806b01c2ec6b9a4c7448777db488296aee599529157fc598d6da728aa39c0bd7"
  },
  {
    "token_id": "433",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "434",
    "owner_id": "alexkatz.near"
  },
  {
    "token_id": "435",
    "owner_id": "nftlegend.near"
  },
  {
    "token_id": "438",
    "owner_id": "oceanli12.near"
  },
  {
    "token_id": "440",
    "owner_id": "prokayy.near"
  },
  {
    "token_id": "442",
    "owner_id": "burnhhc.near"
  },
  {
    "token_id": "444",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "445",
    "owner_id": "jollygreengiant.near"
  },
  {
    "token_id": "447",
    "owner_id": "oceanli12.near"
  },
  {
    "token_id": "448",
    "owner_id": "1334c24fe59b5b83bfa048f5d515c18934143c9bac5198d47a0e68b834ea83d7"
  },
  {
    "token_id": "449",
    "owner_id": "e157bfecfff11160f4cd8410a9fbbcd5f6aa2aa5bb9b0ca2b826779970dc8296"
  },
  {
    "token_id": "455",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "456",
    "owner_id": "itax.near"
  },
  {
    "token_id": "457",
    "owner_id": "nftlegend.near"
  },
  {
    "token_id": "458",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "459",
    "owner_id": "oneiro.near"
  },
  {
    "token_id": "463",
    "owner_id": "srms.near"
  },
  {
    "token_id": "466",
    "owner_id": "solunagg.near"
  },
  {
    "token_id": "467",
    "owner_id": "donny.near"
  },
  {
    "token_id": "468",
    "owner_id": "digitaljeesus.near"
  },
  {
    "token_id": "469",
    "owner_id": "datmap.near"
  },
  {
    "token_id": "470",
    "owner_id": "mohsen59.near"
  },
  {
    "token_id": "471",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "472",
    "owner_id": "nearbeef.near"
  },
  {
    "token_id": "475",
    "owner_id": "oceanli12.near"
  },
  {
    "token_id": "476",
    "owner_id": "vinkok.near"
  },
  {
    "token_id": "477",
    "owner_id": "806b01c2ec6b9a4c7448777db488296aee599529157fc598d6da728aa39c0bd7"
  },
  {
    "token_id": "479",
    "owner_id": "i18.near"
  },
  {
    "token_id": "480",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "483",
    "owner_id": "b079f19414c136309da82b9dc29a7d292c2ed727b785a75e7a4ba8d39605974b"
  },
  {
    "token_id": "484",
    "owner_id": "yumifurb.near"
  },
  {
    "token_id": "486",
    "owner_id": "mear.near"
  },
  {
    "token_id": "494",
    "owner_id": "billybones.near"
  },
  {
    "token_id": "495",
    "owner_id": "dezznate.near"
  },
  {
    "token_id": "497",
    "owner_id": "xyuu.near"
  },
  {
    "token_id": "498",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "502",
    "owner_id": "i18.near"
  },
  {
    "token_id": "503",
    "owner_id": "oceanli12.near"
  },
  {
    "token_id": "507",
    "owner_id": "diddly.near"
  },
  {
    "token_id": "509",
    "owner_id": "phxx.near"
  },
  {
    "token_id": "513",
    "owner_id": "johnanthony.near"
  },
  {
    "token_id": "514",
    "owner_id": "diddly.near"
  },
  {
    "token_id": "515",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "520",
    "owner_id": "ballsballs.near"
  },
  {
    "token_id": "525",
    "owner_id": "metazhou.near"
  },
  {
    "token_id": "527",
    "owner_id": "cerberus1.near"
  },
  {
    "token_id": "528",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "530",
    "owner_id": "tedmeo.near"
  },
  {
    "token_id": "532",
    "owner_id": "jabberbkk.near"
  },
  {
    "token_id": "533",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "536",
    "owner_id": "fabs10.near"
  },
  {
    "token_id": "538",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "540",
    "owner_id": "thecartoonistme.near"
  },
  {
    "token_id": "541",
    "owner_id": "insaneyinyang.near"
  },
  {
    "token_id": "542",
    "owner_id": "insaneyinyang.near"
  },
  {
    "token_id": "546",
    "owner_id": "ambushh.near"
  },
  {
    "token_id": "548",
    "owner_id": "xyuu.near"
  },
  {
    "token_id": "549",
    "owner_id": "itax.near"
  },
  {
    "token_id": "550",
    "owner_id": "ceaze.near"
  },
  {
    "token_id": "553",
    "owner_id": "gigarekt.near"
  },
  {
    "token_id": "556",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "558",
    "owner_id": "durran.near"
  },
  {
    "token_id": "561",
    "owner_id": "alexkatz.near"
  },
  {
    "token_id": "565",
    "owner_id": "jamjadam.near"
  },
  {
    "token_id": "567",
    "owner_id": "henryis.near"
  },
  {
    "token_id": "571",
    "owner_id": "sledge.near"
  },
  {
    "token_id": "572",
    "owner_id": "truegaloisfans.near"
  },
  {
    "token_id": "573",
    "owner_id": "i18.near"
  },
  {
    "token_id": "574",
    "owner_id": "2cb7bc8ca826d1ada9f725cf671ecda2fa7ecf92b753fc7b202fc97e5a0a8808"
  },
  {
    "token_id": "575",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "576",
    "owner_id": "defishaman.near"
  },
  {
    "token_id": "579",
    "owner_id": "charliedusk.near"
  },
  {
    "token_id": "580",
    "owner_id": "3790852c2eb2cc1315d4cb1c96ad3fd14a7752ba028292b125ecc5606ec11ada"
  },
  {
    "token_id": "583",
    "owner_id": "billybones.near"
  },
  {
    "token_id": "584",
    "owner_id": "diddly.near"
  },
  {
    "token_id": "589",
    "owner_id": "dolpinhooo.near"
  },
  {
    "token_id": "590",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "598",
    "owner_id": "frodooo17.near"
  },
  {
    "token_id": "602",
    "owner_id": "i18.near"
  },
  {
    "token_id": "603",
    "owner_id": "1kendell12.near"
  },
  {
    "token_id": "606",
    "owner_id": "nagatoshi.near"
  },
  {
    "token_id": "608",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "609",
    "owner_id": "oneiro.near"
  },
  {
    "token_id": "610",
    "owner_id": "domsnft.near"
  },
  {
    "token_id": "611",
    "owner_id": "alexkatz.near"
  },
  {
    "token_id": "612",
    "owner_id": "burnerrr.near"
  },
  {
    "token_id": "618",
    "owner_id": "nearbeef.near"
  },
  {
    "token_id": "619",
    "owner_id": "interlop3r.near"
  },
  {
    "token_id": "622",
    "owner_id": "burnerwallets.near"
  },
  {
    "token_id": "625",
    "owner_id": "prokayy.near"
  },
  {
    "token_id": "629",
    "owner_id": "gigarekt.near"
  },
  {
    "token_id": "637",
    "owner_id": "bearier.near"
  },
  {
    "token_id": "639",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "640",
    "owner_id": "slavadinh.near"
  },
  {
    "token_id": "641",
    "owner_id": "tipjargon.near"
  },
  {
    "token_id": "643",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "645",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "646",
    "owner_id": "truegaloisfans.near"
  },
  {
    "token_id": "647",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "650",
    "owner_id": "adzyboy.near"
  },
  {
    "token_id": "653",
    "owner_id": "madruguinha.near"
  },
  {
    "token_id": "656",
    "owner_id": "i18.near"
  },
  {
    "token_id": "658",
    "owner_id": "cerberus1.near"
  },
  {
    "token_id": "661",
    "owner_id": "phxx.near"
  },
  {
    "token_id": "664",
    "owner_id": "crystalpay.near"
  },
  {
    "token_id": "666",
    "owner_id": "cryptobisness.near"
  },
  {
    "token_id": "667",
    "owner_id": "bullishbear.near"
  },
  {
    "token_id": "669",
    "owner_id": "4daabc041f4bd1104f1c1386112bd0c61769f42dc19c3a9ff27e37471a5b32b5"
  },
  {
    "token_id": "673",
    "owner_id": "1d961fa297ac26b064bb344cddbc079989608eb1faed1186b7dce4c82f3ca15f"
  },
  {
    "token_id": "674",
    "owner_id": "joluwe.near"
  },
  {
    "token_id": "675",
    "owner_id": "sledge.near"
  },
  {
    "token_id": "677",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "679",
    "owner_id": "deeddy.near"
  },
  {
    "token_id": "681",
    "owner_id": "ambushh.near"
  },
  {
    "token_id": "682",
    "owner_id": "806b01c2ec6b9a4c7448777db488296aee599529157fc598d6da728aa39c0bd7"
  },
  {
    "token_id": "684",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "690",
    "owner_id": "ae26d2a17dfd479af47c170b9139ed1a1ffda2ebe5cddf493f14639e3b135777"
  },
  {
    "token_id": "691",
    "owner_id": "icarusli.near"
  },
  {
    "token_id": "693",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "695",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "696",
    "owner_id": "07bc52a40f98bb2e0d2fe46b3ab5402016b669002ad8f7a49420935d8dcacd9a"
  },
  {
    "token_id": "697",
    "owner_id": "alpharebel.near"
  },
  {
    "token_id": "704",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "705",
    "owner_id": "whereisasimov.near"
  },
  {
    "token_id": "706",
    "owner_id": "whereisasimov.near"
  },
  {
    "token_id": "708",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "712",
    "owner_id": "p0k.near"
  },
  {
    "token_id": "713",
    "owner_id": "itax.near"
  },
  {
    "token_id": "715",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "716",
    "owner_id": "gungunn.near"
  },
  {
    "token_id": "722",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "723",
    "owner_id": "interlop3r.near"
  },
  {
    "token_id": "727",
    "owner_id": "humblehoodcrew.near"
  },
  {
    "token_id": "729",
    "owner_id": "a741e845cb08d80e468c1dca3a8810a208ef85ffb604469511799a83db16507a"
  },
  {
    "token_id": "731",
    "owner_id": "domsnft.near"
  },
  {
    "token_id": "733",
    "owner_id": "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57"
  },
  {
    "token_id": "735",
    "owner_id": "burnerwallets.near"
  },
  {
    "token_id": "743",
    "owner_id": "eeyoreinthebag.near"
  },
  {
    "token_id": "744",
    "owner_id": "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01"
  },
  {
    "token_id": "745",
    "owner_id": "1334c24fe59b5b83bfa048f5d515c18934143c9bac5198d47a0e68b834ea83d7"
  },
  {
    "token_id": "748",
    "owner_id": "cerberus1.near"
  }
]

let rest = [
  "5chan.near",
  "6529d357cdcf1ee7c4449ec92c6b18cbbf8e8d3722b728e0e0ae04ecd40b57ed",
  "adzyboy.near",
  "andreapn.near",
  "aqzu.near",
  "b079f19414c136309da82b9dc29a7d292c2ed727b785a75e7a4ba8d39605974b",
  "baby_lilith.near",
  "bawz.near",
  "ceaze.near",
  "chadoh.near",
  "chalok.near",
  "christiannn.near",
  "codame.near",
  "curators.sputnik-dao.near",
  "doodledyep.near",
  "dragov.near",
  "earthshine.near",
  "faol.near",
  "goudvis.near",
  "graf.near",
  "hansson.near",
  "iotha.near",
  "itax.near",
  "jhezer.near",
  "jiljungjuk.near",
  "jotei.near",
  "kangarooz.near",
  "kapik.near",
  "kbneo.near",
  "kbneoburner3.near",
  "kenny0001.near",
  "kimchiman.near",
  "lilcrow.near",
  "malamaya.near",
  "maryrazel.near",
  "ms_hyunmi.near",
  "mumnag.near",
  "naut.near",
  "nearxstarfleet.near",
  "nftbuzz.near",
  "nick.near",
  "nymphs.near",
  "nypburn.near",
  "oji-sama.near",
  "onederfull.near",
  "oprah.near",
  "oublas.near",
  "paus.near",
  "pemmiee.near",
  "person_kinds.near",
  "pwwwwm.near",
  "rafuru.near",
  "reymono2.near",
  "rimberjack.near",
  "royo.near",
  "rylia.near",
  "shyskullbros.near",
  "starpause.near",
  "sue.near",
  "sunrise22.near",
  "tan.sputnik-dao.near",
  "tan69dao.near",
  "taoist.near",
  "velz.near",
  "whatshertoes.near",
  "within4d45.near",
  "xkcdfan.near",
  "yagagiveaway.near",
  "yellowbear.near",
  "vaudoo.near",
  "jsibsss.near",
  "i18.near",
  "gigarekt.near",
  "guytrader.near",
  "jaywalker.near",
  "fangshi.near",
  "0a62e9c69b344ab413f5867de6e853464d21ba4b9a75c6fd3597d7fcefc26dd2",
  "humblehoodcrew.near",
  "donlucas.near",
  "hasungis.near",
  "sledge.near",
  "erbazz.near",
  "f53a0bc5469cca22c28fec593c775dbc2ca7fa840ed8d13c9b45587a022bcf60",
  "orangejoe.near",
  "0hmyxiaoryls.near",
  "1d961fa297ac26b064bb344cddbc079989608eb1faed1186b7dce4c82f3ca15f",
  "whereisasimov.near",
  "jabberbkk.near",
  "formlessdude.near",
  "offseason.near",
  "mear.near",
  "vixens.near",
  "3e331a8b2a3d1bc732a66bc7036793195c75f801ba0252c55c0195ea19411f57",
  "thecartoonistme.near",
  "unknown_nft.near",
  "dezznate.near",
  "e0fcf73c0446479068a00d75463a045679a7b8ccdf7baf2a726f7f5d4f68af01",
  "fb43e4ca5d1e7358e0517e13dbc9adbf756b10c8fe0c1babe180d836f5f8f3a2",
  "07bc52a40f98bb2e0d2fe46b3ab5402016b669002ad8f7a49420935d8dcacd9a",
  "4bd489641cb78576860cd341d5b9b4e1b36a0ccabcc5c8b643d6f864068dfe77",
  "9isup.near",
  "040c55d2e6fb98c0993ad81dc0c95ae771d1641011e6ab8272496feace29dd93",
  "kevinyao0214.near",
  "aadilk4.near",
  "ballsballs.near",
  "cryptobisness.near",
  "donny.near",
  "n3dc.near",
  "domsnft.near",
  "4822baa420599ae57a791821d47e3dc89026fa836664b75f9b02d09c6807b4c2",
  "2bdc6e44718c421cce46397519f5ca6d5e2175526ef6a3e2632fe691b45646b9",
  "nearghosty.near",
  "d7ac7b237fed90e2ac86affdf4293cbf98ab4d92f21d5090c845500531d6ff07",
  "markeymark.near",
  "jporta.near",
  "kentvl.near",
  "train_29dayguild.near",
  "fabs10.near",
  "stainedglassnfts.near",
  "nobody83.near",
  "nagatoshi.near",
  "capybarath.near",
  "aleph418.near",
  "alexkatz.near",
  "88a4b0b40c6229c95287f450c7818e0e6b39ad268a0cb1c2a7cede1f126528a7",
  "odins_eyehole.near",
  "nftdegen.near",
  "ppsk.near",
  "ariv.near",
  "herogranada.near",
  "masterh.near",
  "3790852c2eb2cc1315d4cb1c96ad3fd14a7752ba028292b125ecc5606ec11ada",
  "21187310a48ea2e5d8eb1c9027da823d96b056bcbd98441abcbbb629ad643535",
  "georgemck.near",
  "andretti.near",
  "youngmoney19.near",
  "flytosky7.near",
  "ae26d2a17dfd479af47c170b9139ed1a1ffda2ebe5cddf493f14639e3b135777",
  "charliedusk.near",
  "heycome.near",
  "icarusli.near",
  "billybones.near",
  "0xliquidity.near",
  "metazhou.near",
  "kurtruss.near",
  "defbond.near",
  "prokayy.near",
  "lilvader.near",
  "kuroyami.near",
  "kenzeroart.near",
  "meatlocker.near",
  "hero199812.near",
  "saltak8.near",
  "tantophi3nd.near",
  "oceanli12.near",
  "aidarkun.near",
  "806b01c2ec6b9a4c7448777db488296aee599529157fc598d6da728aa39c0bd7",
  "burnerrr.near",
  "kryptosuit.near",
  "0a73e81f3af438dc0113d84087f556b528e89ddd898cabc29eae09ccf5accd5c",
  "yournamefan.near",
  "jamjadam.near",
  "johnanthony.near",
  "gungunn.near",
  "durran.near",
  "csaesta.near",
  "nftlegend.near",
  "burnhhc.near",
  "jollygreengiant.near",
  "1334c24fe59b5b83bfa048f5d515c18934143c9bac5198d47a0e68b834ea83d7",
  "e157bfecfff11160f4cd8410a9fbbcd5f6aa2aa5bb9b0ca2b826779970dc8296",
  "ev3reth.near",
  "oneiro.near",
  "srms.near",
  "solunagg.near",
  "digitaljeesus.near",
  "datmap.near",
  "callmej2407.near",
  "nearbeef.near",
  "vinkok.near",
  "yumifurb.near",
  "xyuu.near",
  "diddly.near",
  "phxx.near",
  "ilyadreamer.near",
  "cerberus1.near",
  "tedmeo.near",
  "insaneyinyang.near",
  "ambushh.near",
  "henryis.near",
  "truegaloisfans.near",
  "2cb7bc8ca826d1ada9f725cf671ecda2fa7ecf92b753fc7b202fc97e5a0a8808",
  "defishaman.near",
  "dolpinhooo.near",
  "frodooo17.near",
  "1kendell12.near",
  "interlop3r.near",
  "burnerwallets.near",
  "bearier.near",
  "slavadinh.near",
  "tipjargon.near",
  "madruguinha.near",
  "crystalpay.near",
  "bullishbear.near",
  "4daabc041f4bd1104f1c1386112bd0c61769f42dc19c3a9ff27e37471a5b32b5",
  "joluwe.near",
  "deeddy.near",
  "alpharebel.near",
  "p0k.near",
  "eeyoreinthebag.near",
  "buntt.near",
  ]