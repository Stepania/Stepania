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
          :disabled="product.quantity < 1"
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

    <span id="two-dollar">
      <img
        src="./images/2-dollar.png"
        alt="twoDollars"
        width="50"
        height="50"
      />
    </span>

    <span id="one-dollar">
      <img
        src="./images/1-dollar.png"
        alt="twoDollars"
        width="50"
        height="50"
      />
    </span>

    <span id="50-cent">
      <img src="./images/50-cent.png" alt="twoDollars" width="50" height="50" />
    </span>

    <span id="20-cent">
      <img src="./images/20-cent.png" alt="twoDollars" width="50" height="50" />
    </span>

    <span id="10-cent">
      <img src="./images/10-cent.png" alt="twoDollars" width="50" height="50" />
    </span>

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
          v-on:click="
            $emit('add-coin-buffer', $event, coins, newValue, newQuantity)
          "
        />
        <br /><br />
      </div>
      <!-- TODO: fix coins as object(not array) -->
      <output id="outputCoin" v-if="coins.length > 0 && false">
        <ul>
          <li v-for="coin in coins" :key="coin.value">
            {{ coin.quantity }} coin(s) of ${{ coin.value }} has been inserted
          </li>
        </ul>
      </output>
      {{ coins }}
    </section>
  </div>
</template>

<script>
export default {
  name: "ATMForCustomer",
  props: {
    coins: Object,
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
