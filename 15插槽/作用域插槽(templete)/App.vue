<template>
  <div class="row">
    <category title="遊戲">
      <template scope="data">
        <ul>
          <li v-for="(game, index) in data.games" :key="index">{{ game }}</li>
        </ul>
      </template>
    </category>

    <category title="遊戲">
      <template scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index">{{ game }}</li>
        </ol>
      </template>
    </category>

    <category title="遊戲">
      <template scope="{games}">
        <h3 v-for="(game, index) in games" :key="index">{{ game }}</h3>
      </template>
    </category>
  </div>
</template>

<script>
import category from './components/category.vue'

export default {
  name: 'app',

  components: {
    category
  },
};
</script>

<style scoped>
.row,
.games,
.movie {
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
