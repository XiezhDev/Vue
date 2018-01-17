import Vue from 'vue';
import App from './App.vue';

// 导入组件
import headerVue from './components/header.vue';
import bodyVue from './components/body.vue';
import footerVue from './components/footer.vue';
// 注册全局组件，其他地方就不需要声明就可以直接使用了
Vue.component('headerVue', headerVue);
Vue.component('bodyVue', bodyVue);
Vue.component('footerVue', footerVue);


new Vue({
    el: '#app',
    render: function (c) {
        return c(App);
    }
    //render: c => c(App)
    // 参数是一个的时候，可以省略小括号
    // 函数体只有一行且是返回值是，可以省略大括号
})