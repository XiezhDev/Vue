<template>
    <div>
        <button @click="changeVue">改变data</button>
        <button @click="changePerson">改变persons</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                data: 'cba',
                persons: [
                    {name: 'shenhua'},
                    {name: 'huige'}
                ]
            }
        },
        methods: {
            changeVue() {
                this.data = 'abc';
            },
            changePerson() {
                this.persons[0].name = 'xiezh';
            }
        },
        watch: {
            data: function (newValue, oldValue) {
                alert('data值由' + oldValue + '变为' + newValue);
            },
            // 监视复杂类型，需要深度监视
            persons: {
                handler: function (val, oldVal) {
                    alert('person改变了');
                },
                deep: true
            }
        }
    }
</script>

<style scoped>
</style>