import Web3 from 'web3';
import contract from 'truffle-contract';
import notaryArtifact from '../../../build/contracts/Notary.json';

const NotaryContract = contract(notaryArtifact);
let userAccounts;
let activeAccount;

const NotaryApp = {
    web3: null,
    initializeBlockchainConnection: async function() {
        NotaryContract.setProvider(this.web3.currentProvider);
        try {
            const accounts = await this.web3.eth.getAccounts();
            if (!accounts.length) throw 'No accounts found. Please unlock your wallet.';
            userAccounts = accounts;
            activeAccount = userAccounts[0];
            NotaryContract.defaults({ from: activeAccount });
        } catch (error) {
            alert(error);
            console.error('Error fetching accounts', error);
        }
    },
    handleFileAction: async function(isNotarization) {
        const fileInputId = isNotarization ? '#fileWrite' : '#fileRead';
        const fileInput = document.querySelector(fileInputId);
        const file = fileInput.files[0];
        if (!file) {
            alert('Please select a file.');
            return;
        }

        const statusContainer = document.querySelector("#status");
        statusContainer.innerHTML = "Processing...";
        try {
            const hash = await generateFileHash(file);
            const normalizedHash = hash.startsWith('0x') ? hash : `0x${hash}`;

            if (isNotarization) {
                const comment = document.querySelector('#comment').value;
                await this.notarizeDocument(normalizedHash, file.name, comment);
            } else {
                await this.verifyDocument(normalizedHash);
            }

            fileInput.value = ""; // Reset file input
        } catch (error) {
            statusContainer.innerHTML = `Error: ${error}`;
            console.error(error);
        }
    },
    notarizeDocument: async function(fileHash, fileName, comment) {
        try {
            const contractInstance = await NotaryContract.deployed();
            const transactionResult = await contractInstance.addEntry(fileHash, fileName, comment, { gas: 3000000 });

            // Simplified success message, showing only transaction hash
            document.querySelector("#status").innerHTML = `Document notarization successful. Transaction ID: ${transactionResult.tx}`;
        } catch (error) {
            // Simplified error handling from previous example
            if (error.message.includes('satisfies all conditions set by Solidity')) {
                document.querySelector("#status").innerHTML = "Unable to complete the notarization: This document has already been notarized.";
            } else {
                document.querySelector("#status").innerHTML = "An error occurred during notarization. Please try again.";
            }
            console.error(error);
        }
    },
    verifyDocument: async function(fileHash) {
        try {
            const contractInstance = await NotaryContract.deployed();
            const verificationResult = await contractInstance.entrySet(fileHash);
            const uploadedOn = new Date(verificationResult[1].toNumber() * 1000).toLocaleString();

            // Formatting the output with HTML for cleaner presentation
            const verificationMessage = `
      <div><strong>File Verified!</strong></div>
      <div><strong>Filename:</strong> ${verificationResult[0]}</div>
      <div><strong>Uploaded on:</strong> ${uploadedOn}</div>
      <div><strong>Uploader:</strong> ${verificationResult[3]}</div>
      <div><strong>Comment:</strong> ${verificationResult[2]}</div>
    `;

            document.querySelector("#status").innerHTML = verificationMessage;
        } catch (error) {
            document.querySelector("#status").innerHTML = "Error verifying the file. Please ensure the file has been notarized previously.";
            console.error(error);
        }
    }
};

window.NotaryApp = NotaryApp;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        NotaryApp.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
            NotaryApp.initializeBlockchainConnection();
        } catch (error) {
            console.error('User denied account access', error);
        }
    } else {
        alert('Please install MetaMask to use this app.');
    }
});

async function generateFileHash(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function(event) {
            const buffer = event.target.result;
            window.crypto.subtle.digest('SHA-256', buffer)
                .then(hash => resolve(arrayBufferToHex(hash)))
                .catch(reject);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}

function arrayBufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
