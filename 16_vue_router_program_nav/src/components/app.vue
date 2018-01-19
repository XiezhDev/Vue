<template>
    <div>
        <div class="header">
            头部
        </div>
        <!--留坑-->
        <router-view class="body"></router-view>
        <button @click="string">字符串</button>
        <button @click="object">对象</button>
        <button @click="query">query传参</button>
        <button @click="params">params传参</button>
        <div class="footer">
            底部
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            string() {
                // 1、字符串
                this.$router.push('music');
                //this.$router.push('/music');
            },
            object() {
                // 2、对象
                this.$router.push({path: 'music'})
            },
            query() {
                // 3、命名的路由（GET），使用query
                this.$router.push({ name: 'music', query: {id: 1, name: 2}});
            },
            params() {
                // 4、命名的路由（Rest），使用params
                const id = '123';
                // 有效，注意路由声明为'/movie/:id'(见main.js)
                this.$router.push({ name: 'movie', params: { id }});// -> /music/123

                // 有效：手写完整的path（注意用反引号）
                //this.$router.push({ path: `/music/${id}`}) // -> /music/123

                // 无效
                //this.$router.push({ path: '/music', params: { id }})
            }
        }
    }
</script>

<style scoped>
    .header {
        height: 100px;
        background: yellowgreen;
    }

    .body {
        height: 100px;
        background: skyblue;
    }

    .footer {
        height: 100px;
        background: hotpink;
    }
</style>