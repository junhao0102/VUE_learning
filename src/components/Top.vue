<template>
  <div>
    <input type="text" placeholder="輸入任務" v-model ="task" @keydown.enter = "add"/>
  </div>
</template>

<script>
  import{nanoid} from 'nanoid';
export default {
  name: 'top',
  data() {
    return {
      task: '',
    };
  },
  methods: {
    add() {
      if (!this.task.trim()) return alert('請輸入任務');
      //將用戶對象的輸入包裝成一個todo對象
      const todoObj = {
        id: nanoid(),
        task: this.task,
        done:false
      };
      this.addtodo(todoObj);
      this.task = '';
    },
  },
  props: ['addtodo'],
};
</script>

<style scoped>
/* 基本的樣式 */
input[type='text'] {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

/* 滑鼠懸停時的樣式 */
input[type='text']:hover {
  border-color: #666;
}

/* 聚焦時的樣式 */
input[type='text']:focus {
  border-color: #0088cc;
  box-shadow: 0 0 5px #0088cc;
}
</style>
