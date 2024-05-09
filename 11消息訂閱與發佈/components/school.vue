<template>
  <div class="school">
    <h1>學校姓名{{ name }}</h1>
    <h1>學校地址{{ address }}</h1>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
  name: 'school',
  data() {
    return {
      name: '大安高工',
      address: '台北市大安區和平東路一段',
    };
  },
  mounted() {
    this.SubID = pubsub.subscribe('school', (pubsubName, data) => {
      console.log('學校組件收到的數據', pubsubName, data);  //箭頭函數用來找this
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.SubID);
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
