<template>
    <div>
        欢迎访问首页
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>