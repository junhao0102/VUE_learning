<template>
  <div class="student">
    <h1>學生姓名{{ name }}</h1>
    <h1>學生年齡{{ age }}</h1>
    <button @click="sendData">點擊發送數據</button>
  </div>
</template>

<script>
export default {
  name: 'student',
  data() {
    return {
      name: '小明',
      age: 18,
    };
  },
  methods: {
    sendData() {
      //調用hello事件
      this.$bus.$emit('hello', this.name);
    },
  },
};
</script>

<style scoped>
.school {
  background-color: aqua;
}
button {
  background-color: orange;
}
</style>
