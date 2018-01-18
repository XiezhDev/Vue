<template>
    <div>
        <div class="header">
            头部
            <!--使用命名路由，这样改变路由的name，所有link的锚点值都跟着变，不用一个个改-->
            <router-link :to="{name: 'music'}">音乐1</router-link>
            <router-link :to="{name: 'music'}">音乐2</router-link>
            <router-link :to="{name: 'music'}">音乐3</router-link>
            <!--跟路径使用，一旦改变锚点值，就要修改n+1处-->
            <router-link to="/movie">电影1</router-link>
            <router-link to="/movie">电影2</router-link>
            <router-link to="/movie">电影3</router-link>
        </div>
        <!--留坑-->
        <router-view class="body"></router-view>
        <div class="footer">
            底部
        </div>
    </div>
</template>

<script>
    export default {
        data() {

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