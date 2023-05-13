<template>
  <div class="notice_active">
    <div>
      <titleMore :more-url="moreUrl">
        <slot name="title">标题</slot>
      </titleMore>
      <ul>
        <li v-for="item in dataInfo" :key="item.newsId">
          <!-- <router-link :to="`/activitydetail/${item.newsId}`">{{ -->
          <router-link :to="`${targetUrl}/${item.newsId}`">
            <span class="noticeTitle">{{ item.title }}</span></router-link
          ><span>{{ item.createTime }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import titleMore from "./titleMore.vue";
import home from "@/store/home";
export default {
  props: {
    dataInfo: {
      type: Array,
      default: [],
    },
    targetUrl: {
      type: String,
      default: "",
    },
    moreUrl: {
      type: String,
      default: "",
    },
  },
  components: { titleMore, home },
  data() {
    return {
      news: [
        {
          id: 1,
          title: "1",
          createTime: "",
        },
        {
          id: 2,
          title: "1",
          createTime: "",
        },
        {
          id: 3,
          title: "1",
          createTime: "",
        },
      ],
    };
  },
  mounted() {
    // home.getActivity({ pageNum: 1, pageSize: 4, newsType: 2 }).then((res) => {
    //   if (res.code == 200 && res.success) {
    //     this.news = res.result.list;
    //   }
    // });
  },
};
</script>
<style lang="less" scoped>
* {
  font-family: Arial, Avenir, Helvetica, sans-serif;
}
.notice_active {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto 50px;
}
.notice_active > div {
  width: 100%;
}
.notice_active > div:first-child {
  margin-right: 18px;
}
.notice_active > div > ul {
  li {
    display: flex;
    height: 50px;
    line-height: 50px;
    font-size: 0.5rem;
    justify-content: space-between;
    // 小圆点
    a::before {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgb(13, 67, 127);
      content: "";
    }
    a {
      height: 50px;
      display: flex;
      align-items: center;
      text-indent: 10px;
      margin-left: 20px;
    }
    span:nth-child(2) {
      color: rgb(127, 127, 127);
    }
  }
}
.noticeTitle {
  width: 350px;
  height: 50px;
  color: #000;
  overflow: hidden;
}
</style>
