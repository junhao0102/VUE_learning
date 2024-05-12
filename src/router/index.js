
import VueRouter from 'vue-router';
import home from '../pages/home.vue';
import about from '../pages/about.vue';
import news from '../pages/news.vue';
import message from '../pages/message.vue';
import detail from '../pages/detail.vue';


//創建路由器並導出
export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: about
        },
        {
            path: '/home',
            component: home,
            children: [
                {
                    path: 'news',
                    component: news
                },
                {
                    path: 'message',
                    component: message,
                    children: [
                        {
                            path: 'detail',
                            component: detail
                        }
                    ]
                }
            ]
        },

    ]
});