<template>
  <div id="app-customer">
    <header id="address">
      <h1>Vending Machine for Customer</h1>
    </header>
    <div id="input-panel">
      <span v-for="product in products" :key="product.name">
        <button
          class="keys"
          v-on:click="$emit('select-product', $event, product)"
        >
          {{ product.name }}
        </button>
      </span>
      <input class="keys" type="button" value="buy" v-on:click="buy" />
      <input
        class="keys"
        type="button"
        value="cancel"
        v-on:click="giveChange"
      />
    </div>
    <div id="money-taker">
      <img
        src="./images/TrimmedSlot.jpg"
        alt="CoinTaker"
        width="100"
        height="100"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ATMForCustomer",
  props: {
    coins: Array,
    products: Array,
  },
};
</script>

<style scoped>
#app-customer {
  background-color: pink;
}
#input-panel {
  width: 110px;
}
.keys {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 0 5px 5px 0;
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
