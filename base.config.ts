import { HardhatUserConfig } from "hardhat/config";

const baseConfig: HardhatUserConfig = {
  solidity: "0.8.25",
  mocha: { timeout: 5 * 60 * 1000 },
  keystores: { path: "keystores" },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      accounts: {
        count: 30,
        accountsBalance: "100000000000000000000000",
      },
    },
  },
};

export const createConfig = (
  overrides: Partial<HardhatUserConfig> = {}
): HardhatUserConfig => ({
  ...baseConfig,
  ...overrides,
  networks: {
    ...baseConfig.networks,
    ...overrides.networks,
    hardhat: {
      ...baseConfig.networks?.hardhat,
      ...overrides.networks?.hardhat,
    },
  },
});
