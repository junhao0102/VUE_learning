<template>
  <div class="clear" v-show="total">
    <label>
      <input type="checkbox" :checked="isAll" @click="checkall"/>
    </label>
    <span>全選</span>
    <br/>
    <span>已完成{{donetotal}}/{{total}}項目</span>
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
  background-color: papayawhip;
  color: black;
  text-decoration: none;
  border: none;
  height: 15px;
  width: 200px;
  border-radius: 5px;
}

</style>
