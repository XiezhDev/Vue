<template>
    <div>
        <mt-header title="谢智辉个人信息管理系统"></mt-header>
        <router-view></router-view>

        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" :to="{name: 'home'}">
                <span class="mui-icon icon-shouye"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name: 'member'}">
                <span class="mui-icon icon-huiyuan"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name: 'shopcart'}">
                <span class="mui-icon icon-gouwuche"><span class="mui-badge">9</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" :to="{name: 'search'}">
                <span class="mui-icon icon-chazhao"></span>
                <span class="mui-tab-label">查找</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>