<template>
    <div>
        <h1>{{text}}</h1>
        <br>
        {{text}}
        <input type="text" v-model="text"/>
        <hr>
        <ul>
            <li v-for="person in persons">
                {{person.name}}
            </li>
        </ul>
    </div>
    <!-- 2.x以后，只能有一个跟节点 -->
</template>

<script>
    export default {
        data() {
            return {
                text: 'Hello Vue',
                persons: [
                    {
                        name: '谢智辉',
                    },
                    {
                        name: '辉哥'
                    }
                ]
            }
        }
    }
</script>

<style>

</style>