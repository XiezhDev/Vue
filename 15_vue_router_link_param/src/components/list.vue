<template>
    <div>
        GET方式URL：
        <ul>
            <li v-for="(hero, index) in heros" :key="index">
                {{hero.name}}
                <!--GET方式URL：/detail?xxx=xxx&yyy=yyy ，使用query -->
                <router-link :to="{name: 'detail', query: {id: index}}">查看</router-link>
            </li>
        </ul>
        Restful风格URL：
        <ul>
            <li v-for="(hero, index) in heros" :key="index">
                {{hero.name}}
                <!--Restful风格URL: /detail/xxx ，使用params -->
                <router-link :to="{name: 'detail', params: {id: index}}">查看</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                heros: [
                    {
                        name: '亚索'
                    },
                    {
                        name: '伊泽瑞尔'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>