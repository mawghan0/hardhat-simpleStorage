import { expect } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";
import { ethers } from "hardhat";

describe("SimpleStorage", function () {
  let simpleStorage: SimpleStorage; // Variable to hold the deployed contract instance

  beforeEach(async function () {
    // Gunakan ethers untuk mendapatkan factory contract dan deploy SimpleStorage
    const simpleStorageFactory = (await ethers.getContractFactory(
      "SimpleStorage"
    )) as SimpleStorage__factory;
    
    // Deploy kontrak
    simpleStorage = (await simpleStorageFactory.deploy()) as SimpleStorage;

    // Tunggu sampai kontrak di-deploy
    await simpleStorage.waitForDeployment();
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
