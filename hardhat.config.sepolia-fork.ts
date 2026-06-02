import "dotenv/config";

import networks from "./src/networks";

import { createConfig } from "./base.config";

export default createConfig({
  networks: {
    hardhat: {
      ...networks.maybeChainIdConfig(11155111),
      ...networks.hardforkConfig(),
      forking: { url: networks.rpcUrl("eth", "sepolia") },
    },
  },
});
