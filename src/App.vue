<template>
  <ATM />
  <ATMForCustomer />
</template>

<script>
import ATM from "./components/ATM.vue";
import ATMForCustomer from "./components/ATMForCustomer.vue";

export default {
  name: "App",
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
