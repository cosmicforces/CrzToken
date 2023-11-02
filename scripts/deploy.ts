import { ethers } from "hardhat";

async function main() {
  const totalSupply = 420_000_000_000_000_000_000_000_000_000n;

  const crz = await ethers.deployContract("CrzToken", [totalSupply]);

  await crz.waitForDeployment();

  console.log(`CRZ deployed to ${crz.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
