# Docker image to run local hardhat node

### Run

To run the mainnet fork you have to set one of the following environment variables:
- `INFURA_TOKEN` to use Infura as provider
- `ALCHEMY_TOKEN` to use Alchemy as provider
- `ETH_RPC_URL` to use a custom provider

### Examples
```bash
docker run -e INFURA_TOKEN=your_token -p 8545:8545 -it --rm lidofinance/hardhat-node:latest
```
    
```bash
docker  run -e ALCHEMY_TOKEN=your_token -p 8545:8545 -it --rm lidofinance/hardhat-node:latest
```
    
```bash 
docker run -e ETH_RPC_URL=your_url -p 8545:8545 -it --rm lidofinance/hardhat-node:latest
```
