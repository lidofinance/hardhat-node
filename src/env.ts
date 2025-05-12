import "dotenv/config";

function LOCAL_ETH_RPC_URL() {
  return process.env["LOCAL_ETH_RPC_URL"];
}
function LOCAL_ARB_RPC_URL() {
  return process.env["LOCAL_ARB_RPC_URL"];
}
function LOCAL_OPT_RPC_URL() {
  return process.env["LOCAL_OPT_RPC_URL"];
}

function ETH_RPC_URL() {
  return process.env["ETH_RPC_URL"];
}

function ARB_RPC_URL() {
  return process.env["ARB_RPC_URL"];
}

function OPT_RPC_URL() {
  return process.env["OPT_RPC_URL"];
}

function INFURA_TOKEN() {
  return process.env["INFURA_TOKEN"];
}

function ALCHEMY_TOKEN() {
  return process.env["ALCHEMY_TOKEN"];
}

function DONT_SET_CHAIN_ID() {
  return Boolean(process.env["DONT_SET_CHAIN_ID"]);
}

function HARDFORK() {
  return process.env["HARDFORK"] || "prague";
}

export default {
  ETH_RPC_URL,
  ARB_RPC_URL,
  OPT_RPC_URL,
  INFURA_TOKEN,
  LOCAL_ETH_RPC_URL,
  LOCAL_ARB_RPC_URL,
  LOCAL_OPT_RPC_URL,
  ALCHEMY_TOKEN,
  DONT_SET_CHAIN_ID,
  HARDFORK,
};
