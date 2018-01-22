import Vue from 'vue';
import App from './components/app.vue';
import Axios from 'axios';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

//给Vue对象的原型挂载一个属性
Vue.prototype.$axios = Axios;
//Vue.use(Axios);//不能这样注册

// 拦截器
// 请求，显示加载提示框
Axios.interceptors.request.use(function (config) {
    MintUI.Indicator.open();
    return config;
})
// 响应后，关闭加载提示框
Axios.interceptors.response.use(function (config) {
    MintUI.Indicator.close();
    return config;
})


new Vue({
    el: '#app',
    render: c => c(App)
})