export default class ProductRecord {
  get label() {
    return ProductRecord.getLabel(this.name, this.price);
  }
  constructor(newName, newPrice, quantity = 1) {
    // this.name = newName;
    this.name = newName;
    this.price = newPrice;
    this.quantity = quantity;
  }
  static getLabel(name, price) {
    return `${name} (${price})`;
  }
}
