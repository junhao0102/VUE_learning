<template>
  <div>
    <h1>當前求和為{{ $store.state.sum }}</h1>
    <h2>當前求和數字放大10倍{{$store.getters.bigSum}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">點我加</button>
    <button @click="minus">點我減</button>
    <button @click="addOdd">當前求和奇數加</button>
    <button @click="addWait">等一等加</button>
  </div>
</template>

<script>
export default {
  name: "category",

  data() {
    return {
      n: 1,
    };
  },
  methods: { //commit能讓組件直接調用mutations中的方法,不需要再用dispatch跟actions溝通
    add() {
      this.$store.commit("ADD", this.n);
    },
    minus() {
      this.$store.commit("MINUS", this.n);
    },
    addOdd() {
      this.$store.dispatch("addOdd", this.n);
    },
    addWait() {
      this.$store.dispatch("addWait", this.n);
    },
  },
};
</script>
<style scoped>
button {
  margin-right: 10px;
}
</style>
