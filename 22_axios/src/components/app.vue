<template>
    <div>
        {{data}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: []
            }
        },
        created() {
            console.log(this.$axios);
            this.$axios.get('http://120.79.146.147/api/game/list').then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                console.log('结束');
            })
        }
    }
</script>

<style scoped>
</style>