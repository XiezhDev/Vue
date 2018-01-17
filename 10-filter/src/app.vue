<template>
    <div>
        请输入要反转的内容：
        <input type="text" v-model="text"/>
        <br>
        反转结果为：{{text | reverseFilter}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                text: '父已托我帮你办点事'
            }
        },
        filters: {
            reverseFilter: function (value) {// value就是text
                // 反转字符串
                return value.split('').reverse().join('');
            }
        }
    }
</script>

<style scoped>

</style>