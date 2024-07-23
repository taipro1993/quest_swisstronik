import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
import { network } from "hardhat";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",

  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0x" + process.env.PRIVATE_KEY_88888 || ""]
    },
  },

  sourcify: {
    enabled: false,
  }

};

export default config;

