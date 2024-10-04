// ignition/modules/SimpleStorageModule.js

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("SimpleStorageModule", (m) => {
  // Deploy the SimpleStorage contract
  const simpleStorage = m.contract("SimpleStorage");

  // Return the deployed contract to log its address or further actions
  return { simpleStorage };
});
