import "hardhat/types/config";

interface KeystoresConfig {
  path?: string;
}

declare module "hardhat/types/config" {
  export interface HardhatUserConfig {
    keystores?: KeystoresConfig;
  }

  export interface HardhatConfig {
    keystores: Required<KeystoresConfig>;
  }
}
