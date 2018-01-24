import Vue from 'vue';

import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import Search from './components/search/search.vue';

// 引入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    // mui的active-class，通过linkActiveClass设置为router的active-class，通过路由匹配显示激活效果
    linkActiveClass: 'mui-active',
    routes: [
        // 重定向
        {path: '/', redirect: {name: 'home'}},
        {name: 'home', path: '/home', component: Home},
        {name: 'member', path: '/member', component: Member},//
        {name: 'shopcart', path: '/shopcart', component: Shopcart},//
        {name: 'search', path: '/search', component: Search},
    ]
})

// 引入Mint-UI
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

// 引入MUI
import './static/vendor/mui/dist/css/mui.css'

// 引入axios,并挂载原型
import  Axios from 'axios';
Vue.prototype.$ajax = Axios;
Axios.defaults.baseURL = 'http://localhost:8080/api/';

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})