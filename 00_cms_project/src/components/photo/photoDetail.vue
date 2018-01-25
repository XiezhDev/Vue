<template>
    <div class="tmpl">
        <nav-bar title="图文详情"></nav-bar>
        <div class="photo-title">
            <p>{{photo.title}}</p>
            <span>发起日期：{{photo.add_time}}</span>
            <span>{{click}}次浏览</span>
            <span>分类：民生经济</span>
        </div>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <img :src="photo.img_url"/>
            </li>
        </ul>
        <div class="photo-desc">
            <p v-html="photo.content"></p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                photo: {}
            }
        },
        created() {
            let id = this.$route.params.id;

            this.$ajax.get('/photo/detail/' + id).then(res => {
                this.photo = res.data.data;
            })
        }
    }
</script>

<style scoped>
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
</style>