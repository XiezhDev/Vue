<template>
    <div>
        单价：<input type="text" name="" v-model="price"/>
        件数：<input type="text" name="" v-model="num"/>
        折扣：<input type="text" name="" v-model="rate"/>=
        {{sum.name}}/{{sum.price}}
    </div>
</template>
<script>
    export default {
        data() {
            return {
                price: 0,
                num: 0,
                rate: 0
            }
        },
        methods: {
        },
        computed: {
            sum(){
                // computed可以监视多个this相关属性值的改变
                //return this.price * this.num * (this.rate/10);

                return {
                    name: '古龙水',
                    price: this.price * this.num * (this.rate/10)
                }
            }
        }
    }
</script>

<style scoped>
</style>