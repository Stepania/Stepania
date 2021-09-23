/* globals describe beforeEach expect it Controller */

describe("Task 2 Adding Coins", () => {
  let CoinRecord;
  beforeEach(() => {
    CoinRecord = new CoinRecord(value, quantity);
  });

  describe("CoinRecord", () => {
    it("should have a .value property", () => {
      expect("value" in CoinRecord).to.be.true;
    });
    it("should be 10 cents Value", () => {
      expect(aCoin.value).to.equal(10);
    });
  });
  describe("VendingMachine changes", () => {
    let VendingMachine;

    beforeEach(() => {
      VendingMachine = Controller.setup();
    });
	/*testing allMycoins*/
    it("should have a .allMyCoins property", () => {
      expect("allMyCoins" in VendingMachine).to.be.true;
    });
    it("should have a .allMyCoins property that is an array", () => {
      expect(Array.isArray(VendingMachine.allMyCoins)).to.be.true;
    });
	
	/*testing buffer coins*/
    it("should have a .allMyCoins property", () => {
      expect("bufferCoins" in VendingMachine).to.be.true;
    });
    it("should have a .allMyCoins property that is an array", () => {
      expect(Array.isArray(VendingMachine.bufferCoins)).to.be.true;
    });

    describe("Testing Coin Object from the setup method of Controller", () => {
      it("should have the correct number of Coins", () => {
        expect(VendingMachine.bufferCoins.length).to.equal();
      });
    });
  });
});
