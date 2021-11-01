var assert = require("assert");
import ProductRecord from "../src/models/ProductRecord";

describe("VM product instance ", () => {
  it("should have a .quantity property", () => {
    // arrange
    var product = new ProductRecord("pepsi", 40, 1);
    // act
    // assert
    assert.equal("quantity" in product, true);
  });
  it("should save quantity correctly.", () => {
    // arrange
    var product = new ProductRecord(4, 1);
    // act
    // assert
    assert.equal(product.quantity, 1);
    assert.equal(product.price, 1);
  });

  it("should have name correctly.", () => {
    // arrange
    var product = new ProductRecord("cola", 1);
    // act
    // assert
    assert.equal(product.name, "cola");
  });
  it("should save price correctly.", () => {
    // arrange
    var product = new ProductRecord("coca", 150, 1);
    // act
    // assert
    assert.equal(product.price, 150);
  });

  it("should save price correctly.", () => {
    // arrange
    var product = new ProductRecord("coca", 150, 1);
    // act
    // assert
    assert.equal(product.price, 200);
  });
});
