// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract ERC721Custom is Initializable, ERC721Upgradeable, OwnableUpgradeable {
    function initialize(string memory _name, string memory _symbol)
        public
        initializer
    {
        __ERC721_init(_name, _symbol);
        __Ownable_init();
    }

    function safeMint(
        address to,
        uint256 tokenId,
        string memory _tokenURI
    ) public onlyOwner {
        _safeMint(to, tokenId);
    }
}
