const ERC721Basic = artifacts.require("ERC721Basic");
const IPFSImages = require("../IPFS/ipfs.json");

module.exports = async (callback) => {
  try {
    const accounts = await web3.eth.getAccounts();
    const erc721Basic = await ERC721Basic.deployed();
    const user = accounts[0];
    IPFSImages.forEach(async (img) => {
      const { path } = img || {};
      await erc721Basic.safeMint(user, path, { from: user });
    });
  } catch (error) {
    console.error(error);
  }

  callback();
};
