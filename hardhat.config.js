require("@nomicfoundation/hardhat-toolbox");
require("hardhat-gas-reporter");
require("dotenv").config();
require("solidity-coverage");

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${SEPOLIA_RPC_URL}`,
      accounts: [PRIVATE_KEY], //0x67cd6b2db8BD991d1484432729174A1a1B577a67
      chainId: 11155111,
    }
  },
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_API_KEY,
    },
  },
  solidity: "0.8.27",
  gasReporter: {
    enabled: false,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    L1Etherscan: ETHERSCAN_API_KEY,
  },
};
