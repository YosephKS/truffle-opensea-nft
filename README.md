# Truffle NFT Chainlink

Generate NFTs with Moralis, IPFS, and Chainlink to be listed in OpenSea

---

## Pre-requisites

### 1. Truffle

```bash
# Using NPM
npm i -g truffle@latest

# Using Yarn
yarn global add truffle@latest
```

### 2. NPM or Yarn

Go to [Node.js](https://nodejs.org/) website and download Node onto your system. If you would like to use **NPM** as your package manager, no more steps are required. If you would like to use Yarn, run the following command.

```
npm i -g yarn@latest
```

### 3. Moralis Free Account

Go to [Moralis Admin](https://admin.moralis.io/register) to sign up for its free account and get your REST API Key.

---

## Installation

### 1. Clone the Project

```bash
git clone https://github.com/YosephKS/truffle-nft-chainlink.git
```

### 2. Install dependencies

```bash
# Using NPM
npm i

# Using Yarn
yarn
```

---

## Getting Started

### 1. Run IPFS scripts

Truffle can't import `dotenv` into external scripts at the moment, so the environment variables have to be injected directly.

```bash
# Using NPM
MORALIS_REST_API_KEY=xxx npm run ipfs

# Using Yarn
MORALIS_REST_API_KEY=xxx yarn ipfs
```

### 2. Compile the project

```bash
# Using NPM
npm run compile

#Using Yarn
yarn compile
```

### 3. Migrate the project to your preferred network

```bash
yarn migrate --network rinkeby
```

---

## License
