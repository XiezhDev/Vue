<template>
    <div>
        详情
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        created() {// 操作数据，用created不用mounted
            /**
             * 获取路由参数
             *      vue-router挂载两个对象的属性：
             *          1、$route(信息数据）
             *          2、$router(功能函数）
             */
            // GET方式使用 query 获取请求参数
            console.log(this.$route.query);

            // Restful 使用 params 从获取请求参数
            console.log(this.$route.params);
        }
    }
</script>

<style scoped>

</style>