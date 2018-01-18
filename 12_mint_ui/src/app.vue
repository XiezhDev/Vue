<template>
    <div>
        <mt-header title="multiple button">

            <mt-button icon="back">back</mt-button>
            <mt-button @click="handleClose">close</mt-button>

            <mt-button icon="more" slot="right"></mt-button>

        </mt-header>
        <a @click="handleClose">我帅吗？</a>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
    import {Toast} from 'mint-ui';
    export default {
        data() {
            return {
                text: '父已托我帮你办点事'
            }
        },
        methods: {
            handleClose() {
                Toast('帅呆了');
            }
        }
    }
</script>

<style scoped>

</style>