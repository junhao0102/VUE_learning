<template>
  <div>
   <search></search>
   <list></list>
  </div>
</template>

<script>
import search from './components/search.vue';
import list from './components/list.vue';

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    search,list
  },
};
</script>
