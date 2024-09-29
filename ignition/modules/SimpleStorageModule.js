// ignition/modules/SimpleStorageModule.js

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("SimpleStorageModule", (m) => {
  // Deploy the SimpleStorage contract
  const simpleStorage = m.contract("SimpleStorage");

  // Return the deployed contract to log its address or further actions
  return { simpleStorage };
});
