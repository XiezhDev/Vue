<template>
    <div>
        请输入要反转的内容：
        <input type="text" v-model="text"/>
        <br>
        反转结果为：{{text | reverseFilter}}
        <hr>
        <!--子组件会使用全局的过滤器-->
        <sub-vue></sub-vue>
    </div>
</template>

<script>
    import SubVue from './sub.vue';

    export default {
        data(){
            return {
                text: '父已托我帮你办点事'
            }
        },
        filters: {
            reverseFilter: function (value) {// value就是text
                // 反转字符串:拆分为数组，反转数组，转化为字符串
                return value.split('').reverse().join('');
            }
        },
        components: {
            // 无法解析父组件app中的过滤器
            subVue: SubVue
        }
    }
</script>

<style scoped>

</style>