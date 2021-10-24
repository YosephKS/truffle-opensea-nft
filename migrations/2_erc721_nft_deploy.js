const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const ERC721Custom = artifacts.require('ERC721Custom');

module.exports = async function (deployer, networks) {
  const instance = await deployProxy(ERC721Custom, ["MoralisNFT", "MRLS"], { deployer });
  console.log('Deployed Address: ', instance.address);
};