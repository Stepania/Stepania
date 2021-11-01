<template>
  <div id="app-customer">
    <header id="address">
      <h1>Vending Machine for Customer</h1>
    </header>
    <div class="selector">
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

        <input
          class="keys"
          type="button"
          value="buy"
          @click="$emit('purchase-selected-product', $event)"
        />
        <input
          class="keys"
          type="button"
          value="cancel"
          @click="$emit('give-change', $event)"
        />

        <div id="coins-drag">
          <span id="two-dollar">
            <img
              src="./images/2-dollar.png"
              draggable
              @dragstart="drag($event, 200)"
              width="60"
              height="60"
            />
          </span>
          <span id="one-dollar">
            <img
              src="./images/1-dollar.png"
              draggable
              @dragstart="drag($event, 100)"
              width="60"
              height="60"
            />
          </span>

          <span id="50-cent">
            <img
              src="./images/50-cent.png"
              draggable
              @dragstart="drag($event, 50)"
              width="60"
              height="60"
            />
          </span>

          <span id="20-cent">
            <img
              src="./images/20-cent.png"
              draggable
              @dragstart="drag($event, 20)"
              width="60"
              height="60"
            />
          </span>

          <span id="10-cent">
            <img
              src="./images/10-cent.png"
              draggable
              @dragstart="drag($event, 10)"
              width="60"
              height="60"
            />
          </span>
        </div>
      </div>
      <div class="coin-exchange">
        <div id="money-taker">
          <img
            src="./images/TrimmedSlot.jpg"
            @drop="this.drop($event)"
            @dragover="this.dragover($event)"
            @dragenter="this.dragenter($event)"
            alt="CoinTaker"
            width="122"
            height="119"
          />
        </div>

        <!-- coins ands -->
        <section id="Coin">
          <output id="outputCoin" v-if="coins.length > 0">
            <ul>
              <li v-for="coin in coins" :key="coin.value">
                Your balance is {{ coin.quantity * 10 }} cents
              </li>
            </ul>
          </output>
          <!-- {{ coins }} -->
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import sound from "./sounds/coinSound.mp3";

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
      new Audio(sound).play();
      this.$emit("insert", ev, this.coinValue);
      this.coinValue = 0;
    },
    dragover: function(ev) {
      ev.preventDefault();
    },
    dragenter: function(ev) {
      ev.preventDefault();
    },
    playAudio: function() {
      new Audio(sound).play();
    },
  },
};
</script>

<style scoped>
#app-customer {
  background-color: pink;
  border: 15px red solid;
  background-image: url("../components/images/linii.jpg");
}
#input-panel {
  width: 200px;
}
.keys {
  width: 95px;
  height: 50px;
  padding: 5px;
  margin: 0 5px 5px 0;
  background-color: #333;
  color: #fff;
  border: none;
}
.keys:hover {
  background: red;
  color: #fff;
}
.selector {
  position: relative;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  border: 3px;
  border-radius: 3px;
}
li {
  display: inline-block;
  margin: 0 10px;

  border-radius: 3px;
}
#coins-drag {
  width: 30px;
  height: 360px;
  padding: 30px;
  position: absolute;
  top: 50px;
  right: 12px;
}

a {
  color: #42b983;
}
/* #money-taker {
  width: 350px;
  height: 60px;
  padding: 20px;
} */

#money-taker {
  /* border: 5px black solid; */
  width: 120px;
  height: 120px;
  margin-left: 7%;
  position: absolute;
  left: 6px;
}
#Coin {
  position: absolute;
  top: 350px;
  left: 0px;
  font-size: 20px;
}
#coins-drag {
  height: 200px;
  /* margin-top: 5%;
  padding: 1em;
  /* border: 5px black solid; */
  /* width: 11%;
  position: absolute;
  top: 20px;
  right: 50px; */

  /* plCW  coin taker and coins in one .box for easier design...make a .box: position relative,.coim-taker position absolute and play with it  */
  /* background-color: red; */
}
</style>
