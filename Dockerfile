# syntax=docker/dockerfile:1
FROM ghcr.io/napi-rs/napi-rs/nodejs-rust:lts-debian-aarch64

WORKDIR /opt/build

RUN git clone --single-branch --branch fix-large-rpc-responses https://github.com/dputko/edr.git edr && \
    git clone --single-branch --branch fix-large-rpc-responses https://github.com/dputko/hardhat.git hardhat

 # libudev-dev is required by hardhat-ledger
RUN apt install -y libudev-dev

# Build patched EDR and link as a global package
WORKDIR /opt/build/edr/crates/edr_napi
RUN pnpm install && pnpm build && npm link

# Build patched Hardhat and link as a global package
WORKDIR /opt/build/hardhat
RUN <<EOT bash
    pnpm install
    pushd ./node_modules/.pnpm/@nomicfoundation+edr@0.4.1
    npm link @nomicfoundation/edr
    popd
    pnpm build
    cd ./packages/hardhat-core
    npm link
EOT

# Create a new project and link the patched Hardhat
WORKDIR /app

COPY . .

RUN npm link hardhat && pnpm install

EXPOSE 8545

ENTRYPOINT pnpm start
