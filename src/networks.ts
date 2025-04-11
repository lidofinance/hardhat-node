import env from "./env";

export type ChainName = "eth" | "arb" | "opt";
export type NetworkName = "mainnet" | "hoodi";

function getChainRpcUrl(chainName: ChainName) {
  if (chainName === "eth") return env.ETH_RPC_URL();
  if (chainName === "arb") return env.ARB_RPC_URL();
  if (chainName === "opt") return env.OPT_RPC_URL();
}

function getInfuraUrl(chainName: ChainName, networkName: NetworkName) {
  const infuraToken = env.INFURA_TOKEN();
  const infuraNetworkDomain =
    chainName === "eth" && networkName === "mainnet"
      ? "mainnet"
      : `${chainName}-${networkName}`;
  return infuraToken
    ? `https://${infuraNetworkDomain}.infura.io/v3/${infuraToken}`
    : undefined;
}

function getAlchemyUrl(chainName: ChainName, networkName: NetworkName) {
  const alchemyToken = env.ALCHEMY_TOKEN();
  return alchemyToken
    ? `https://${chainName}-${networkName}.g.alchemy.com/v2/${alchemyToken}`
    : undefined;
}

/**
 * Returns the RPC url for the given network name
 */
function rpcUrl(chainName: ChainName, networkName: NetworkName): string {
  const url =
    getChainRpcUrl(chainName) ||
    getInfuraUrl(chainName, networkName) ||
    getAlchemyUrl(chainName, networkName);
  if (!url) {
    throw new Error(
      "RPC node credential was not provided. Please, set one of RPC_URL, INFURA_TOKEN or ALCHEMY_TOKEN env variables"
    );
  }
  return url;
}

function maybeChainIdConfig(chainId: number) {
  if (env.DONT_SET_CHAIN_ID()) {
    return {};
  }
  return { chainId };
}

function hardforkConfig() {
  return { hardfork: env.HARDFORK() };
}

export default {
  rpcUrl,
  hardforkConfig,
  maybeChainIdConfig,
};
