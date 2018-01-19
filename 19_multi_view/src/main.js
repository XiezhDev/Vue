import Vue from 'vue';
// 1、引入
import VueRouter from 'vue-router';

import App from './components/app.vue';

import Header from './components/header.vue';
import Footer from './components/footer.vue';

Vue.component('headerVue', Header);
Vue.component('footerVue', Footer);

// 2、安装
Vue.use(VueRouter);

// 3、创建路由对象并配置路由规则
let router = new VueRouter({
    routes: [
        {
            path: '/',
            components: {
                header: Header,
                footer: Footer,
                default: Footer
            }
        }
    ]
})

new Vue({
    el: '#app',
    router,// 4、将路由对象传给Vue实例
    render: c => c(App)
})