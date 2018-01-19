import Vue from 'vue';
// 1、引入
import VueRouter from 'vue-router';

import App from './components/app.vue';
import Header from './components/header.vue';
import Footer from './components/footer.vue';

import Music from './components/music.vue';
import Guochan from './components/guochan.vue';
import Oumei from './components/oumei.vue';

Vue.component('headerVue', Header);
Vue.component('footerVue', Footer);

// 2、安装
Vue.use(VueRouter);

// 3、创建路由对象并配置路由规则
let router = new VueRouter({
    routes: [
        {path: '/', redirect: {name: 'music'}},
        {
            name: 'music', path: '/music', component: Music, children: [
                {name: 'oumei', path: '/oumei', component: Oumei},
                {name: 'guochan', path: '/guochan', component: Guochan}
            ]
        }
    ]
})

new Vue({
    el: '#app',
    router,// 4、将路由对象传给Vue实例
    render: c => c(App)
})