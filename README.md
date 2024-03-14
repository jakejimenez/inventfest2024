# Blockchain Notary Service (BNS) POC
### Data Authenticity with Blockchain

Made in JavaScript with Node.js, Solidity, and Truffle (MetaMask)

Contents:

1.  [Overview](#overview)
1.  [Usage](#usage)
1.  [Contributing](#contributing)
1.  [Setting up your development environment](#setting-up-your-development-environment)


## Overview
* Comprehensive suite capability: Notarization, e-signature, and verification services.
  * Notarization
    * Notarizes files of any type through a web console or API.
    * Produces a certificate verifying the timestamp, integrity, and authenticity.
    * Use Cases: Legal documentation, business contracts, intellectual property.
  * E-signatures
    * Enables electronic document signing with verifiable timestamp and integrity.
    * Streamlines the signing process while ensuring security.
    * Use Cases: Agreements, company policies, official documents.
  * Verification
    * Permits verification of notarized documents from any device, anytime.
    * Offers independent verification through the UI or blockchain ledger.
    * Use Cases: Auditing, regulatory compliance, legal disputes.
* Strengthens data authenticity, integrity, and security.
* Powered by the Ethereum blockchain for tamper-proof record-keeping.

### Key Takeaways
* Ethereum Blockchain: Ensures security and availability with no fraud potential.
* User-Friendly Web Interface: For ease of access and efficient onboarding.
* Customization Options: Tailor the service to fit your brand.
* Global Verification: Independent checks from anywhere, at any time.
* API for Integration: Embed BNS into existing applications seamlessly.
* Integrated E-signatures: Facilitates complete document workflows.

## Usage

* **Navigate** with any web browser to [https://known-finally-snake.ngrok-free.app/](https://known-finally-snake.ngrok-free.app/)

## Contributing

**All contributions are welcomed** to improve the Blockchain Notary Service POC. The following instructions cover how to set up your dev environment for iterating on the service itself.

(If you're looking forward to use the service as a user, please refer to the Usage section above.)


## Development Environment Setup

### Prerequisites
```
Node.js, npm, Truffle, Ganache, and MetaMask
```

### Node.js and npm
```
cd app
npm install
```
To begin in the app in development mode, run:
```
npm run dev
```
To produce a production build, run:
```
npm run build
```

### Truffle Setup
```
npm install -g truffle
```
From the main folder of the project, run:
```
truffle develop
truffle compile
truffle migrate --reset
```