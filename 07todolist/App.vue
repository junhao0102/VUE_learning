<template>
  <div>
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
      todos: [
        { id: 1, task: '買菜', done: false },
        { id: 2, task: '睡覺', done: true },
        { id: 3, task: '吃飯', done: false },
        { id: 4, task: '做作業', done: true },
        { id: 5, task: '打遊戲', done: true },
      ],
    };
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
