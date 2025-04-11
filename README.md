# Docker image to run local hardhat node

### Run

To run the mainnet fork you have to set one of the following environment variables:

- `INFURA_TOKEN` to use Infura as provider
- `ALCHEMY_TOKEN` to use Alchemy as provider
- `ETH_RPC_URL` to use a custom provider

### Examples

With Infura

```bash
docker run -e INFURA_TOKEN=your_token -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.23.0
```

With Alchemy:

```bash
docker  run -e ALCHEMY_TOKEN=your_token -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.23.0
```

With custom provider:

```bash
docker run -e ETH_RPC_URL=your_url -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.23.0
```

If you don't need to fork mainnet, and you only want to work with the `-scratch` node:

```bash
docker run -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.23.0
```

If you don't need testing ant hoodi use `-hoodi-fork` node, for example:

```bash
docker run -e ETH_RPC_URL=your_url -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.22.18.1-hoodi-fork
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
