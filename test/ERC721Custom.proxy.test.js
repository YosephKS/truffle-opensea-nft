const { expect } = require('chai');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
const ERC721Custom = artifacts.require('ERC721Custom');
 
contract('ERC721Custom (Proxy)', function () {
  beforeEach(async function () {
    // Deploy a new Box contract for each test
    this.erc721Custom = await deployProxy(ERC721Custom, ["Moralis NFT", "MRLS"]);
  });
 
  it('Returns the values previously initialized', async function () {
    expect((await this.erc721Custom.name())).to.equal('Moralis NFT');
    expect((await this.erc721Custom.symbol())).to.equal('MRLS');
  });
});