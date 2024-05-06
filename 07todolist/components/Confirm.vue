<template>
  <div class="clear" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @click="checkall"/>
    </label>
    <span>已完成{{donetotal}}</span>/{{total}}
    <button @click = 'clearAll'>清除已完成項目</button>

  </div>
</template>

<script>
export default {
  name: 'confirm',
  props: ['todos','checkalltodo','clearAlltodo'],
  methods: {
    checkall(e){
      this.checkalltodo(e.target.checked);
    },
    clearAll(){
      this.clearAlltodo();

    }
  },
  computed:{
    total(){
      return this.todos.length;
    },
    donetotal(){
      return this.todos.filter(todo => todo.done).length;
    },
    isAll(){
      return this.total === this.donetotal && this.total > 0;
    }
  }
};
</script>

<style scoped>
.clear {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

/* 懸停時的按鈕樣式 */
.clear:hover {
  background-color: #0056b3;
}

/* 聚焦時的按鈕樣式 */
.clear:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
</style>
