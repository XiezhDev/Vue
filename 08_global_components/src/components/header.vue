<template>
    <div>
        header {{message}}<!--DOM中获取props-->
        <button @click="show">js获取props</button><!--js中获取props-->
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props: ['message'],
        methods: {
            show(){
                alert(this.message);
            }
        }
    }
</script>

<style scoped>
    div{
        height: 100px;
        background: yellowgreen;
    }
</style>