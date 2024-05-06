<template>
  <div>
    <student name = "akali" sex = "女" :age = 12 ></student>  
    <hr/>
    <student name ='lee sin' sex = "男" :age = 20 ></student>  
  </div>
</template>

<script>
import student from './components/student.vue'

export default {
  name:'App',
  components: {
    student
  }
};
</script>
