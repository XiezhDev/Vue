import Vue from 'vue';
import App from './App.vue';

new Vue({
    el: '#app',
    render: function (c) {
        return c(App);
    }
    //render: c => c(App)
    // 参数是一个的时候，可以省略小括号
    // 函数体只有一行且是返回值是，可以省略大括号
})