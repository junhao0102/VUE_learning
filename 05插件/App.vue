<template>
  <div>
    <school/>
    <hr/>
    <student/>
  </div>
</template>

<script>
import student from './components/student.vue';
import school from './components/school.vue';
export default {
  name: 'App',
  components: {
    student,
    school,
  },
};
</script>
