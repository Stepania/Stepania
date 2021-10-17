import CoinRecord from "./CoinRecord";
import ProductRecord from "./ProductRecord";

export default class VendingMachine {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.allMyCoins = [];
    this.allMyProducts = [];
    this.bufferCoins = [];
  }

  calculateTotalValue(storage) {
    return storage
      .map((c) => parseInt(c.value) * c.quantity)
      .reduce((total, tempTotal) => total + tempTotal, 0);
  }

  purchaseProduct(name) {
    let product = this.allMyProducts.find((p) => p.name === name);
    if (product === undefined) {
      return calculateTotalValue(this.bufferCoins);
    }
    if (product.price > this.calculateTotalValue(this.bufferCoins)) {
      return calculateTotalValue(this.bufferCoins);
    }
    let change = this.calculateTotalValue(this.bufferCoins) - product.price;
    // this.calculateTotalValue(this.bufferCoins) - product.price * 10;
    this.bufferCoins = [];
    this.addCoin(this.bufferCoins, change, 1);
    this.addCoin(this.allMyCoins, product.price, 1);

    // Move buffer to all coins (map addCoin)
    // Give change (calculate price difference, )
    return this.removeProduct(name);
  }

  addCoin(storage, value, quantity) {
    let exchangeCoinQuantity = Math.floor((value * quantity) / 10);
    let coin = storage.find((c) => c.value === 10);
    if (coin === undefined) {
      let newCoin = new CoinRecord(10, exchangeCoinQuantity);
      return storage.push(newCoin);
    }
    coin.quantity += exchangeCoinQuantity;
  }
  countOfCoins() {
    return this.bufferCoins.length * 10;
  }

  addProduct(name, price, quantity = 1) {
    if (quantity < 0) {
      throw `VendingMachine.addProduct does not allow negative quantity. Entered: ${quantity}.`;
    }
    let product = this.allMyProducts.find((p) => p.name === name);
    if (product === undefined) {
      let newProduct = new ProductRecord(name, price, quantity);
      return this.allMyProducts.push(newProduct);
    }
    product.quantity += quantity;
  }

  removeProduct(name) {
    let product = this.allMyProducts.find((p) => p.name === name);
    if (product === undefined) {
      return this.calculateTotalValue(this.bufferCoins);
    }
    if (product.quantity <= 0) {
      return this.calculateTotalValue(this.bufferCoins);
    }
    product.quantity -= 1;
    if (product.quantity < 1) {
      let productIndex = this.allMyProducts.findIndex((p) => p.name === name);
      this.allMyProducts.splice(productIndex, 1);
    }
    let newBufferCoins = this.calculateTotalValue(this.bufferCoins);
    this.bufferCoins = [];
    return newBufferCoins;
  }
  countOfProducts() {
    return this.allMyProducts.length;
  }
}
