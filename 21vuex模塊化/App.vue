<template>
  <div>
    <count/>
    <hr>
    <person/>
  </div>  
</template>

<script>
import count from './components/count.vue'
import person from './components/person.vue'

export default {
  name: 'app',

  components: {
    count,person
    
  },
};
</script>


