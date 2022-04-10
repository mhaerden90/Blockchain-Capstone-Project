const HDWalletProvider = require("truffle-hdwallet-provider")
const zokratesProof = [
    require("./proof_0.json"),
    require("./proof_1.json"),
    require("./proof_2.json"),
    require("./proof_3.json"),
    require("./proof_4.json"),
    require("./proof_5.json"),
    require("./proof_6.json"),
    require("./proof_7.json"),
    require("./proof_8.json"),
    require("./proof_9.json"),
];
const web3 = require('web3')
const OWNER_ADDRESS = "0x4bf93EF9dB63146Dc6E2bA57e634a7AaB421D8df"
const CONTRACT_ADDRESS = "0x7e1A742f37Ba64D237f0AD38490F2bd29263Eb32"
const MINT_COUNT =10
const MNEMONIC = ""
const INFURA_KEY = ""

if (!MNEMONIC || !INFURA_KEY || !OWNER_ADDRESS) {
    console.error("Please set a mnemonic, infura key, owner, network, and contract address.")
    return
}

const contract = require('../eth-contracts/build/contracts/SolnSquareVerifier.json'); 
const ABI = contract.abi;

async function main() {
    const provider = new HDWalletProvider(MNEMONIC, `https://rinkeby.infura.io/v3/${INFURA_KEY}`)
    const web3Instance = new web3(
        provider
    )

    if (CONTRACT_ADDRESS) {
        const r2token = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, { gasLimit: "1000000" })
        // tokens issued directly to the owner.
        for (let i = 0; i < MINT_COUNT ; i++) {
            try {
                let proofs = Object.values(zokratesProof[i].proof);
                let inputs = zokratesProof[i].inputs;
                console.log("OWNER_ADDRESS "+ OWNER_ADDRESS + "\n");
                console.log("i "+i+ "\n");
                console.log("proofs "+ proofs+ "\n");
                console.log("inputs "+ inputs+ "\n");
                let tx = await r2token.methods.addSolution(OWNER_ADDRESS, i, ...proofs, inputs).send({ from: OWNER_ADDRESS });
                console.log("Solution added. Transaction: " + tx.transactionHash);
                tx = await r2token.methods.mint(OWNER_ADDRESS, i).send({ from: OWNER_ADDRESS });
                console.log("Minted item. Transaction: " + tx.transactionHash);
            } catch (e) {
                console.log(e);
            }
        }
    }
}

main()