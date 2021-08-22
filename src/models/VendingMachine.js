import Coin from "./Coin";
import Product from "./Product";

export default class VendingMachine {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.allMyCoins = [];
    this.allMyProducts = [];
  }

  purchaseProduct(purchase, productId, coin) {
    let product = this.allMyProducts[productId];
    let aCoin = this.allMyCoins[0];
    let result = `<table><tr><th class="dispenser" colspan ="2">Dispenser</th></tr>`;

    // Test for invalid coin
    if (purchase % 10 !== 0) {
      result += `<tr>
        <td class = "dispenser">${Math.floor(purchase / 10)} X ${
        aCoin.value
      } and ${purchase % 10} Cent coins dispensed</td>
        <td class = "dispenser">${purchase} is invalid coin input, please insert multiple of ${
        aCoin.value
      } only</td>
      <tr></table>`;
      return result;
    }

    let inputCoinNumber = purchase / coin.value;
    // Test for small amount
    if (purchase < product.price) {
      result += `<tr>
        <td class = "dispenser">${inputCoinNumber} X ${aCoin.value} Cent Coins Dispensed</td>
        <td class="dispenser">Insert ${product.price} Cents to Purchase Product </td>
      <tr></table>`;
      return result;
    }

    let change = purchase - product.price;
    let changeCoinNumber = change / aCoin.value;

    result += `<tr><td class = "dispenser">${changeCoinNumber} X ${aCoin.value} Cent Coins Dispensed</td><td class="dispenser">${product.aName} Product Dispensed </td><tr></table>`;
    this.allMyProducts.pop();
    for (let coins = 0; coins < inputCoinNumber; coins++) {
      this.addCoin(coin);
    }
    for (let coin = 0; coin < changeCoinNumber; coin++) {
      // Check for correct value before popping
      this.allMyCoins.splice(
        this.allMyCoins.findIndex((coin) => coin.value === 10),
        1
      );
    }

    return result;
  }

  addCoin(newValue, newQantity) {
    const aNewCoin = new Coin(newValue, newQantity);
    this.allMyCoins.push(aNewCoin);
  }
  countOfCoins() {
    return this.allMyCoins.length;
  }

  addProduct(newName, newPrice) {
    const aNewProduct = new Product(newName, newPrice);
    this.allMyProducts.push(aNewProduct);
    this.name = newName;
    this.price = newPrice;
  }
  countOfProducts() {
    return this.allMyProducts.length;
  }
}
