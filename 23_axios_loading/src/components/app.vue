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
            //console.log(this.$axios);
            this.$axios.get('http://localhost:8080/test/list').then(res => {
                console.log('成功');
                console.log(res.data);
                this.data = res.data;
            }).catch(err => {
                console.log('失败');
            }).finally(() => {
                console.log('结束');
            })
        }
    }
</script>

<style scoped>
</style>