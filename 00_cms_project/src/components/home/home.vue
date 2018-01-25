<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(image, index) in images" :key="index">
                <a :href="image.url">
                    <img :src="image.img"/>
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name: 'news.list'}">
                        <span class="mui-icon mui-icon-news"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link :to="{name: 'photo.share'}">
                        <span class="mui-icon mui-icon-share"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">图文分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-show"></span>
                    <div class="mui-media-body">商品展示</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-leave"></span>
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">搜索资讯</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-phone"></span>
                    <div class="mui-media-body">联系我们</div>
                </a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: []
            }
        },
        created() {
            this.$ajax.get('/image/list').then(res => {
                console.log(res.data.data);
                this.images = res.data.data;
            })
        }
    }
</script>

<style scoped>
    .mint-swipe {
        height: 200px;
    }

    .mint-swipe img {
        height: 100%;
    }

    /* 去掉mui默认图标 */
    .mui-icon-news:before,
    .mui-icon-share:before,
    .mui-icon-show:before,
    .mui-icon-leave:before,
    .mui-icon-search:before,
    .mui-icon-phone:before {
        content: ''
    }

    /* 设置背景图标 */
    .mui-icon-news {
        background: url('../../static/icon/news.png');

    }

    .mui-icon-share {
        background: url('../../static/icon/share.png');
    }

    .mui-icon-show {
        background: url('../../static/icon/show.png');
    }

    .mui-icon-leave {
        background: url('../../static/icon/leave.png');
    }

    .mui-icon-search {
        background: url('../../static/icon/search.png');
    }

    .mui-icon-phone {
        background: url('../../static/icon/contact.png');
    }

    .mui-icon {
        background-repeat: round;
        height: 60px;
        width: 60px;
    }
</style>