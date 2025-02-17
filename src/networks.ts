import env from "./env";

export type ChainName = "eth" | "arb" | "opt";
export type NetworkName = "mainnet" | "goerli" | "holesky";

/**
 * Returns the RPC url for the given network name
 */
function url(chainName: ChainName, networkName: NetworkName): string {
  const url =
    rpcUrl(chainName) ||
    infuraUrl(chainName, networkName) ||
    alchemyUrl(chainName, networkName);
  if (!url) {
    throw new Error(
      "RPC node credential was not provided. Please, set one of " +
        "RPC_URL, INFURA_TOKEN or ALCHEMY_TOKEN env variables",
    );
  }
  return url;
}

function rpcUrl(chainName: ChainName) {
  if (chainName === "eth") return env.ETH_RPC_URL();
  if (chainName === "arb") return env.ARB_RPC_URL();
  if (chainName === "opt") return env.OPT_RPC_URL();
}

function infuraUrl(chainName: ChainName, networkName: NetworkName) {
  const infuraToken = env.INFURA_TOKEN();
  const infuraNetworkDomain =
    chainName === "eth" && networkName === "mainnet"
      ? "mainnet"
      : `${chainName}-${networkName}`;
  return infuraToken
    ? `https://${infuraNetworkDomain}.infura.io/v3/${infuraToken}`
    : undefined;
}

function alchemyUrl(chainName: ChainName, networkName: NetworkName) {
  const alchemyToken = env.ALCHEMY_TOKEN();
  return alchemyToken
    ? `https://${chainName}-${networkName}.g.alchemy.com/v2/${alchemyToken}`
    : undefined;
}

export default {
  rpcUrl: url,
};
