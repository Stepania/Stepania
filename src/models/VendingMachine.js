import CoinRecord from "./CoinRecord";
import ProductRecord from "./ProductRecord";

export default class VendingMachine {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.allMyCoins = []; // new Array<any>()
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
      return;
    }
    if (product.price > this.calculateTotalValue(this.bufferCoins)) {
      return;
    }
    let change = this.calculateTotalValue(this.bufferCoins) - product.price;
    this.bufferCoins = [];
    this.addCoin(this.bufferCoins, change, 1);
    this.addCoin(this.allMyCoins, product.price, 1);

    this.removeProduct(name);

    // Move buffer to all coins (map addCoin)
    // Give change (calculate price difference, )
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
    return this.allMyCoins.length;
  }

  addProduct(name, price, quantity = 1) {
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
      return;
    }
    if (product.quantity <= 0) {
      return;
    }
    product.quantity -= 1;
  }
  countOfProducts() {
    return this.allMyProducts.length;
  }
}
