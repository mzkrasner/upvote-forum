import { CeramicClient } from "@ceramicnetwork/http-client";
import { Orbis } from "@orbisclub/components";
import { fromString } from "uint8arrays/from-string";

export const runSetup = async (input) => {
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

  const res = await orbis.connectWithSeed(key);
  console.log("orbis connected: ", res);

  const project = await orbis
    .createProject({
      name: input.name || "",
      description: input.description || "",
      image: input.image || "",
      website: input.website || "",
      socials: {
        twitter: input.twitter || "",
        discord: input.discord || "",
        telegram: input.telegram || "",
      },
    })
    .then(async (project) => {
      const context = await orbis.createContext({
        name: input.contextName || "",
        project_id: project.doc,
        accessRules: [
          // {
          //   type: "did",
          //   authorizedUsers: [],
          // },
        ],
        displayName: input.contextName || "",
        integrations: {},
      });
      console.log("project created: ", project);
      console.log("context created: ", context);
      return context;
    });
};
