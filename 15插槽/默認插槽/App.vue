<template>
  <div class="row">
    <category title="食物">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="燒烤">
    </category>

    <category title="遊戲" :datalist="games">
      <ul>
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
    </category>

    <category title="電影">
      <video controls src="https://media.w3.org/2010/05/sintel/trailer.mp4"></video>
    </category>
  </div>
</template>

<script>
import category from './components/category.vue'

export default {
  name: 'app',
  data() {
    return {
      food: ['火鍋', '燒烤', '麵食', '炸雞'],
      games: ['LOL', '吃雞', '英雄聯盟', '王者榮耀'],
      films: ['戰狼', '戰狼2', '戰狼3', '戰狼4']
    };
  },
  components: {
    category
  },
};
</script>

<style scoped>
.row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
}

img {
  width: 100%;
}
video {
  width: 100%;
}
</style>
