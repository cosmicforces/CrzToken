import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ethers } from "ethers";
import * as dotenv from "dotenv";

dotenv.config();
const { API_MAIN_URL, API_TEST_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } =
  process.env;
const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    hardhat: {},
    main: {
      url: API_MAIN_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: API_TEST_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      gasPrice: Number(ethers.parseUnits("30", "gwei")),
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};

export default config;
