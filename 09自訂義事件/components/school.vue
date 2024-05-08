<template>
  <div class="school">
    <h1>學校姓名{{ name }}</h1>
    <h1>學校地址{{ address }}</h1>
    <button @click="on">點我觸發自訂義事件</button>
    <button @click="off">點我解除自訂義事件</button>
    <button @click ="death">點我destroy</button>
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
  methods: {
    on() {
      this.$emit('demo',this.name);
      this.$emit('demo2',this.address);
    },
    off(){
       this.$off('demo'); //解除自訂義事件
      // this.$off(['demo','demo2']); //解除自訂義事件
      // this.$off(); //解除所有自訂義事件
    
    },
    death(){
      this.$destroy(); //destroy後自訂義事件也會被解除
    }
  },
};
</script>

<style scoped>
.school {
  background-color: aqua;
}
button {
  background-color:orange;
}
</style>
