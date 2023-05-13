<template>
  <div>
    <titleMore class="titlemore" more-url="/newsCenter">新闻中心</titleMore>
    <!-- 新闻中心 -->
    <div class="news">
      <div class="card" v-for="item in news" :key="item.newsId">
        <img :src="getFullPath(item.image1)" alt="" />
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import titleMore from "./titleMore.vue";
import home from "@/store/home";
import urls from "@/utils/urls";
export default {
  components: { titleMore },
  props: {
    moreUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      news: [
        {
          newsId: 1,
          title: "全国大学英语四、六级考试(笔试)的通知",
        },
        {
          newsId: 2,
          title: "全国大学英语四、六级考试(笔试)的通知",
        },
        {
          newsId: 3,
          title: "全国大学英语四、六级考试(笔试)的通知",
        },
        {
          newsId: 4,
          title: "全国大学英语四、六级考试(笔试)的通知",
        },
      ],
    };
  },
  mounted() {
    home.getNews({ pageNum: 1, pageSize: 4, newsType: 2 }).then((res) => {
      if (res.code == 200 && res.success) {
        this.news = res.result.list;
      }
    });
  },
  methods: {
    getFullPath(imageurl) {
      if (imageurl) return urls.SERVER_IMG_BASE_API + imageurl;
      else return "";
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
