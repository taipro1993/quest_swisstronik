import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

module.exports = {
  solidity: "0.8.20",

  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [process.env.PRIVATE_KEY_88888 || ""]
    },
  },

  sourcify: {
    enabled: false,
  }

};

