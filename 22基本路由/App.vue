<template>
  <div>
    <banner/>
    <div class="row">
      <div class='select'>
        <div class="list-group">
          <!-- Use router-link component for navigation. -->
          <router-link to="/home" class="list-group-item" active-class="active">Home</router-link>
          <router-link to="/about" class="list-group-item" active-class="active">About</router-link>
        </div>
      </div>
    </div>
    <div>
      <div class="panel">
        <div class="panel-body">
          <!-- Route outlet -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  import banner from './components/banner.vue';
  
  export default {
    name: 'app',
    components: {
      banner
    },
  };
</script>

<style>
  /* Reset default margin and padding */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Page header styles */
  .page-header {
    text-align: center;
    color: black;
    padding: 0;
    margin: 0;


  }

  /* List group styles */
  .list-group {
    position: relative;
    top: 100px;
    left: 300px;
  }

  .list-group-item {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    color: #333;
    text-decoration: none;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    width: 200px;
  }

  .list-group-item:hover {
    background-color: #f0f0f0;
  }

  .list-group-item.active {
    background-color: #007bff;
    color: #fff;
  }

  .panel {
    position: relative;
    top: 0px;
    left: 600px;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-top: 20px;
    width: 300px;
    height: 80px;
  }

  .panel-body {
    padding: 20px;

  }
</style>