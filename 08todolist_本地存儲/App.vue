<template>
  <div class ='app'>
    <top :addtodo="addtodo"></top>
    <list :todos="todos" :checktodo="checktodo" :deletetodo="deletetodo"></list>
    <confirm :todos="todos" :checkalltodo="checkalltodo" :clearAlltodo="clearAlltodo"></confirm>
  </div>
</template>

<script>
import top from './components/Top.vue';
import list from './components/List.vue';
import confirm from './components/Confirm.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    };
  },
  watch:{
    todos:{
      handler(){
        localStorage.setItem('todos',JSON.stringify(this.todos));
      },
      deep:true,
      
    }

  },

  methods:{
    addtodo(todo){
      this.todos.unshift(todo);
      // console.log('我是APP組件',todo);
    },
    checktodo(id){
      this.todos.forEach(todo => {
        if(todo.id === id){
          todo.done = !todo.done;
        }
      });
    },
    deletetodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    checkalltodo(done){
      this.todos.forEach(todo => {
        todo.done = done;
      });
    },
    clearAlltodo(){
      this.todos = this.todos.filter(todo => !todo.done);
    }
  

  },
  components: {
    top,
    list,
    confirm,
  },
};
</script>

<style>
.app {
  width: 300px;
  margin: 25px auto;
  font-family: Arial, sans-serif;
}

</style>