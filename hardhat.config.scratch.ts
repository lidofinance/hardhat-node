import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.23",
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      accounts: {
        count: 10,
      },
      chainId: 1,
    },
  },
};
export default config;
