<template>
    <div class="tmpl">
        <nav-bar title="图文详情"></nav-bar>
        <div class="photo-title">
            <p>{{photo.title}}</p>
            <span>发起日期：{{photo.add_time}}</span>
            <span>{{photo.click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(image, index) in images" :key="index"
                class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <!--<img :src="photo.img_url"/>-->
                <img class="preview-img" :src="image.img" height="100" @click="$preview.open(index, images)">
            </li>
        </ul>
        <div class="photo-desc">
            <p v-html="photo.content"></p>
        </div>


        <div class="photo-bottom">
            <ul>
                <li class="photo-commont">
                    <div>
                        <span>提交评论</span>
                        <span><a>返回</a></span>
                    </div>
                </li>
                <li class="txt-comment">
                    <textarea v-model="comment"></textarea>
                </li>
                <li>
                    <button @click="sendComment">发表评论</button>
                </li>
                <li class="photo-comment">
                    <div>
                        <span>评论列表</span>
                        <span>44条评论</span>
                    </div>
                </li>
            </ul>
            <ul v-for="comment in comments" class="comment-list">
                <li>{{comment.user_name}}: {{comment.content}} {{comment.add_time|dateConvert}}</li>
            </ul>
            <button class="loadmore-btn" @click="loadMore">点击加载更多</button>
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';

    export default {
        data() {
            return {
                photo: {},
                images: [],
                comments: [],//加载评论
                pid: this.$route.params.id,
                page: 1,
                comment: '',// 发表评论
            }
        },
        created() {
            //let id = this.$route.params.id;

            this.$ajax.get('/photo/detail/' + this.pid).then(res => {
                this.photo = res.data.data;
            })

            this.$ajax('/image/list').then(res => {
                this.images = res.data.data;

                // 为每个图片对象添加w和h属性，作为预览图的宽和高
                this.images.forEach((image) => {
                    image.w = 600;
                    image.h = 400;
                })
            })

            this.loadComments();
        },
        methods: {
            loadComments() {
                this.$ajax.get('/comment/list/' + this.pid + "/1").then(res => {
                    this.comments = res.data.data;
                });
            },
            // 点击加载更多
            loadMore() {
                this.$ajax.get('/comment/list/' + this.pid + "/" + (++this.page)).then(res => {
                    if (res.data.data.length > 0) {
                        this.comments = this.comments.concat(res.data.data);
                    } else {
                        Toast('亲！我也是有底线的！');
                    }

                })
            },
            sendComment() {
                this.$ajax.post('/comment/save/' + this.pid, 'content=' + this.comment).then(res => {
                    this.loadComments();
                    this.comment = '';
                    Toast('发表成功！');
                }).catch(err => {
                    console.log(err);
                })
            }
        }
    }
</script>

<style scoped>

    /*图文详情样式*/
    li {
        list-style-type: none;
    }

    ul {
        magin: 0;
        padding: 0;
    }

    .photo-title {
        overflow: hidden;
    }

    .photo-title, .photo-desc {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding-bottom: 5px;
        margin-bottom: 5px;
        padding-left: 5px;
    }

    .photo-title p {
        color: #13c2f7;
        font-size: 20px;
        font-weight: bold;
    }

    .photo-title span {
        magin-right: 20px;
    }

    .mui-table-view .mui-grid-view .mui-grid-9 {
        background-color: white;
        border: 0;
    }

    .mui-table-view .mui.grid-view .mui-grid-9 li {
        border: 0;
    }

    .photo-desc p {
        font-size: 18px;
    }

    .mui-table-view-cell .mui-media .mui-col-xs-4 .mui-col-sm-3 {
        padding: 2 2;
    }

    /*评论样式*/
    .photo-comment > div span:nth-child(1) {
        float: left;
        font-weight: bold;
        margin-left: 5px;
    }

    .photo-comment > div span:nth-child(2) {
        float: right;
    }

    .photo-comment {
        height: 30px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);;
        line-height: 30px;
        margin-bottom: 5px;;
    }

    .txt-comment {
        padding: 5 5;
    }

    .txt-comment textarea {
        margin-bottom: 5px;
    }

    .comment-list li {
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);;
        padding-bottom: 5px;
        margin-bottom: 5px;
        padding-left: 5px;
    }

    li {
        list-style: none;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    .loadmore-btn {
        margin-bottom: 50px;
    }
</style>