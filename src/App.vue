<!DOCTYPE html>
<template>
  <ATM
    v-on:add-product="addProduct"
    v-on:add-coin="addCoin"
    v-bind:coins="this.vendingMachine.allMyCoins"
    v-bind:products="this.vendingMachine.allMyProducts"
  />

  <ATMForCustomer
    v-on:select-product="purchaseProduct"
    v-on:add-coin-buffer="addCoin"
    v-bind:coins="this.vendingMachine.bufferCoins"
    v-bind:products="this.vendingMachine.allMyProducts"
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
  // problem with a validation of coins and price
  methods: {
    addProduct: function(event, name, price) {
      if (this.vendingMachine.allMyProducts.length > 5) {
        return alert("Max products allowed is 6");
      }
      if (price <= 0) {
        return alert("Insert proper value");
      }
      if (price === null) {
        return alert("Insert proper value");
      }
      if (price == "") {
        return alert("Insert proper value");
      }
      if (name === null) {
        return alert("Insert proper value");
      }
      this.vendingMachine.addProduct(name, Number(price));
    },

    addCoin: function(event, storage, value, quantity) {
      if (value < 0) {
        return alert("Insert proper coin");
      }
      if (quantity < 0) {
        return alert("Insert proper coin");
      }

      if (quantity == "") {
        return alert("Insert proper quantity");
      }

      if (value == "") {
        return alert("Insert proper value");
      }

      if (value === null) {
        return alert("Insert proper coin");
      }
      if (quantity === null) {
        return alert("Insert proper coin");
      }
      return this.vendingMachine.addCoin(
        storage,
        Number(value),
        Number(quantity)
      );
    },

    purchaseProduct: function(event, product) {
      this.vendingMachine.purchaseProduct(product.name);
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
