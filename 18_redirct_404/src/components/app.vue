<template>
    <div>
        <div class="header">
            头部
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
            return {}
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