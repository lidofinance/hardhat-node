import "dotenv/config";

import networks from "./src/networks.js";

import { createConfig } from "./base.config.js";

export default createConfig({
  networks: {
    node: {
      ...networks.maybeChainIdConfig(11155111),
      ...networks.hardforkConfig(),
      forking: { url: networks.rpcUrl("eth", "sepolia") },
    },
  },
});
