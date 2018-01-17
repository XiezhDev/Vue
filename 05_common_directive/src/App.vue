<template>
    <div>
        v-text:（元素的innerText，不能在双标签中使用）
        <span v-text="text"></span>
        <hr>
        v-html:（元素的innerHTML，不能包含<!--{{}}-->
        <span v-html="html"></span>
        <hr>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                text: '我是v-text文本',
                html:  `
                    <ul>
                        <li>谢</li>
                        <li>智</li>
                        <li>辉</li>
                        <li>{{text}}</li>
                    </ul>
                `
            }
        }
    }
</script>

<style scoped>

</style>