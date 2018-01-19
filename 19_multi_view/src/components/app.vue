<template>
    <div>
        <!--留坑-->
        <router-view class="body" name="header"></router-view>
        <router-view class="body" ></router-view>
        <router-view class="body" name="footer"></router-view>
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