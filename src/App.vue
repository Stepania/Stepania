<!DOCTYPE html>
<template>
  <ATM
    v-on:add-product="addProduct"
    v-on:add-coin="addCoin"
    v-bind:coins="this.vendingMachine.allMyCoins"
    v-bind:products="this.vendingMachine.allMyProducts"
  />

  <ATMForCustomer
    v-on:select-product="selectProduct"
    v-on:purchase-selected-product="purchaseSelectedProduct"
    v-on:give-change="giveChange"
    v-on:add-coin-buffer="addCoin"
    v-on:insert="insertCoin"
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
      if (name.length > 8) {
        return alert("Could you shorten the name please");
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

      if (value % 10 !== 0) {
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

    selectProduct: function(event, product) {
      this.vendingMachine.selectProduct(product.name, product.price);
      alert(
        `Customer selected ${this.vendingMachine.lastPickedProduct.label}.`
      );
    },
    purchaseSelectedProduct: function(event) {
      let operationProduct = this.vendingMachine.lastPickedProduct;
      if (this.vendingMachine.hasNoSelectedProduct()) {
        return alert("Choose some product first.");
      }
      let startValue = this.vendingMachine.calculateTotalValue(
        this.vendingMachine.bufferCoins
      );
      this.vendingMachine.purchaseSelectedProduct();
      let changeValue = this.vendingMachine.calculateTotalValue(
        this.vendingMachine.bufferCoins
      );
      let isSuccesful = changeValue < startValue;
      if (isSuccesful) {
        alert(
          `Customer bought ${operationProduct.label}. Please, take your change (${changeValue}).`
        );
        return;
      }
      alert(`Not enough money.`);
    },
    insertCoin: function(event, value) {
      this.vendingMachine.addCoin(
        this.vendingMachine.bufferCoins,
        Number(value),
        1
      );
    },
    giveChange: function(event) {
      let returnedAmount = this.vendingMachine.calculateTotalValue(
        this.vendingMachine.bufferCoins
      );
      this.vendingMachine.bufferCoins = [];
      alert(`Take your ${returnedAmount} change.`);
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
  color: black;
  background-color: #2421b8;
  margin-top: 30px;

  border-top-width: 150px;
  border-color: rgb(0, 0, 0);
}
#app > * {
  padding: 50px;
  border: 4px rgba(168, 167, 214, 0.589) solid;
  border-radius: 15px;
}
</style>
