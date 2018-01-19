<template>
    <div>
        <button @click="goBack">上一页</button>
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