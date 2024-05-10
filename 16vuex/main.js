import Vue from 'vue';
import App from './App.vue';
import store from './store/index.js';
//引用插件
import VueResource from 'vue-resource';

//使用插件
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  //使用vuex就能使用$store
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; // Global event bus
  }
}).$mount('#app');
