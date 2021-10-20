var assert = require("assert");
import VendingMachine from "../src/models/VendingMachine";

describe("Vending machine instance", () => {
  it("should have a name and location property", () => {
    // arrange
    var vm = new VendingMachine("Ara vending machine", "Madras st");
    // act
    // assert
    assert.equal(vm.name, "Ara vending machine");
    //tehnically it's a second test
    assert.equal(vm.location, "Madras st");
  });
  it("calculateTotalValue() returns correct coin total amount.", () => {
    // arrange
    let vm = new VendingMachine();
    // act
    vm.addCoin(vm.bufferCoins, 10, 2);
    vm.addCoin(vm.bufferCoins, 20, 1);
    let totalBufferCoins = vm.calculateTotalValue(vm.bufferCoins);
    // assert
    assert.equal(totalBufferCoins, 40);
  });
  it("removeProduct() should remove product.", () => {
    // arrange
    let vm = new VendingMachine();
    vm.addProduct("cola", 10, 3);
    // act
    vm.removeProduct("cola", 10);
    let cola = vm.findProduct("cola", 10);
    // assert
    assert.equal(cola?.quantity, 2);
  });
});
