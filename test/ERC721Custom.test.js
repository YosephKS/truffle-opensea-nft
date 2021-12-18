const { expect } = require("chai");
const ERC721Custom = artifacts.require("ERC721Custom");

contract("ERC721Custom", (accounts) => {
  const name = "Example NFT";
  const symbol = "EXMP";
  const contractOwner = accounts[0];
  const tokenReceiver = accounts[1];
  const baseURI = "https://example-nft-metadata.com";

  beforeEach(async () => {
    this.erc721Custom = await ERC721Custom.new();
    await this.erc721Custom.initialize(name, symbol, { from: contractOwner });
  });

  it("Store the right name and symbol to the NFT", async () => {
    expect(await this.erc721Custom.name()).to.equal(name);
    expect(await this.erc721Custom.symbol()).to.equal(symbol);
  });

  it("Has the right contract owner address", async () => {
    expect(await this.erc721Custom.owner()).to.equal(contractOwner);
  });

  it("Mints new Token Ids and set new Token URIs only by owner", async () => {
    // Iterate 10 times to mint 10 tokens
    for (let i = 0; i < 10; i++) {
      const tokenURI = `${baseURI}/${i}`;
      await this.erc721Custom.safeMint(tokenReceiver, tokenURI, {
        from: contractOwner,
      });

      // Check whether the tokenId and tokenURI is right
      expect(await this.erc721Custom.ownerOf(i)).to.equal(tokenReceiver);
      expect(await this.erc721Custom.tokenURI(i)).to.equal(tokenURI);
    }
  });

  it("Burn minted tokens", async () => {
    await this.erc721Custom.safeMint(tokenReceiver, baseURI, {
      from: contractOwner,
    });

    const tokenReceiverBalance = parseInt(
      (await this.erc721Custom.balanceOf(tokenReceiver)).toString(),
      10
    );

    // Expecting 1 minted NFT with tokenId 0 (after minted)
    expect(tokenReceiverBalance).to.equal(1);

    if (tokenReceiverBalance > 0) {
      await this.erc721Custom.burn(0, { from: tokenReceiver });
      const newTokenReceiverBalance = parseInt(
        (await this.erc721Custom.balanceOf(tokenReceiver)).toString(),
        10
      );

      // Expecting 0 tokenId 0 after burnt
      expect(newTokenReceiverBalance).to.equal(0);
    }
  });

  it("Pausing and unpausing the NFT token", async () => {
    expect(await this.erc721Custom.paused()).to.equal(false);

    await this.erc721Custom.pause();

    expect(await this.erc721Custom.paused()).to.equal(true);

    await this.erc721Custom.unpause();

    expect(await this.erc721Custom.paused()).to.equal(false);
  });
});
