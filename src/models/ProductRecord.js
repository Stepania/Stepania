export default class ProductRecord {
  constructor(newName, newPrice, quantity = 1) {
    this.name = newName;
    this.price = newPrice;
    this.quantity = quantity;
  }
}
