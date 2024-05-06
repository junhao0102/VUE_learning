<template>
  <div>
    <h2>學生名稱:{{ name }}</h2>
    <h2>學生名稱:{{ age }}</h2>
    <button @click="showname">顯示學生名稱</button>
  </div>
</template>

<script>
//引用混合
import { mixin } from '../mixin.js';
export default {
  name: 'student',
  data() {
    return {
      name: '小明',
      age: 18,
    };
  },
  mixins: [mixin],
};
</script>
