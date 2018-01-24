<template>
    <div class="bottom">
        <ul class="mui-table-view">
            <li v-for="news in newsList" class="mui-table-view-cell mui-media">
                <a>
                    <img class="mui-media-object mui-pull-left" :src="news.img_url">
                    <div class="mui-media-body">
                       <span v-text="news.title"></span>
                        <div class="new-desc">
                            <p class="click">{{news.click}}</p>
                            <p class="time">{{news.add_time}}</p>
                        </div>
                    </div>
                </a>
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