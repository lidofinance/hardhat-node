import "dotenv/config";

import networks from "./src/networks.js";

import { createConfig } from "./base.config.js";

export default createConfig({
  networks: {
    node: {
      ...networks.maybeChainIdConfig(560048),
      ...networks.hardforkConfig(),
      forking: { url: networks.rpcUrl("eth", "hoodi") },
    },
  },
});
