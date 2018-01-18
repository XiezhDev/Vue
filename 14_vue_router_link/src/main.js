import Vue from 'vue';
// 1、引入
import VueRouter from 'vue-router';

import App from './components/app.vue';

import Music from './components/music.vue';
import Movie from './components/movie.vue';

// 2、安装
Vue.use(VueRouter);

// 3、创建路由对象并配置路由规则
let router = new VueRouter({
    routes: [
        {
            // 命名路由
            name: 'music',
            path: '/music',
            component: Music
        },
        {
            path: '/movie',
            component: Movie
        }
    ]
})

new Vue({
    el: '#app',
    router,// 4、将路由对象传给Vue实例
    render: c => c(App)
})