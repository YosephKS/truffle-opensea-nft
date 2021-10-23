const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const RPCNodeProvider = require("./list/RPCNodeProvider");
const mnemonic = fs.readFileSync(".secret").toString().trim();
require("dotenv").config();

const nodeProvider = process.env.NODE_PROVIDER;

module.exports = {
	plugins: ["truffle-plugin-verify"],
	api_keys: {
		etherscan: process.env.ETHERSCAN_API_KEY,
	},
	contracts_directory: "./contracts/",
	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*",
		},
		ropsten: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					RPCNodeProvider.ropsten[nodeProvider ?? "default"],
				),
			network_id: 3,
			gas: 5500000,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true,
		},
		kovan: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					RPCNodeProvider.kovan[nodeProvider ?? "default"],
				),
			network_id: 42,
			gasPrice: 20000000000,
			gas: 3716887,
			skipDryRun: true,
			networkCheckTimeout: 100000,
		},
		rinkeby: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					RPCNodeProvider.rinkeby[nodeProvider ?? "default"],
				),
			network_id: 4,
			skipDryRun: true,
		},
		mainnet: {
			provider: function () {
				return new HDWalletProvider(
					mnemonic,
					RPCNodeProvider.mainnet[nodeProvider ?? "default"],
				);
			},
			gas: 5000000,
			gasPrice: 5e9,
			network_id: 1,
		},
		binance_testnet: {
			provider: () =>
				new HDWalletProvider(
					mnemonic,
					RPCNodeProvider.bsc_testnet[nodeProvider ?? "default"],
				),
			network_id: 97,
			confirmations: 10,
			timeoutBlocks: 200,
			skipDryRun: true,
		},
	},
	compilers: {
		solc: {
			version: "0.8.9",
			settings: {
				optimizer: {
					enabled: false,
					runs: 200,
				},
			},
		},
	},
};
