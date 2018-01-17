<template>
    <div>
        <childVue></childVue>
        <!--爸爸不放心宝宝，一直盯着电话-->
        <button @click="listen">爸爸听电话</button>
    </div>
</template>

<script>
    import connector from './connector';

    export default {
        data() {
            return {
            }
        },
        methods: {
            listen(){
                connector.$on('phone', function (msg) {
                    alert(msg);
                })
            }
        },

    }
</script>

<style>

</style>