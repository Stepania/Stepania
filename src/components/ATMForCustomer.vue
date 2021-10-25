<template>
  <div id="app-customer">
    <header id="address">
      <h1>Vending Machine for Customer</h1>
    </header>
    <div id="input-panel">
      <button
        v-for="product in products"
        :key="product.label"
        class="keys"
        v-on:click="$emit('select-product', $event, product)"
        :disabled="product.quantity < 1"
      >
        {{ product.label }}
      </button>
      <!-- something is wrong  -->
      <input
        class="keys"
        type="button"
        value="buy"
        v-on:click="$emit('purchase-selected-product', $event)"
      />
      <input
        class="keys"
        type="button"
        value="cancel"
        v-on:click="$emit('give-change', $event)"
      />
    </div>

    <div id="money-taker">
      <img
        src="./images/TrimmedSlot.jpg"
        @drop="this.drop($event)"
        @dragover="this.dragover($event)"
        @dragenter="this.dragenter($event)"
        alt="CoinTaker"
        width="100"
        height="100"
      />
    </div>

    <audio id="myAudio">
      <!-- <source src="./sounds/coinSound.ogg" type="audio/ogg" /> -->
      <source src="./sounds/coinSound.mp3" type="audio/mpeg" />
    </audio>

    <div id="coins-drag">
      <span id="two-dollar">
        <img
          src="./images/2-dollar.png"
          draggable
          @dragstart="drag($event, 200)"
          width="50"
          height="50"
        />
      </span>
      <span id="one-dollar">
        <img
          src="./images/1-dollar.png"
          draggable
          @dragstart="drag($event, 100)"
          width="50"
          height="50"
        />
      </span>

      <span id="50-cent">
        <img
          src="./images/50-cent.png"
          draggable
          @dragstart="drag($event, 50)"
          width="50"
          height="50"
        />
      </span>

      <span id="20-cent">
        <img
          src="./images/20-cent.png"
          draggable
          @dragstart="drag($event, 20)"
          width="50"
          height="50"
        />
      </span>

      <span id="10-cent">
        <img
          src="./images/10-cent.png"
          draggable
          @dragstart="drag($event, 10)"
          width="50"
          height="50"
        />
      </span>
    </div>

    <button onclick="playAudio()" type="button">Play Audio</button>

    <section id="Coin">
      <!-- <div id="headerCoin">
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
      </div> -->
      <!-- <output id="outputCoin" v-if="coins.length > 0 && false"> -->
      <output id="outputCoin" v-if="coins.length > 0">
        <ul>
          <li v-for="coin in coins" :key="coin.value">
            {{ coin.quantity * 10 }} cents has been inserted
          </li>
        </ul>
      </output>
      <!-- {{ coins }} -->
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
  data: function() {
    return {
      coinValue: 0,
    };
  },
  methods: {
    drag: function(ev, value) {
      this.coinValue = +value;
    },
    drop: function(ev) {
      this.$emit("insert", ev, this.coinValue);
      this.coinValue = 0;
    },
    dragover: function(ev) {
      ev.preventDefault();
    },
    dragenter: function(ev) {
      ev.preventDefault();
    },
    playAudio: function(ev) {
      ev.play();
    },
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
/* #coins-drag {
  width: 300px;
  height: 60px;
  padding: 30px;
} */

a {
  color: #42b983;
}
/* #money-taker {
  width: 300px;
  height: 60px;
  padding: 20px;
} */
</style>
