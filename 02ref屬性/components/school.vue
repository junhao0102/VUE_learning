<template>
    <div class ="school">
        <h1>學校名稱:{{name}}</h1>
        <h1>學校地址:{{address}}</h1>
    </div>
</template>
  
<script>
  export default {
    name: 'School',
    data(){
      return {
        name: '台北市立大學',
        address: '台北市大安區'
      }
    }
  };
  
</script>
<style>
  .school{
    background-color: #f0f0f0;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
  }
</style>
  