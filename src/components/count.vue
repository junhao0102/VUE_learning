<template>
  <div>
    <h1>當前求和為:{{ sum }}</h1>
    <h2>當前求和數字放大10倍:{{bigSum}}</h2>
    <h2>我在{{school}}學習{{subject}}</h2>
    <h2 style="color:red;">person組件的總人數:{{personlist.length }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">點我加</button>
    <button @click="minus(n)">點我減</button>
    <button @click="addOdd(n)">當前求和奇數加</button>
    <button @click="addWait(n)">等一等加</button>
  </div>
</template> 

<script>
import { mapState, mapGetters,mapMutations,mapActions} from "vuex";
export default {
  name: "category",
  data() {
    return {
      n: 1,
    };
  },
  computed:{
     //借助mapState生成computed屬性,從state中獲取數據
    ...mapState('countAbout',["sum","school","subject"]),
    ...mapState('personAbout',["personlist"]),
    ...mapGetters('countAbout',["bigSum"]),
  },
  methods: { 
    //commit能讓組件直接調用mutations中的方法,不需要再用dispatch跟actions溝通
    // add() {
    //   this.$store.commit("ADD", this.n);
    // },
    // minus() {
    //   this.$store.commit("MINUS", this.n);
    // },
    // addOdd() {
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // addWait() {
    //   this.$store.dispatch("addWait", this.n);
    // },

    //借助mapMutations生成methods屬性,調用commit聯繫mutations中獲取方法
    ...mapMutations('countAbout',{add:'ADD',minus:'MINUS'}),
    //借助mapActions生成methods屬性,調用dispatch聯繫actions中獲取方法
    ...mapActions('countAbout',["addOdd", "addWait"]),
  }
};
</script>
<style scoped>
button {
  margin-right: 10px;
}
</style>
