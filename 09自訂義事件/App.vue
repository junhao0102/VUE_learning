<template>
  <div class="app">
    <h1>{{title}}</h1>
    <school @demo="alertwarn" @demo2="alertwarn"/> <!-- 定義自訂義事件 -->
  </div>
</template>

<script>
import school from './components/school.vue';

export default {
  name: 'app',
  data() {
    return {
      title:"你好啊"
    };
  },
  components: {
    school,
  },
  methods:{
    alertwarn(name){
      console.log("自訂義事件調用",name);
    }
  }
};
</script>

<style>
.app {
  background-color:gray;
}
</style>
