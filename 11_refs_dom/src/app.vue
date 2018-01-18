<template>
    <div>
        <div ref="myDiv"></div>
        {{text}}
        <hr>
        <sub-vue ref="sub"></sub-vue>
    </div>
</template>
<script>
    import SubVue from './sub.vue';
    export default {
        data() {
            return {
                text: '父已托我帮你办点事'
            }
        },
        components: {
            // 无法解析父组件app中的过滤器
            subVue: SubVue
        },
        //created指组件创建后:数据已经完成初始化，但DOM未生成
        created() {
            console.log('created:', this.$refs.myDiv);// 获取不到
        },
        //mounted指数据转载到DOM上后：数据已经就绪，将数据渲染到DOM上，DOM已经生成
        mounted() {
            // 1、获取原生DOM
            console.log('mounted:', this.$refs.myDiv);
            // $refs可以用来操作DOM的各种属性，包括class、数据等
            this.$refs.myDiv.innerText = 'mounted';

            // 双向数据流只能用来操作数据
            this.text = 'mounted';

            // 2、获取Vue对象挂载的DOM
            console.log(this.$refs.sub.$el);
            this.$refs.sub.$el.innerText = '哈哈';
        }
    }
</script>

<style scoped>

</style>