<template>
    <div>
        <!--宝宝到商店，发现酱油卖完了，就给爸爸打电话-->
        <button @click="callDaddy">打电话给爸爸</button>
    </div>
</template>

<script>
    import connector from '../connector';
    export default {
        data() {
            return {}
        },
        methods: {
            callDaddy() {
                connector.$emit('phone', '酱油卖完了');
            }
        }
    }
</script>

<style scoped>
    div {
        height: 100px;
        background: hotpink;
    }
</style>