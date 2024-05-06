<template>
  <div class = 'demo'>
    <h2>學生名稱:{{ name }}</h2>
    <h2>學生名稱:{{ age }}</h2>
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
};
</script>

<style scoped>
  .demo{
    background-color:skyblue;
    padding: 10px;
    margin: 10px;
  }
</style>