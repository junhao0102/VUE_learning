<template>
  <div class="school">
    <h1>學校姓名{{ name }}</h1>
    <h1>學校地址{{ address }}</h1>
  </div>
</template>

<script>
export default {
  name: 'school',
  data() {
    return {
      name: '大安高工',
      address: '台北市大安區和平東路一段',
    };
  },
  mounted() {
    //綁定hello事件
    this.$bus.$on('hello', (data) => {
      console.log('已收到傳回數據', data);
    });
  },
  beforedestroy() {
    //解除hello事件
    this.$bus.$off('hello');
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
