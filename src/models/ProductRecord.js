export default class ProductRecord {
  constructor(newName, newPrice, quantity = 1) {
    this.name = `${newName} (${newPrice}$)`;
    this.price = newPrice;
    this.quantity = quantity;
  }
}
