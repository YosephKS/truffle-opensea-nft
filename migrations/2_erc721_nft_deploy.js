const ERC721Basic = artifacts.require("ERC721Basic");

module.exports = async function (deployer) {
  deployer.deploy(ERC721Basic, "Example NFT", "EXMP");
};
