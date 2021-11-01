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
        <input
          class="button"
          id="add"
          type="button"
          value="add"
          v-on:click="$emit('add-product', $event, newName, newPrice)"
        />
        <br /><br />
      </div>
      <output id="outputProduct" v-if="products.length > 0">
        <ul>
          <li>
            One {{ lastProduct.name }} with a price of
            {{ lastProduct.price }} cents has been added
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
        <input
          class="button"
          id="insert"
          type="button"
          value="insert"
          v-on:click="$emit('add-coin', $event, coins, newValue, newQuantity)"
        />
        <br /><br />
      </div>
      <!-- TODO: hidden because coins is object - fetch lastest inserted coin instead -->
      <!-- {{ coins }} -->
      <output id="outputCoin" v-if="coins.length > 0">
        <ul>
          <li v-for="coin in coins" :key="coin.value">
            Vending machine balance is {{ coin.quantity * 10 }} cents
          </li>
        </ul>
      </output>
    </section>
  </div>
</template>

<script>
export default {
  name: "ATM",
  props: {
    coins: Object,
    products: Array,
  },
  data: function() {
    return {
      newValue: "",
      newQuantity: "",
      newName: "",
      newPrice: 0,
    };
  },
  computed: {
    lastProduct: function() {
      return this.products[this.products.length - 1];
    },
    lastCoin: function() {
      return this.coins;
    },
    hasCoins: function() {
      return Object.keys(this.coins).length > 0;
    },
  },
};
</script>

<style scoped>
#app-manager {
  background-color: lightblue;
  border: 15px rgba(89, 0, 255, 0.562) solid;
}
h3 {
  margin: 110px 0 0;
  padding: 3px;
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
.button[type="button"] {
  margin-top: 5px;
  padding: 10px 15px;
  background-color: #333;
  color: #fff;
  border: none;
  margin-left: 1em;
}
.button:hover {
  background: red;
  color: #fff;
}
</style>
