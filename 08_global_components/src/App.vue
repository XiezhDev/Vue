<template>
    <div>
        <headerVue message='big'></headerVue><!--传常量-->
        <body-vue :message='message'></body-vue><!--传变量-->
        <footer-vue></footer-vue>
    </div>
</template>

<script>


    export default {
        data() {
            return {
                message: 'small'
            }
        },
        methods: {

        },

    }
</script>

<style>

</style>