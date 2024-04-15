import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import '@typechain/hardhat';
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";

require('dotenv').config();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
    },
    hackathon: {
      url: process.env.SHARDEUM_RPC,
      accounts: [process.env.DEV_TESTNET_PRIVATE_KEY ?? '']
    }
  },
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};

export default config;