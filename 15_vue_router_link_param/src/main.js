import Vue from 'vue';
// 1、引入
import VueRouter from 'vue-router';

import App from './components/app.vue';

import List from './components/list.vue';
import Detail from './components/detail.vue';

// 2、安装
Vue.use(VueRouter);

// 3、创建路由对象并配置路由规则
let router = new VueRouter({
    routes: [
        {
            name: 'list',
            path: '/list',
            component: List
        },
        {
            //能匹配GET方式URL：'/detail?xxx=xxx&yyy=yyy',无论多少个请求参数
            name: 'detail',
            path: '/detail',
            component: Detail
        },
        {
            // 能匹配Restful风格的URL：'/detail/xxx'，要声明url参数
            name: 'detail',
            path: '/detail/:id',
            component: Detail
        }
    ]
})

new Vue({
    el: '#app',
    router,// 4、将路由对象传给Vue实例
    render: c => c(App)
})