import Vue from 'vue';

import App from './components/app.vue';
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
    el: '#app',
    render: c => c(App)
})