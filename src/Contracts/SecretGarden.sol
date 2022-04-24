// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

struct User {
    address wallet_address;
}

contract SecretGarden {
    function walletHoldsToken(address memory_wallet, address memory_contract)
        public
        view
        returns (bool)
    {
        return IERC721(memory_contract).balanceOf(memory_wallet) > 0;
    }
}
