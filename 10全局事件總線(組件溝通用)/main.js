import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; // Global event bus
  },
}).$mount('#app');
