import Coin from "./Coin";
import Product from "./Product";

export default class VendingMachine {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.allMyCoins = {};
    this.allMyProducts = [];
    this.bufferCoins = {};
  }

  calculateTotalValue(storage) {
    return Object.entries(storage)
      .map((c) => +c[0] * c[1])
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
    console.log(this.calculateTotalValue(this.bufferCoins));

    // // Test for invalid coin
    // if (purchase % 10 !== 0) {
    //   return `${purchase} is invalid coin input, please insert multiple of ${aCoin.value} only`;
    // }

    // let inputCoinNumber = purchase / coin.value;
    // // Test for small amount
    // if (purchase < product.price) {
    //   result += `<tr>
    //     <td class = "dispenser">${inputCoinNumber} X ${aCoin.value} Cent Coins Dispensed</td>
    //     <td class="dispenser">Insert ${product.price} Cents to Purchase Product </td>
    //   <tr></table>`;
    //   return result;
    // }

    // let change = purchase - product.price;
    // let changeCoinNumber = change / aCoin.value;

    // result += `<tr><td class = "dispenser">${changeCoinNumber} X ${aCoin.value} Cent Coins Dispensed</td><td class="dispenser">${product.aName} Product Dispensed </td><tr></table>`;
    // this.allMyProducts.pop();
    // for (let coins = 0; coins < inputCoinNumber; coins++) {
    //   this.addCoin(coin);
    // }
    // for (let coin = 0; coin < changeCoinNumber; coin++) {
    //   // Check for correct value before popping
    //   this.allMyCoins.splice(
    //     this.allMyCoins.findIndex((coin) => coin.value === 10),
    //     1
    //   );
    // }

    // return result;
  }

  addCoin(storage, newValue, newQantity) {
    // const aNewCoin = new Coin(newValue, newQantity);
    // this.allMyCoins.push(aNewCoin);
    if (Object.keys(storage).includes(`${newValue}`)) {
      storage[newValue] += newQantity;
    } else {
      storage[newValue] = newQantity;
    }
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
  removeProduct(name) {
    let indexProduct = this.allMyProducts.findIndex((p) => p.name === name);
    if (indexProduct === -1) {
      return;
    }
    this.allMyProducts.splice(indexProduct, 1);
  }
  countOfProducts() {
    return this.allMyProducts.length;
  }
}
