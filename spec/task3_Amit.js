/* globals describe beforeEach expect it Controller */

describe("Task 3 Adding Products", () => {
  let theVendingMachine, coin, product;
  beforeEach(() => {
    theVendingMachine = Controller.setup();
  });

  describe("Product", () => {
    it("should have a .name property", () => {
      expect("aName" in theVendingMachine).to.be.true;
    });
    it("should be Dilbert", () => {
      expect(theVendingMachine.aName).to.equal("Dilbert");
    });
    it("should have a .colour property", () => {
      expect("colour" in theVendingMachine).to.be.true;
    });
    it("should be Brown", () => {
      expect(theVendingMachine.colour).to.equal("Brown");
    });
    it("should have a .weight property", () => {
      expect("weight" in theVendingMachine).to.be.true;
    });
    it("should be 500", () => {
      expect(theVendingMachine.weight).to.equal(500);
    });
    it("should have a .price property", () => {
      expect("price" in theVendingMachine).to.be.true;
    });
    it("should be 150 Price", () => {
      expect(theVendingMachine.price).to.equal(150);
    });
  });
  describe("VendingMachine changes", () => {
    it("should have a .allMyProducts property", () => {
      expect("allMyProducts" in theVendingMachine).to.be.true;
    });
    it("should have a .allMyProducts property that is an array", () => {
      expect(Array.isArray(theVendingMachine.allMyProducts)).to.be.true;
    });
  });
  describe("Testing Products Object from the setup method of Controller", () => {
    it("should have the correct number of Products", () => {
      expect(theVendingMachine.allMyProducts.length).to.equal(3);
    });
  });
});
