describe("Task 4 Purchase Product", () => {
  let theVendingMachine, coin;
  beforeEach(() => {
    theVendingMachine = Controller.setup();
    coin = new Coin("Cupro-nickel", 23.62, 5.66, 10);
  });

  describe("Scenario 1: purchase product and give change", () => {
    it("should give product and return change.", () => {
      let result = theVendingMachine.purchaseProduct(200, 0, coin);
      expect(result).to.equal(
        `<table><tr><th class="dispenser" colspan ="2">Dispenser</th></tr><tr><td class = "dispenser">5 X 10 Cent Coins Dispensed</td><td class="dispenser">Dilbert Product Dispensed </td><tr></table>`
      );
    });
  });

  describe("Scenario 2: purchase product,no change", () => {
    it("should give product,but no change", () => {
      let result = theVendingMachine.purchaseProduct(150, 0, coin);
      expect(result).to.equal(
        `<table><tr><th class="dispenser" colspan ="2">Dispenser</th></tr><tr><td class = "dispenser">0 X 10 Cent Coins Dispensed</td><td class="dispenser">Dilbert Product Dispensed </td><tr></table>`
      );
    });
  });

  describe("Scenario 3: no product, give change", () => {
    it("should throw an error and return coins.", () => {
      let result = theVendingMachine.purchaseProduct(140, 0, coin);
      expect(result).to.equal(
        `<table><tr><th class="dispenser" colspan ="2">Dispenser</th></tr><tr>\n        <td class = "dispenser">14 X 10 Cent Coins Dispensed</td>\n        <td class="dispenser">Insert 150 Cents to Purchase Product </td>\n      <tr></table>`
      );
    });
  });

  describe("Scenario 4: purchase with incorrect coins", () => {
    it("should throw an error and return coins.", () => {
      let result = theVendingMachine.purchaseProduct(165, 0, coin);
      expect(result).to.equal(
        `<table><tr><th class="dispenser" colspan ="2">Dispenser</th></tr><tr>\n        <td class = "dispenser">16 X 10 and 5 Cent coins dispensed</td>\n        <td class = "dispenser">165 is invalid coin input, please insert multiple of 10 only</td>\n      <tr></table>`
      );
    });
  });
});
