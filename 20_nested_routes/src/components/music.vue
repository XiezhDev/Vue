<template>
    <div>
        辉哥云音乐<br>
        <router-link :to="{name: 'guochan'}">国产音乐</router-link>
        <router-link :to="{name: 'oumei'}">欧美音乐</router-link>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "music"
    }
</script>

<style scoped>

</style>