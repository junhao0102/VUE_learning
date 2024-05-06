<template>
  <div class="item">
    <li @mouseover="showButton" @mouseout="hideButton">
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="handlecheck(todo.id)"
        />
        <span>{{ todo.task }}</span>
      </label>
      <button @click="deleteitem(todo.id)" v-show="isButtonVisible">Delete</button>
    </li>
  </div>
</template>

<script>
export default {
  name: 'item',
  data() {
    return {
      isButtonVisible: false,
    };
  },
  methods: {
    handlecheck(id) {
      this.checktodo(id);
    },
    deleteitem(id) {
      if(confirm('確認刪除嗎?')) {
        this.deletetodo(id);
      }
    },
    showButton() {
      this.isButtonVisible = true;
    },
    hideButton() {
      this.isButtonVisible = false;
    },
  },
  props: ['todo', 'checktodo','deletetodo'],
};
</script>

<style scoped>
.item {
  font-family: Arial, sans-serif;
  font-size: 20px;
  margin: 0 auto;
}
.item li {
  list-style-type: none;
  margin: 10px 5px;
}
li:hover {
  background-color:skyblue;
}
.item button {
  position: absolute;
  left: 130px;
  background-color: rgb(238, 59, 59);
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
  border: 1px solid rgb(238, 59, 59);
  border-radius: 5px;
}
</style>
