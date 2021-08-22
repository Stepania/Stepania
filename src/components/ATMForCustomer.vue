<template>
  <div id="app-customer">
    <header id="address">
      <h1>Vending Machine for Customer</h1>
    </header>
    <div id="input-panel">
      <button>cola</button>
      <button>cola</button>
      <button>cola</button>
      <button>cola</button>
      <button>cola</button>
      <button>cola</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ATMForCustomer",
};
</script>

<style scoped>
#app-customer {
  background-color: pink;
}
#input-panel {
  width: 100px;
}
#input-panel > * {
  width: 50px;
  height: 50px;
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
