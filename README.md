# Project overview
This is a Udacity Blockchain Capsotne project to build a decentralized housing product. 
You will be minting your own tokens to represent your title to the real estate properties. 
Before you mint a token, you need to verify your own the property.
You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property.
Once the token has been verified you will place it on a blockchain market place (OpenSea) for others to purchase.

# Prerequisits
## npm install
 - `npm install`
 - `npm install --save truffle-hdwallet-provider`

## Implement Zokrates
| Contract Name | Contract Address |
| ------------- | ------------- |
| Step 1: Install Docker | You can find instructions for installing it [here](https://docs.docker.com/install/)|
| Step 2: Run ZoKrates | docker run -v <Your path to zokrates>:/home/zokrates/code -ti zokrates/zokrates /bin/bash| 
| Step 3: A Quick Overview of the ZoKrates Process | 1.Compile Program</br> 2.Trusted Setup</br>3.Compute-Witness</br>4.Generate-Proof</br>5.Export-Verifier |
| Step 4: Compile the program written in ZoKrates DSL | cd code/zokrates/code/square/ </br> ~/zokrates compile -i square.code |
| Step 5: Generate the Trusted Setup | ~/zokrates setup |
| Step 6: Compute Witness | ~/zokrates compute-witness -a 3 9 |
| Step 7: Generate Proof | ~/zokrates generate-proof |
| Step 8: Export Verifier | ~/zokrates export-verifier|

## Deploying
set metmask mnemonic `.secret` file and place it in `eth-contracts/`
`truffle migrate --network rinkeby --reset`

## Mint Tokens
Mint 10 tokens using `scripts/mint.js`

Fill out the mmemonic and infura key in the variables and run script.

# Deployed Contracts Info
- Contract Address on Rinkeby Network

| Contract Name | Contract Address |
| ------------- | ------------- |
| Verifier |0xc256Ef908bAA487Db41015AcaBB45d40ad8A65A1|
| SolnSquareVerifier | 0x7e1A742f37Ba64D237f0AD38490F2bd29263Eb32 |


- OpenSea links
 * Item 1: https://testnets.opensea.io/assets/0x7e1a742f37ba64d237f0ad38490f2bd29263eb32/0
 * Item 2: https://testnets.opensea.io/assets/0x7e1a742f37ba64d237f0ad38490f2bd29263eb32/1
 * Item 3: https://testnets.opensea.io/assets/0x7e1a742f37ba64d237f0ad38490f2bd29263eb32/2
 * Item 4: https://testnets.opensea.io/assets/0x7e1a742f37ba64d237f0ad38490f2bd29263eb32/3
 * Item 5: https://testnets.opensea.io/assets/0x7e1a742f37ba64d237f0ad38490f2bd29263eb32/4


 NOTE: Could not buy them with different account as each token is worth 1 ETH and I cannot seem to retrieve 5 ETH from a faucet anywhere.. they are up for sale though.

# Versions
*Truffle v5.0.2 (core: 5.0.2)
*Solidity v0.5.0 (solc-js)
*Node v10.7.0

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
