<template>
  <div>
    <item
      v-for="todoOBJ in todos"
      :key="todoOBJ.id"
      :todo="todoOBJ"
      :checktodo="checktodo"
      :deletetodo="deletetodo"
    />
  </div>
</template>

<script>
import item from './Item.vue';
export default {
  name: 'list',
  components: {
    item,
  },
  props: ['todos', 'checktodo','deletetodo'],
};
</script>

<style scoped></style>
