<template>
  <div class="category">
    <h1>{{ title }}分類</h1>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: 'category',
  props: ['title'],
  data() {
    return {
      games: ['LOL', '吃雞', '英雄聯盟', '王者榮耀'],
    };
  },

};
</script>

<style>
.category {
  height: 300px;
  width: 200px;
  border: 1px solid #ccc;
  background-color: skyblue;

}

h1 {
  background-color: darkorange;
  text-align: center;
}
</style>