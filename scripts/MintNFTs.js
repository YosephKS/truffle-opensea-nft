const ERC721Custom = artifacts.require('ERC721Custom');

module.exports = function(callback) {
   try {
      const accounts = await web3.eth.getAccounts()
      const erc721Custom = await ERC721Custom.deployed()
      const user = accounts[0]
   } catch(error) {
      console.log(error)
   }
  
   callback()
};