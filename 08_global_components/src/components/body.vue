<template>
    <div>
        Body {{message}}
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        props: ['message']
    }
</script>

<style scoped>
    div{
        height: 100px;
        background: skyblue;
    }
</style>