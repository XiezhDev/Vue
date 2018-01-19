<template>
    <div>
        <button @click="goToMovie">电影</button>
        <button @click="goBack">上一页</button>
        <button @click="next">下一页</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goToMovie() {
                this.$router.push({
                    name: 'movie'
                })
            },
            goBack() {
                this.$router.go(-1);
            },
            next() {
                this.$router.go(1);
            }
        }
    }
</script>

<style scoped>

</style>