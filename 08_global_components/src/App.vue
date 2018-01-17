<template>
    <div>
        <headerVue></headerVue><!--可以使用驼峰式命名-->
        <body-vue></body-vue><!--更为习惯的写法，使用短横线分隔式-->
        <footer-vue></footer-vue>
    </div>
</template>

<script>


    export default {
        data() {
            return {

            }
        },
        methods: {

        },

    }
</script>

<style>
    .red {
        background: red;
    }

    .green {
        background: green;
    }

    .big {
        font-size: 30px;
    }
</style>