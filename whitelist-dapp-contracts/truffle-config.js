const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = require("./secrets.json").mnemonic;
const RPC_NODE_URL = require("./secrets.json").rpc_node_url;

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "1234",
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, RPC_NODE_URL),
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.10",
    },
  },
};
