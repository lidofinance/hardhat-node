import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";

import networks from "./src/networks";


const config: HardhatUserConfig = {
  solidity: "0.8.23",
  networks: {
    hardhat: {
      ...networks.maybeChainIdConfig(1),
      hardfork: "shanghai",
      initialBaseFeePerGas: 0,
      accounts: {
        count: 10,
      },
      forking: {
        url: networks.rpcUrl("eth", "mainnet"),
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
