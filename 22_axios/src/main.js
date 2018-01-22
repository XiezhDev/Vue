import Vue from 'vue';

import App from './components/app.vue';

import Axios from 'axios';
//给Vue对象的原型挂载一个属性
Vue.prototype.$axios = Axios;
//Vue.use(Axios);//不能这样注册

// 拦截器
Axios.interceptors.request.use(function (config) {
    console.log(config);
    //config.headers.accept = 'interceptors';//往请求头字段“追加”值

    // 设置请求头某一字段值为
    config.headers = {
        accept : 'interceptors'
    }

    return config;// 返回没有修改的设置，不返回的话请求就被拦截了
})

// 设为默认
Axios.defaults.headers = {
    accept: 'defaults'
}

new Vue({
    el: '#app',
    render: c => c(App)
})