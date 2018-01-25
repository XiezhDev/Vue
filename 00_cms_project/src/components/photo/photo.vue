<template>
    <div class="tmpl">
        <nav-bar title="图文分享"></nav-bar>
        <div class="photo-header">
            <ul>
                <li v-for="category in categories">
                    <a @click="loadPhotos(category.id)">{{category.title}}</a>
                </li>
            </ul>
        </div>
        <div class="photo-list">
            <ul>
                <li v-for="photo in photos">
                    <router-link :to="{ name: 'photo.detail', params: { id: photo.id } }">
                        <!--<img :src="photo.img_url">-->
                        <!-- 使用懒加载，把图片地址传给v-lazy -->
                        <img v-lazy="photo.img_url">
                        <p>
                            <span v-text="photo.title"></span>
                            <br>
                            <span v-text="photo.zhaiyao"></span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: [],
                photos: []
            }
        },
        created() {
            this.$ajax.get('/imgcategory/list').then(res => {
                this.categories = res.data.data;
                // 添加“全部”
                this.categories.unshift({
                    id: 0,
                    title: '全部'
                })
            });

            this.loadPhotos(0);
        },
        methods: {
            loadPhotos(categoryId) {
                this.$ajax.get('/photo/list/' + categoryId).then(res => {
                    this.photos = res.data.data;
                })
            }
        }
    }
</script>

<style scoped>
    .photo-header li {
        list-style: none;
        display: inline-block;
        margin-left: 10px;
        height: 30px;
    }

    .photo-header ul {
        /* 强制不换行*/
        white-space: nowrap;
        overflow-x: auto;
        padding-left: 0px;
        margin: 5;
    }

    .photo-list li {
        list-style: none;
        position: relative;
    }

    .photo-list li img {
        width: 100%;
        height: 230px;
        vertical-align: top;
    }

    .photo-list ul {
        padding-left: 0px;
        margin: 0;
    }

    .photo-list p {
        position: absolute;
        bottom: 0px;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        margin-bottom: 0px;
    }

    .photo-list p span:nth-child(1) {
        font-weight: bold;
        font-size: 16px;
    }

    image[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>