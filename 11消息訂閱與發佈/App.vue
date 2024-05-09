<template>
  <div class="app">
    <school></school>
    <student></student>
  </div>
</template>

<script>
import school from './components/school.vue';
import student from './components/student.vue';
export default {
  name: 'app',
  data() {
    return {};
  },
  components: {
    school,
    student,
  },
};
</script>

<style>
.app {
  background-color: gray;
}
</style>
