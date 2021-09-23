/* globals describe beforeEach expect it Controller */

describe("Task 1:", () => {
  describe("Creating a VendingMachine", () => {
    let VendingMachine;
    beforeEach(() => {
      VendingMachine = Controller.setup();
    });

    describe("the .name property", () => {
      it("should have a .name property", () => {
        expect("name" in VendingMachine).to.be.true;
      });
    });

    describe("the .location property", () => {
      it("should have a .location property", () => {
        expect("location" in VendingMachine).to.be.true;
      });
    });
  });
});
