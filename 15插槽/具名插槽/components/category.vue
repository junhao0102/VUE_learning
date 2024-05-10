<template>
  <div class="category">
    <h1>{{ title }}分類</h1>
    <slot name="middle">有東西放沒東西預設這個1</slot>
    <slot name="footer">有東西放沒東西預設這個2</slot>
  </div>
</template>

<script>
export default {
  name: 'category',
  props: ['title', 'datalist']

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