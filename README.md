# Docker image to run local hardhat node

### Run

To run the mainnet fork you have to set one of the following environment variables:
- `INFURA_TOKEN` to use Infura as provider
- `ALCHEMY_TOKEN` to use Alchemy as provider
- `ETH_RPC_URL` to use a custom provider

### Examples
With Infura
```bash
docker run -e INFURA_TOKEN=your_token -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.22.11
```
With Alchemy:
```bash
docker  run -e ALCHEMY_TOKEN=your_token -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.22.11
```
With custom provider:
```bash 
docker run -e ETH_RPC_URL=your_url -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.22.11
```
If you don't need to fork mainnet, and you only want to work with the scratch node:
```bash
docker run -p 8545:8545 -it --rm ghcr.io/lidofinance/hardhat-node:2.22.11-scratch
```

### Updating hardhat version

- set the new version in package.json
- run `pnpm install`
- create new branch `feat/hardhat-<version>`
- create a PR
- merge the PR
- create a new tag with the version `git tag -a <version> -m "Hardhat version <version>"`
- push the tag `git push --tags`
