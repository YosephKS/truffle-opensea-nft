require("dotenv").config();

const infuraAPIKey = process.env.INFURA_API_KEY;
const moralisAPIKey = process.env.MORALIS_API_KEY;

module.exports = {
	kovan: {
		infura: `https://kovan.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/eth/kovan`,
		default: `https://kovan.infura.io/v3/${infuraAPIKey}`,
	},
	rinkeby: {
		infura: `https://rinkeby.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/eth/rinkeby`,
		default: `https://rinkeby.infura.io/v3/${infuraAPIKey}`,
	},
	ropsten: {
		infura: `https://ropsten.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/eth/ropsten`,
		default: `https://ropsten.infura.io/v3/${infuraAPIKey}`,
	},
	goerli: {
		infura: `https://goerli.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/eth/goerli`,
		default: `https://goerli.infura.io/v3/${infuraAPIKey}`,
	},
	mainnet: {
		infura: `https://mainnet.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/eth/mainnet`,
		default: `https://mainnet.infura.io/v3/${infuraAPIKey}`,
	},
	bsc_mainnet: {
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/bsc/mainnet`,
	},
	bsc_testnet: {
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/bsc/testnet`,
	},
	polygon_mainnet: {
		infura: `https://polygon-mainnet.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/polygon/mainnet`,
	},
	polygon_mumbai: {
		infura: `https://polygon-mumbai.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/polygon/mumbai`,
	},
	arbitrum_mainnet: {
		infura: `https://arbitrum-mainnet.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/arbitrum/mainnet`,
	},
	arbitrum_rinkeby: {
		infura: `https://arbitrum-rinkeby.infura.io/v3/${infuraAPIKey}`,
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/arbitrum/testnet`,
	},
	optimism_mainnet: {
		infura: `https://optimism-mainnet.infura.io/v3/${infuraAPIKey}`,
	},
	optimism_kovan: {
		infura: `https://optimism-kovan.infura.io/v3/${infuraAPIKey}`,
	},
	avalanche_mainnet: {
		moralis: `https://speedy-nodes-nyc.moralis.io/${moralisAPIKey}/avalanche/mainnet`,
	},
};
