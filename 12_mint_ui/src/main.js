import Vue from 'vue';
import App from './app.vue';

import MintUI from 'mint-ui';
// 完整引入
Vue.use(MintUI);
//use(组件库）：注册各种全局组件
//use(插件）：挂载属性，方便通过this.使用其功能

import 'mint-ui/lib/style.css'

new Vue({
    el: '#app',
    render: c => c(App)
})