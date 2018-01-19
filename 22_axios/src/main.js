import Vue from 'vue';

import App from './components/app.vue';

import Axios from 'axios';
//给Vue对象的原型挂载一个属性
Vue.prototype.$axios = Axios;
//Vue.use(Axios);//不能这样注册


new Vue({
    el: '#app',
    render: c => c(App)
})