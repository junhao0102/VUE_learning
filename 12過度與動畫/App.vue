<template>
  <div>
    <test></test>
    <test2></test2>
    <test3></test3>
  </div>
</template>

<script>
import test from './components/test.vue';
import test2 from './components/test2.vue';
import test3 from './components/test3.vue';

export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    test,test2,test3
  },
};
</script>
