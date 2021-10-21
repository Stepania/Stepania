import CoinRecord from "./CoinRecord";
import ProductRecord from "./ProductRecord";

export default class VendingMachine {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.lastPickedProduct = null; // ProductRecord
    this.allMyCoins = [];
    this.allMyProducts = [];
    this.bufferCoins = [];
  }

  calculateTotalValue(storage) {
    return storage
      .map((c) => parseInt(c.value) * c.quantity)
      .reduce((total, tempTotal) => total + tempTotal, 0);
  }

  purchaseProduct(name, price) {
    this.selectProduct(name, price);
    this.purchaseSelectedProduct();
  }
  purchaseSelectedProduct() {
    if (this.hasNoSelectedProduct()) {
      return this.calculateTotalValue(this.bufferCoins);
    }
    if (
      this.lastPickedProduct.price > this.calculateTotalValue(this.bufferCoins)
    ) {
      return this.calculateTotalValue(this.bufferCoins);
    }
    //create if statement for checking if VM will be able to give a change before customer can buy product
    //make a button buy and cancel - useful

    let change =
      this.calculateTotalValue(this.bufferCoins) - this.lastPickedProduct.price;

    this.bufferCoins = [];
    console.log(this.bufferCoins);
    this.addCoin(this.bufferCoins, change, 1);
    console.log(this.bufferCoins);
    this.addCoin(this.allMyCoins, this.lastPickedProduct.price, 1);

    // Move buffer to all coins (map addCoin)
    // Give change (calculate price difference, )
    return this.removeSelectedProduct();
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
    let product = this.findProduct(name, price);
    if (product === undefined) {
      let newProduct = new ProductRecord(name, price, quantity);
      return this.allMyProducts.push(newProduct);
    }
    product.quantity += quantity;
  }

  removeProduct(name, price) {
    this.selectProduct(name, price);
    this.removeSelectedProduct();
  }
  removeSelectedProduct() {
    if (this.hasNoSelectedProduct()) {
      return this.calculateTotalValue(this.bufferCoins);
    }
    if (this.lastPickedProduct.quantity <= 0) {
      return this.calculateTotalValue(this.bufferCoins);
    }
    this.lastPickedProduct.quantity -= 1;
    if (this.lastPickedProduct.quantity < 1) {
      let productIndex = this.findProductIndex(
        this.lastPickedProduct.name,
        this.lastPickedProduct.price
      );
      this.allMyProducts.splice(productIndex, 1);
    }
    let newBufferCoins = this.calculateTotalValue(this.bufferCoins);
    if (newBufferCoins <= 0) {
      this.bufferCoins = [];
    }
    this.lastPickedProduct = null;
    return newBufferCoins;
  }

  selectProduct(name, price) {
    this.lastPickedProduct = this.findProduct(name, price);
    return this.lastPickedProduct;
  }

  hasNoSelectedProduct() {
    return (
      this.lastPickedProduct == null || this.lastPickedProduct === undefined
    );
  }

  countOfProducts() {
    return this.allMyProducts.length;
  }

  findProduct(name, price) {
    return this.allMyProducts.find(
      (p) => p.label === ProductRecord.getLabel(name, price)
    );
  }

  findProductIndex(name, price) {
    return this.allMyProducts.findIndex(
      (p) => p.label === ProductRecord.getLabel(name, price)
    );
  }
}
