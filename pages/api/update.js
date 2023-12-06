import { ComposeClient } from "@composedb/client";
import { RuntimeCompositeDefinition } from "@composedb/types";
import { NextApiRequest, NextApiResponse } from "next";
import { Orbis } from "@orbisclub/components";
import { env } from "../../env.mjs";
import { definition } from "../../src/__generated__/definition.js";
import { fromString } from "uint8arrays/from-string";
import { set } from "zod";

const CONTEXT = process.env.ORBCONTEXT;

export default async function updateContext(req, res) {
  let orbis = new Orbis({
    node: "https://node2.orbis.club",
    PINATA_GATEWAY: "https://orbis.mypinata.cloud/ipfs/",
    PINATA_API_KEY: process.env.NEXT_PUBLIC_PINATA_API_KEY,
    PINATA_SECRET_API_KEY: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
  });

  const key = fromString(
    "71fb1384bcf1d4990c11d08302dd3bfaca99820780098a14e24a14539a4e87a7",
    "base16"
  );

  const result = await orbis.connectWithSeed(key);
  const whiteList = req.body;

  try {
    // wait 2 seconds before continuing with the below
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(whiteList, "whiteList");
    console.log(CONTEXT, "context");
    const currContext = await orbis.getContext(CONTEXT);
    console.log(currContext, "currContext");
    console.log(currContext.data.content);
    const mapped = whiteList.map((item) => {
      return { did: item };
    });
    const update = await orbis.updateContext(CONTEXT, {
      ...currContext.data.content,
      accessRules: [
        {
          type: "did",
          authorizedUsers: mapped,
        },
      ],
    });
    console.log(update);
    return res.json(update);
    // return res.json(whiteList);
  } catch (err) {
    res.json({
      err,
    });
  }
}
