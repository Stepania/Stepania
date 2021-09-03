<template>
  <ATM
    v-on:add-product="addProduct"
    v-on:add-coin="addCoin"
    v-bind:coins="this.vendingMachine.allMyCoins"
    v-bind:products="this.vendingMachine.allMyProducts"
  />
  <ATMForCustomer
    v-bind:coins="this.vendingMachine.allMyCoins"
    v-bind:products="this.vendingMachine.allMyProducts"
    v-on:select-product="this.buyProduct"
  />
</template>

<script>
import ATM from "./components/ATM.vue";
import ATMForCustomer from "./components/ATMForCustomer.vue";

import VendingMachine from "./models/VendingMachine";
export default {
  name: "App",

  data: function() {
    return {
      vendingMachine: new VendingMachine(),
    };
  },
  methods: {
    addProduct: function(event, name, price) {
      this.vendingMachine.addProduct(name, Number(price));
    },

    addCoin: function(event, value, quantity) {
      this.vendingMachine.addCoin(Number(value), Number(quantity));
    },

    buyProduct: function(event, product) {
      this.vendingMachine.removeProduct(product.name);
      alert(`Customer bought ${product.name}.`);
    },
  },

  components: {
    ATM,
    ATMForCustomer,
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-evenly;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
#app > * {
  padding: 25px;
}
</style>
