## Whitelist-dapp-contracts

### To generare the private keys

> run this command in the terminal:

`npx mnemonics`
now you have a mnemonic phrase save it the file called secrets.json save it
simila to `secrets.example.json`

Now Get the your RPC Node url from infura.io or any other node provider and save it in the secrets.json file

> Please check secrets.example.json for more information about the secrets.json file

#### NOTE: you get contract address only after you deploy the contract


### Now get some funds your wallet by sending some ether to the address
> to the address use first 
- `truffle console --network rinkeby`
- `await web3.eth.getAccounts()`

> now you have list of accounts select the first one and send some ether to the address
using metamask

now you can check balance using
`await web3.eth.getBalance(account_address)`

### How to deploy the contract
check your are rinkeby network
if not change the network by running
`truffle console --network rinkeby`

> Migrate the contract

`truffle migrate`

## React App