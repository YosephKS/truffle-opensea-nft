const { expect } = require('chai');
 const ERC721Custom = artifacts.require('ERC721Custom');
 
contract('ERC721Custom', function () {
  beforeEach(async function () {
      this.erc721Custom = await ERC721Custom.new();
  });
 
  it('Store the right name and symbol to the NFT', async function () {
      const name = "Moralis NFT";
      const symbol = "MRLS";
      await this.erc721Custom.initialize(name, symbol);
      expect((await this.erc721Custom.name())).to.equal(name);
      expect((await this.erc721Custom.symbol())).to.equal(symbol);
  });
});