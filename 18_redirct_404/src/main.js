import Vue from 'vue';
// 1、引入
import VueRouter from 'vue-router';

import App from './components/app.vue';

import NotFound from './components/notFound.vue';
import Home from './components/Home.vue';

// 2、安装
Vue.use(VueRouter);

// 3、创建路由对象并配置路由规则
let router = new VueRouter({
    routes: [
        // 重定向
        {path: '/', redirect: {name: 'home'}},
        {name: 'home', path: '/home', component: Home},
        // 404
        {path: '*', component: NotFound}
    ]
})

new Vue({
    el: '#app',
    router,// 4、将路由对象传给Vue实例
    render: c => c(App)
})