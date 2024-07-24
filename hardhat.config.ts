import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";

require('dotenv').config();

module.exports = {
  solidity: "0.8.20",

  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [process.env.PRIVATE_KEY_88888 || ""]
    },
  },

  etherscan: {
    apiKey: `ANY_STRING_WILL_DO`,
    customChains: [
      {
        network: "swisstronik",
        chainId: 1291,
        urls: {
          apiURL: "https://explorer-evm.testnet.swisstronik.com/api",
          browserURL: "https://explorer-evm.testnet.swisstronik.com",
        },
      },
    ],
  },

  sourcify: {
    enabled: false,
  }

};

