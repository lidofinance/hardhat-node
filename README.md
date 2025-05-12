# Docker image to run local hardhat node

### Run

### Available Environment Variables

The following environment variables can be used to configure the hardhat node:

- `INFURA_TOKEN` - Token for Infura provider
- `ALCHEMY_TOKEN` - Token for Alchemy provider
- `ETH_RPC_URL` - Custom Ethereum RPC URL
- `DONT_SET_CHAIN_ID` - Set to any value to prevent setting chainId (useful when forking)
- `HARDFORK` - Specify the hardfork to use (defaults to "prague")

### Available Node Types

The following node types are available as different Docker image tags:

- `:latest` or `:<version>` - Mainnet fork node
- `:<version>-scratch` - Fresh node without forking
- `:<version>-hoodi` - Hoodi network fork node

### Node Configuration

The Hardhat node comes with the following default configuration:

- 30 test accounts
- Initial base fee per gas set to 0
- Mocha timeout set to 5 minutes
- Solidity version 0.8.25

### Examples

With Infura

```bash
docker run -e INFURA_TOKEN=your_token -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.24.0
```

With Alchemy:

```bash
docker  run -e ALCHEMY_TOKEN=your_token -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.24.0
```

With custom provider:

```bash
docker run -e ETH_RPC_URL=your_url -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.24.0
```

If you don't need to fork mainnet, and you only want to work with the `-scratch` node:

```bash
docker run -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.24.0-scratch
```

If you want to fork hoodi use `-hoodi` node, for example:

```bash
docker run -e ETH_RPC_URL=your_url -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.24.0-hoodi
```

### Forking fork chainId issue

There might an issue when forking hardhat node with a hardhat node which causes an error like:

```
The response reported error `-32000`: `header not found`. (optional data: None). Request: {"jsonrpc":"2.0","method":"eth_getBalance","params":["0x61097ba76cd906d2ba4fd106e757f7eb455fc295","0x15062e6"],"id":275}
```

To fix this `chainId` must not be set in the forked node. To do so set `DONT_SET_CHAIN_ID` env variable, e.g. `DONT_SET_CHAIN_ID=1`.

### Updating hardhat version

- set the new version in package.json
- run `pnpm install`
- create new branch `feat/hardhat-<version>`
- create a PR
- merge the PR
- create a new tag with the version `git tag -a <version> -m "Hardhat version <version>"`
- push the tag `git push --tags`
