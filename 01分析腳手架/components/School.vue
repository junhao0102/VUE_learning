<template>
  <div class="demo">
    <h1>學校名稱{{ name }}</h1>
    <h1>學校地址{{ address }}</h1>
    <button @click="show">點我提示校名</button>
  </div>
</template>

<script>
export default {
  name:'School',
  data() {
    return {
      name: '台北市立大學',
      address: '台北市大安區',
    };
  },
  methods: {
    show() {
      alert(this.name);
    },
  },
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
