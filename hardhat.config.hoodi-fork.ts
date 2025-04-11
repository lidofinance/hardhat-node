import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";

import networks from "./src/networks";

const config: HardhatUserConfig = {
  solidity: "0.8.25",
  networks: {
    hardhat: {
      ...networks.maybeChainIdConfig(560048),
      initialBaseFeePerGas: 0,
      accounts: {
        count: 30,
      },
      forking: {
        url: networks.rpcUrl("eth", "hoodi"),
      },
    },
  },
  mocha: {
    timeout: 5 * 60 * 1000,
  },
  keystores: {
    path: "keystores",
  },
};
export default config;
