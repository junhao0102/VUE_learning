<template>
  <div>
    <button @click="isShow = !isShow">顯示/隱藏</button>
    <!--多個用group-->
    <transition-group      
      name="animate__animated animate__bounce"   
      appear
      enter-active-class="animate__bounceInDown"
      leave-active-class="animate__bounceOutDown"
    >
       <h1 v-show="!isShow" key="1">你好啊</h1> <!--key值必須加-->
      <h1 v-show="isShow" key="2">你好啊2</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}
</style>