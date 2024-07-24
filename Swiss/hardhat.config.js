require("@nomicfoundation/hardhat-toolbox"); module.exports = { 
  solidity: "0.8.19", networks: {
    swisstronik: { url: 
      "https://json-rpc.testnet.swisstronik.com/", accounts: 
      ["0x204be920837e29185c837462f0340fb151965964a5441b2e858516fd1259e536"], 
      //Your private key starting with "0x"
    },
  },
};
