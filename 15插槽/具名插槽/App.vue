<template>
  <div class="row">
    <category title="食物">
      <img slot="middle" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="燒烤">
      <a slot="footer" href="https://www.google.com">更多美食</a>
    </category>

    <category title="遊戲" :datalist="games">
      <ul slot="middle">
        <li v-for="(game, index) in games" :key="index">{{ game }}</li>
      </ul>
      <div slot="footer" class ="games" >
        <a  href="https://www.google.com">單機遊戲</a>
        <a  href="https://www.google.com">更多遊戲</a>
      </div>
    </category>

    <category title="電影">
      <video slot ="middle" controls src="https://media.w3.org/2010/05/sintel/trailer.mp4"></video>
      <div slot="footer" class ="movie" >
        <a  href="https://www.google.com">經典</a>
        <a  href="https://www.google.com">熱門</a>
        <a  href="https://www.google.com">推薦</a>
      </div>
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
.row ,.games,.movie{
  display: flex;
  justify-content: space-around;
}

img {
  width: 100%;
}

video {
  width: 100%;
}
</style>
