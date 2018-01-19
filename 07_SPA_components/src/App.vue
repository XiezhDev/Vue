<template>
    <div>
        <headerVue></headerVue><!--可以使用驼峰式命名-->
        <body-vue></body-vue><!--更为习惯的写法，使用短横线分隔式-->
        <footer-vue></footer-vue>
    </div>
</template>

<script>
    // 导入组件
    import headerVue from './components/header.vue';
    import bodyVue from './components/body.vue';
    import footerVue from './components/footer.vue';

    export default {
        data() {
            return {

            }
        },
        methods: {

        },
        // 声明子组件
        components: {
            headerVue: headerVue,
            bodyVue,// es6简写
            footerVue
        }
    }
</script>

<style>

</style>