<template>
  <div class="content">
    <topContent>
      <slot>走进校园</slot>
    </topContent>
    <div class="container">
      <header><h2>通知公告</h2></header>
      <div class="noticeContainer" v-for="item in news" :key="item.newsId">
        <ul>
          <li>
            <router-link :to="`/noticedetail/${item.newsId}`">
              <div class="box">
                <span>{{ getYear(item.createTime) }}</span>
                <span
                  >{{ getMonth(item.createTime) + 1 }}-{{
                    getDay(item.createTime)
                  }}</span
                >
              </div>
              <span class="title">{{ item.title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <el-pagination
      class="page"
      prev-text="上一页"
      next-text="下一页"
      background
      @current-change="currentChange"
      :page-size="pageSize"
      :current-page.sync="pageNum"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </div>
</template>
<script>
import topContent from "@/components/home/topContent.vue";
import home from "@/store/home";
import dayjs from "dayjs";
export default {
  data() {
    return {
      news: [],
      pageNum: 1,
      pageSize: 2,
      total: 20,
    };
  },
  components: { topContent, home },
  mounted() {
    this.currentChange();
  },
  methods: {
    currentChange() {
      home
        .getNoticeOrNews({
          pageNum: this.pageNum,
          pageSize: this.pageSize,
          newsType: 2,
        })
        .then((data) => {
          if (data.success && data.code == 200) {
            this.news = data.result.list;
            this.total = Number.parseInt(data.result.page.total);
          }
        });
    },
    getYear(date) {
      let d = dayjs(date);
      return d.year();
    },
    getMonth(date) {
      let d = dayjs(date);
      return d.month();
    },
    getDay(date) {
      let d = dayjs(date);
      return d.date();
    },
  },
};
</script>
<style lang="less" scoped>
.content {
  background: #f3f3f3;
}
.container {
  margin-top: 100px;
  margin-bottom: 40px;
  color: #000;
}
header {
  font-size: 36px;
}
main {
  width: 80%;
  margin: 0 auto;
}
.newsLi {
  margin-bottom: 40px;
}
a > h3,
a > span {
  color: #000 !important;
}
.noticeContainer {
  width: 80%;
  margin: 0 auto;
  li {
    height: 77px;
    background-color: #fff;
    margin-top: 55px;
    a {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: end;
      .title {
        align-self: center;
        color: black;
        font-size: 18px;
        font-weight: 600;
      }
    }
    &:first-child {
      margin-top: 99px;
    }
  }
}
.box {
  width: 94px;
  height: 94px;
  margin: 0 41px 0 0;
  background: #053b84;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  position: relative;
  top: -12px;
  right: -12px;
  span {
    font-weight: 600;
    margin-right: 6px;
  }
  span:first-child {
    font-size: 18px;
    margin-bottom: 20px;
  }
  span:nth-child(2) {
    font-size: 30px;
  }
}
</style>
