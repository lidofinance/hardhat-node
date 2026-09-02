import type {
  EdrNetworkConfigOverride,
  HardhatUserConfig,
} from "hardhat/types/config";

const baseConfig = {
  solidity: "0.8.25",
  networks: {
    node: {
      type: "edr-simulated",
      chainType: "l1",
      initialBaseFeePerGas: 0,
      accounts: {
        count: 30,
        accountsBalance: "100000000000000000000000",
      },
    },
  },
} satisfies HardhatUserConfig;

type ConfigOverrides = Omit<Partial<HardhatUserConfig>, "networks"> & {
  networks?: { node?: EdrNetworkConfigOverride };
};

export const createConfig = (
  overrides: ConfigOverrides = {},
): HardhatUserConfig => ({
  ...baseConfig,
  ...overrides,
  networks: {
    ...baseConfig.networks,
    ...overrides.networks,
    node: {
      ...baseConfig.networks.node,
      ...overrides.networks?.node,
    },
  },
});
