<template>
  <div>
    <topContent>新闻中心</topContent>
    <!-- 照片 -->
    <div class="news">
      <div class="card" v-for="item in news" :key="item.newsId">
        <img :src="getFullPath(item.image1)" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </div>
    <el-pagination
      prev-text="上一页"
      next-text="下一页"
      background
      @current-change="handleCurrentChange"
      :current-page.sync="pageNum"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import topContent from "@/components/home/topContent.vue";
import home from "@/store/home";
import urls from "@/utils/urls";
export default {
  components: {
    topContent,
  },
  data() {
    return {
      total: 1,
      pageNum: 1,
      pageSize: 4,
      news: [],
    };
  },
  mounted() {
    this.handleCurrentChange();
  },
  methods: {
    getFullPath(imageurl) {
      if (imageurl) return urls.SERVER_IMG_BASE_API + imageurl;
      else return "";
    },
    handleCurrentChange() {
      home
        .getNews({
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          newsType: 2,
        })
        .then((data) => {
          if (data.code == 200 && data.success) {
            this.news = data.result.list;
            this.total = Number.parseInt(data.result.page.total);
          }
        });
    },
  },
};
</script>
<style scoped>
.titlemore {
  width: 80%;
  margin: 39px auto;
}
.news {
  display: flex;
  margin: 0 auto 50px;
  width: 80%;
  margin-top: 100px;
}
.card {
  width: 25%;
  border-right: 14px solid transparent;
  position: relative;
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: none;
}
/* 去掉最右边图片的右内衬 */
.news div:last-child {
  border-right: 0;
}
.card span {
  width: 100%;
  height: 44px;
  position: absolute;
  line-height: 44px;
  font-size: 14px;
  font-weight: bold;
  left: 0;
  bottom: 0;
  padding-left: 14px;
  margin: 5px 0;
  background: rgba(0, 119, 255, 0.4);
  box-sizing: border-box;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
