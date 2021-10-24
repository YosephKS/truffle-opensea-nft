// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract ERC1155Basic is ERC1155 {
    constructor()
        ERC1155(
            "https://ipfs.moralis.io:2053/ipfs/QmaLdGCzeFH6DGBiVVjeP865ToAhhjToEVEZtGohnzmoLk/metadata/{id}.json"
        )
    {
        _mint(msg.sender, 0, 10**18, "");
        _mint(msg.sender, 1, 10**27, "");
        _mint(msg.sender, 2, 1, "");
        _mint(msg.sender, 3, 10**9, "");
    }
}
