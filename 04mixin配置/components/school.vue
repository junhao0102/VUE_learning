<template>
  <div>
    <h2>學校名稱:{{ name }}</h2>
    <h2>學校地址:{{ address }}</h2>
    <button @click="showname">顯示學校名稱</button>
  </div>
</template>

<script>
import { mixin } from '../mixin.js';
export default {
  name: 'school',
  data() {
    return {
      name: '台北市立大學',
      address: '台北市大安區',
    };
  },
  mixins: [mixin],
};
</script>
