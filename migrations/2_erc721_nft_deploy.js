const { deployProxy } = require("@openzeppelin/truffle-upgrades");
const ERC721Custom = artifacts.require("ERC721Custom");

module.exports = async function (deployer) {
  deployProxy(ERC721Custom, ["Example NFT", "EXMP"], {
    deployer,
  });
};
