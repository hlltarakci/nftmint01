const hre = require("hardhat");
const { abi } = require('../artifacts/contracts/CryptoWeather.sol/CryptoWeather.json');

async function main() {
  // https://docs.ethers.io/v5/api/providers/api-providers/#InfuraProvider
  const provider = new hre.ethers.providers.InfuraProvider('maticmum', process.env.INFURA_PROJECT_ID);
  const wallet = new hre.ethers.Wallet(process.env.POLYGON_MUMBAI_WALLET_PRIVATE_KEY, provider);
  const signer = wallet.connect(provider);

  const cryptoWeatherContract = new hre.ethers.Contract(process.env.CRYPTO_WEATHER_CONTRACT_ADDRESS, abi, signer);

  // const newItem = await cryptoWeatherContract.mint("https://ipfs.io/ipfs/QmfWmwUJdsVHy316K8L5vrZhEhetEtdeyLAaniUqkxDjW7");
  // console.log(`NFT minted successfully :: ${JSON.stringify(newItem, null, 2)}`);

  const newItem = await cryptoWeatherContract.mint("https://ipfs.io/ipfs/QmccGZjnL1Rd2NME2LxmoABi4PQDUCXeXdtKkBpLqYq8ta");
  console.log(`NFT minted successfully :: ${JSON.stringify(newItem, null, 2)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
