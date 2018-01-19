<template>
    <div>
        {{data}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: []
            }
        },
        created() {
            //console.log(this.$http);
            this.$http.post('http://120.79.146.147/api/game/list',{ emulateJson: true })
                .then(
                    res => {
                        console.log(res);
                        this.data = res.body.message.data;
                    },
                    err => {
                        console.log(err)
                    }
                )
        }
    }
</script>

<style scoped>
    .header {
        height: 100px;
        background: yellowgreen;
    }

    .body {
        height: 100px;
        background: skyblue;
    }

    .footer {
        height: 100px;
        background: hotpink;
    }
</style>