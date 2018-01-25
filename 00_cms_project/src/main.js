import Vue from 'vue';

import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import Search from './components/search/search.vue';
import NewsList from './components/news/newsList.vue';
import NewsDetail from './components/news/newsDetail.vue';
import Photo from './components/photo/photo.vue';
import PhotoDetail from './components/photo/photoDetail.vue'
import './static/css/global.css';

// 引入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    // mui的active-class，通过linkActiveClass设置为router的active-class，通过路由匹配显示激活效果
    linkActiveClass: 'mui-active',
    routes: [
        // 重定向
        {path: '/', redirect: {name: 'home'}},
        {name: 'home', path: '/home', component: Home},//首页
        {name: 'member', path: '/member', component: Member},//会员
        {name: 'shopcart', path: '/shopcart', component: Shopcart},//商品展示
        {name: 'search', path: '/search', component: Search},// 查找
        {name: 'news.list', path: '/news/list', component: NewsList},// 新闻列表
        {name: 'news.detail', path: '/news/detail', component: NewsDetail},// 新闻列表
        {name: 'photo.share', path: '/photo/list', component: Photo},// 图文分享
        {name: 'photo.detail', path: '/photo/detail', component: PhotoDetail},// 图文详情
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

// 引入MomentJs
import Moment from 'moment';
//定义成全局过滤器
Vue.filter('dateConvert', function (value) {
    return Moment(value).format('YYYY年MM月DD日 HH:mm:ss');
})

// 引入全局组件
import NavBar from './components/common/navBar.vue';
Vue.component('navBar', NavBar);

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})