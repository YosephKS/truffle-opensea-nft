const ERC1155Basic = artifacts.require('ERC1155Basic');

module.exports = async function (deployer) {
  deployer.deploy(ERC1155Basic);
};