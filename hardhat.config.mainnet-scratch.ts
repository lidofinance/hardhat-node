import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import networks from "./src/networks";

const config: HardhatUserConfig = {
  solidity: "0.8.25",
  networks: {
    hardhat: {
      ...networks.maybeChainIdConfig(1),
      initialBaseFeePerGas: 0,
      accounts: {
        count: 30,
      },
    },
  },
};
export default config;
