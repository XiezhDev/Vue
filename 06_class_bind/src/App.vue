<template>
    <div>
        <div v-bind:class="isRed ? 'red' : 'green'">单个class</div>
        <hr>
        <!-- v-bind可以缩写为: -->
        <div :class="{'red' : true, 'big': true}">多个class</div>
        <hr>
        <ul>
            <!-- Obj[key]遍历对象属性 -->
            <li v-for="student in students" :class="{'A': 'red', 'B': 'green'}[student.score]">
                {{student.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isRed: true,
                students: [
                    {name: '谢智辉', score: 'A'},
                    {name: '辉智谢', score: 'B'}
                ]
            }
        }
    }
</script>

<style>
    .red {
        background: red;
    }

    .green {
        background: green;
    }

    .big {
        font-size: 30px;
    }
</style>