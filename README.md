# Blockchain Notary Service (BNS) POC
### Data Authenticity with Blockchain

Made in JavaScript with Node.js, Solidity, and Truffle (MetaMask)

Contents:

1.  [Overview](#overview)
1.  [Research](#Research)
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
* Extensible to an intuitive blockchain powered document management system.
* Powered by the Ethereum blockchain for tamper-proof record-keeping.

### Key Takeaways
* Ethereum Blockchain: Ensures security and availability with no fraud potential.
* Global Verification: Independent checks from anywhere, at any time.
* Easy to Integrate: Embeddable into existing applications seamlessly either with whitelabel UI or API.
* Possibility for Integrated E-signatures: Facilitates complete document workflows.

## Research

* [B-CoC: A Blockchain-based Chain of Custody
  for Evidences Management in Digital Forensics](https://arxiv.org/pdf/1807.10359.pdf)
* [The Application of Blockchain of Custody in Criminal Investigation
  Process ](https://pdf.sciencedirectassets.com/280203/1-s2.0-S1877050921X00154/1-s2.0-S1877050921017853/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLWVhc3QtMSJHMEUCIBOa453WEZLxIveMyqwtZ9WXeATjfUGZg2GK7tajLzVZAiEAyScBtvxa3OwMaaucjQ0VKxfq%2BtvHXX%2F4OAaie6TctxEqswUIHRAFGgwwNTkwMDM1NDY4NjUiDDgYsHXhBIsvWOU39SqQBe0P%2BxW3Amy1f4enZYZgGOilFzo9Ndu78Fsvmeg9c7ddju99rPExOrzcWUMqA19qA%2FEfGSWIgg7OahW7h%2FRaoS6ej5h4naqG%2FBDW6M7rPOndy3NVT%2B7lNRo1Y68u%2FP8snUv0b8MboMHH13Jm9zmizVORowVvR%2Fmf0xiGxlkfuae1aiLpO61VPKkM1Sdip4b8eGWAcoyWEds%2Fz3j5YD1eS%2FjNPiuN2yUF5IJ89HzAUEWBRwTpgsgpiA2Pl3LjJlcIAr9yf8wgVgFp8ZRyaS%2FhQDJ5yNLwo3aKv886QisBxLgc01j7m2ez%2FSColF5VYL4MdBDC0C1VQDcdPV3pwRSm0YYfiPjQjNcSxrQ0S3P%2FjDU%2F6ed3FQJtOeMkYaog79JlI9CNQwZ0jqAWHmgICx1hNbCBWAGR2o2W%2BEmJe0qA2samY0D%2BzmuQSqTI00Lz4V9ETKgNSsGpg8y5vUqj5o%2F9U7OgFam%2B3RM%2FXo1%2FnghbFDHybJPnRCY0uxEfeQwzHr62%2Fx5kif7QQPIglRUefy9UzRSv6rQoiRyMxWiVw021cxVmr6jgGUxhPH3pSRgfnp%2FNHzNrwzcJvYni93sj5ZO1Dqq9B0aUGVwNwjwMSAT3IZJUXcufZsuZ8%2BbwRKXX2w3I5P4a%2BGaqBoYzT4%2B03hWeupCwCZBu9mhf0H2uE14gGkti6qSLiiFxbTGXOVUW5XASXTwfYS5zj%2FqlB0kxb320fvgMzvqNbGUxJKiXjvsdY5Ki4LL2hf1KuSXmVQa5Uqic81nE28B089nblj8uvC4uaWm6bIPj8RZ1gAo3Gk8oLx3GzYgk1SkBYaQ8QJEU56n%2BWaC07ixoXjjSwT%2Fy3Yh7PBU7MU%2FocHbh%2FEV0BDuGJ0AyMPX%2B7K8GOrEBgnBBltRIjsaZSkBEPgDIjYVdrig0ThqA4gCGhuRbY47%2BrmNFwvfSJ9Ww3FCeYFOkoIQxdcU%2FmEjG5jmRaKbbzjBMN8GpFzaZEYTpag8058Mjhyeuz%2FzxkhUk3ep0HWzRYUKXrxwNrsFWwlnctieCUXWzR2bLlvLr4iZY6sECy7lnqYZK0o%2FwjHr1wSIH9zPW22jSjSrotMWEkQMQ5qXwP6Y%2FAwhgPygmKa%2B%2F3KnzNWVH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240320T211306Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY35N4J26Z%2F20240320%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3e274904e6cfd4ed76001a18298a7cf8865461d29a5e28c671b5a52d60ef7d2a&hash=9e9e265cb6d8c223d9ceafeec7378bd6750aa643bb36d0d16243565a5288a1c6&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1877050921017853&tid=spdf-87ee4c3d-5dfd-4a77-9100-9bf42bc8ed76&sid=fad272b131bd69483f8b12250d4fbe50e44fgxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=131c5859565c015357&rr=8678b445bdfd08c5&cc=us)
* [Improving Chain of Custody in Forensic Investigation of
  Electronic Digital Systems](http://paper.ijcsns.org/07_book/201101/20110101.pdf)
* [A Taxonomy of Blockchain-Based Systems for
  Architecture Design](https://www.pautasso.info/biblio-pdf/blockchain-icsa2017.pdf)
* [FORENSIC-CHAIN: ETHEREUM
  BLOCKCHAIN BASED DIGITAL FORENSICS
  CHAIN OF CUSTODY](https://journal.scsa.ge/wp-content/uploads/2018/12/4-auqib-hamid-lone-roohie-naaz-mir_forensic-chain-ethereum-blockchain-based-digital-forensics-chain-of-custody.pdf)
* [Digital Chain of Custody: State of The Art
  ](https://www.researchgate.net/publication/273694917_Digital_Chain_of_Custody_State_of_The_Art)

## Contributing

**Contributions are welcomed** to improve, adapt, or build on this POC. The following instructions cover how to set up your dev environment for iterating on the service itself.

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