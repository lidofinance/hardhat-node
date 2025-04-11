import "dotenv/config";

import networks from "./src/networks";

import { createConfig } from "./base.config";

export default createConfig({
  networks: {
    hardhat: {
      ...networks.maybeChainIdConfig(1),
      ...networks.hardforkConfig(),
    },
  },
});
