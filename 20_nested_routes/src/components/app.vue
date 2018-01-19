<template>
    <div>

        <header-vue></header-vue>

        <router-view></router-view><!--留坑-->

        <footer-vue></footer-vue>
    </div>
</template>

<script>
    export default {
        data() {
            return {

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