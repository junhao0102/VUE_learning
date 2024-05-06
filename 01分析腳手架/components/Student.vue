<template>
  <div class="demo">
    <h1>學生姓名{{ name }}</h1>
    <h1>學生年齡{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name:'Student',
  data() {
    return {
      name: 'lee sin',
      age: 20,
    };
  }
};

</script>
<style>
.demo {
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>
