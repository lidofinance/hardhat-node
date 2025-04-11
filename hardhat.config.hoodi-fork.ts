import "dotenv/config";

import networks from "./src/networks";

import { createConfig } from "./base.config";

export default createConfig({
  networks: {
    hardhat: {
      ...networks.maybeChainIdConfig(560048),
      ...networks.hardforkConfig(),
      forking: { url: networks.rpcUrl("eth", "hoodi") },
    },
  },
});
