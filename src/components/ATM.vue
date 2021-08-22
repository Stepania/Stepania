<template>
  <div id="app-manager">
    <header id="address">
      <h1>Vending Machine for Manager</h1>
    </header>
    <section id="Product">
      <div id="headerProduct">
        <h3>Add product</h3>
      </div>
      <div id="input">
        <input id="name" v-model="newName" placeholder="product" />
        <input id="price" v-model="newPrice" placeholder="price" />
        <input id="add" type="button" value="add" v-on:click="addProduct" />
        <br /><br />
      </div>
      <output id="outputProduct" v-if="hasProduct">
        <ul>
          <li v-for="product in getProducts()" :key="product.name">
            One {{ product.name }} which cost is ${{ product.price }} has been
            added
          </li>
        </ul>
      </output>
    </section>
    <section id="Coin">
      <div id="headerCoin">
        <h3>Insert coin</h3>
      </div>
      <div id="inputCoin">
        <input id="value" v-model="newValue" placeholder="value" />
        <input id="quantity" v-model="newQuantity" placeholder="quantity" />
        <input id="insert" type="button" value="insert" v-on:click="addCoin" />
        <br /><br />
      </div>
      <output id="outputCoin" v-if="hasCoin">
        <ul>
          <li v-for="coin in getCoins()" :key="coin.value">
            {{ coin.quantity }} coin(s) of ${{ coin.value }} has been inserted
          </li>
        </ul>
      </output>
    </section>
  </div>
</template>

<script>
import VendingMachine from "../models/VendingMachine";
export default {
  name: "ATM",
  data: function() {
    return {
      newName: "",
      newPrice: 0,
      hasProduct: false,
      newValue: "",
      newQuantity: "",
      hasCoin: false,
      vendingMachine: new VendingMachine(),
    };
  },
  methods: {
    addProduct: function() {
      this.vendingMachine.addProduct(this.newName, Number(this.newPrice));
      this.hasProduct = true;
      this.newName = "";
      this.newPrice = "";
    },
    getProducts: function() {
      return this.vendingMachine.allMyProducts;
    },

    addCoin: function() {
      this.vendingMachine.addCoin(
        Number(this.newQuantity),
        Number(this.newValue)
      );
      this.hasCoin = true;
      this.newValue = "";
      this.newQuantity = "";
    },
    getCoins: function() {
      console.log("asdfasdf");
      return this.vendingMachine.allMyCoins;
    },
  },
};
</script>

<style scoped>
#app-manager {
  background-color: lightblue;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
