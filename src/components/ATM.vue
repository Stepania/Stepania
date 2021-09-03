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
            One {{ lastProduct.name }} which cost is ${{ lastProduct.price }}
            has been added
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
          id="insert"
          type="button"
          value="insert"
          v-on:click="$emit('add-coin', $event, newValue, newQuantity)"
        />
        <br /><br />
      </div>
      <output id="outputCoin" v-if="coins.length > 0">
        <ul>
          <li v-for="coin in coins" :key="coin.value">
            {{ coin.quantity }} coin(s) of ${{ coin.value }} has been inserted
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
    coins: Array,
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
  },
};
</script>

<style scoped>
#app-manager {
  background-color: lightblue;
}
h3 {
  margin: 80px 0 0;
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
