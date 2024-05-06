<template>
  <div>
    <h1 ref = 'title' >歡迎學習{{skill}}</h1>
    <button @click ='showDOM' ref = 'btn' >點我輸出DOM</button>
    <school ref = "sch"></school>
    
  </div>
</template>

<script>
import school from './components/school.vue'

export default {
  name:'App',
  components: {
    school
  },
  data(){
    return {
      skill: 'Vue.js'
    }
  },
  methods:{
    showDOM(){
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      console.log(this.$refs.sch)
    }
  }
};
</script>
