import Vue from 'vue';
import App from './app.vue';

// 注册全局过滤器
// 如果全局过滤器与局部过滤器同名，那么局部过滤器优先
// 全局：范围大，权利小（子组件不能使用父组件的过滤器，只能使用全局过滤器）
// 局部：范围小，权利大（过滤器同名时局部过滤器优先）
Vue.filter('reverseFilter', function (value) {
    return '我是全局过滤器';
})

new Vue({
    el: '#app',
    render: c => c(App)
})