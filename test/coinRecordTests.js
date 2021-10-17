var assert = require("assert");
import CoinRecord from "../src/models/CoinRecord";

describe("VM coin instance ", () => {
  it("should have a .quantity property", () => {
    // arrange
    var coin = new CoinRecord(5, 1);
    // act
    // assert
    assert.equal("quantity" in coin, true);
  });
  it("should save quantity correctly.", () => {
    // arrange
    var coin = new CoinRecord(5, 1);
    // act
    // assert
    assert.equal(coin.quantity, 1);
  });
  it("should save value correctly.", () => {
    // arrange
    var coin = new CoinRecord(50, 1);
    // act
    // assert
    assert.equal(coin.value, 50);
  });
});
