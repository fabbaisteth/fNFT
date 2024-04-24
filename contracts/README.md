## Contracts

**ERC1155Token Pattern**

- It's a standard ERC1155 extended by Ownable, Pausable and Supply modifications
-

### Priviliges

- minting and batchMinting is restricted to the owner.
- a whitelist pattern can later be deployed to provide more flexibility around the minting process.

**ERC1155Factory**

- The factory deploys ERC1155Token.sol and takes in variables from the creator through the frontend to specify the ERC1155token properties.

**ERC1155Marketplace**

- Is a simple marketplace implementation with an auction pattern, this can be subbed with OpenSea or Blur contracts later on.

## Foundry

**Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.**

Foundry consists of:

- **Forge**: Ethereum testing framework (like Truffle, Hardhat and DappTools).
- **Cast**: Swiss army knife for interacting with EVM smart contracts, sending transactions and getting chain data.
- **Anvil**: Local Ethereum node, akin to Ganache, Hardhat Network.
- **Chisel**: Fast, utilitarian, and verbose solidity REPL.

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
$ forge build
```

### Test

```shell
$ forge test
```

### Format

```shell
$ forge fmt
```

### Gas Snapshots

```shell
$ forge snapshot
```

### Anvil

```shell
$ anvil
```

### Deploy

```shell
$ forge script script/Counter.s.sol:CounterScript --rpc-url <your_rpc_url> --private-key <your_private_key>
```

### Cast

```shell
$ cast <subcommand>
```

### Help

```shell
$ forge --help
$ anvil --help
$ cast --help
```
