<template>
    <div class="bottom">
        <nav-bar title="新闻列表"></nav-bar>
        <ul class="mui-table-view">
            <li v-for="news in newsList" class="mui-table-view-cell mui-media">
                <router-link :to="{name: 'news.detail', query: {id: news.id}}">
                    <img class="mui-media-object mui-pull-left" :src="news.img_url">
                    <div class="mui-media-body">
                       <span v-text="news.title"></span>
                        <div class="new-desc">
                            <p class="click">{{news.click}}</p>
                            <p class="time">{{news.add_time | dateConvert}}</p>
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newsList: []
            }
        },
        created() {
            this.$ajax.get('/news/list').then(res => {
                //console.log();
                this.newsList = res.data.data;
            })
        }
    }
</script>

<style scoped>
    .mui-media-body p {
        color: #0bb0f5;
    }

    .click {
        float: left;
    }

    .time {
        float: right;
    }
</style>