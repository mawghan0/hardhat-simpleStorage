const { expect } = require("chai");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

describe("SimpleStorage", function () {
  let simpleStorage; // Variable to hold the deployed contract instance

  beforeEach(async function () {
    // Deploy the SimpleStorage contract using Ignition
    const module = buildModule("SimpleStorageModule", (m) => {
      const simpleStorage = m.contract("SimpleStorage");
      return { simpleStorage };
    });

    // Use hre.ignition.deploy() directly to deploy the module
    const deployment = await hre.ignition.deploy(module);

    // Save the deployed contract instance for use in tests
    simpleStorage = deployment.simpleStorage;

    // Ensure the contract is deployed
    expect(simpleStorage).to.not.be.undefined;
  });

  it("Should start with a favorite number of 0", async function () {
    // Call the retrieve method to get the current value
    const currentValue = await simpleStorage.retrieve(); // assuming retrieve() is a contract method
    const expectedValue = 0;

    // Assert that the current value is equal to the expected value
    expect(currentValue.toString()).to.equal(expectedValue.toString());
  });

  it("Should update with a favorite number of 5", async function () {
    // Call the retrieve method to get the current value
    await simpleStorage.store("5"); // assuming retrieve() is a contract method
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = 5;

    // Assert that the current value is equal to the expected value
    expect(currentValue.toString()).to.equal(expectedValue.toString());
  });
});
