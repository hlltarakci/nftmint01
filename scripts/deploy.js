// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const CryptoWeather = await hre.ethers.getContractFactory("CryptoWeather");
  const cryptoWeather = await CryptoWeather.deploy();

  await cryptoWeather.deployed();

  console.log("CryptoWeather deployed to:", cryptoWeather.address);

  // const newItemId = await cryptoWeather.mint("https://ipfs.io/ipfs/QmfWmwUJdsVHy316K8L5vrZhEhetEtdeyLAaniUqkxDjW7");
  // console.log(`NFT minted successfully :: ${JSON.stringify(newItemId, null, 2)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
