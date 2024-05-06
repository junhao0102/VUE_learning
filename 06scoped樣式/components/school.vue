<template>
  <div class="demo">
    <h2>學校名稱:{{ name }}</h2>
    <h2>學校地址:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: 'school',
  data() {
    return {
      name: '台北市立大學',
      address: '台北市大安區',
    };
  },
};
</script>

<style scoped >
.demo {
  background-color: #f0f0f0;
  padding: 10px;
  margin: 10px;
}
</style>
