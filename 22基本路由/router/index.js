
import VueRouter from 'vue-router';
import home from '../pages/home.vue';
import about from '../pages/about.vue';

//創建路由器並導出
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/about',
            component: about
        }
    ]

});