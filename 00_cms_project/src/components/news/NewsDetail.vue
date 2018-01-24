<template>
    <div class="bottom">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <p>{{newsDetail.title}}</p>
            <div>
                <span>{{newsDetail.click}}次点击</span>
                <span>分类：民生经济</span>
                <span>{{newsDetail.add_time | dateConvert}}</span>
            </div>
            <div class="news-content" v-html="newsDetail.content"></div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsDetail: {}
            }
        },
        created() {
            let id = this.$route.query.id;
            this.$ajax.get('/news/detail/' + id).then(res => {
                console.log(res.data.data);
                this.newsDetail = res.data.data;
            }).catch(err => {
                console.log(err);
            })
        }
    }
</script>

<style scoped>
    .news-title p {
        color: #0187f8;
        font-size: 20px;
        font-weight: bold;
    }

    .new-title span {
        margin-right: 30px;
    }

    .news-title {
        margin-top: 5px;
        border-bottom: 1px solid;
    }

    .news-content {
        padding: 10 5;
    }
</style>