import "dotenv/config";

import networks from "./src/networks.js";

import { createConfig } from "./base.config.js";

export default createConfig({
  networks: {
    node: {
      ...networks.maybeChainIdConfig(1),
      ...networks.hardforkConfig(),
    },
  },
});
