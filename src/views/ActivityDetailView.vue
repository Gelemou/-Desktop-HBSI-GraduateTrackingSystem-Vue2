<template>
  <div class="noticedetail">
    <div class="breadNav">首页-活动通知-通知详情</div>
    <h3 class="textTitle">{{ detail.title }}</h3>
    <div class="contentContainer">
      <div class="content">
        <div>
          <span class="tip">发布时间:</span>
          <span class="value">{{ detail.pubtime }}</span>
          <span class="tip">浏览次数:</span>
          <span class="value">{{ detail.readtimes }}</span>
        </div>
        <div v-html="detail.content"></div>
      </div>
      <div class="reads">
        <titleMore :has-more="false">推荐阅读</titleMore>
        <ul>
          <li v-for="item in readList" :key="item.activityId">
            <router-link :to="`/activitydetail/${item.activityId}`">
              <span>{{ getTime(item.pubtime) }}</span>
              <h3>{{ item.title }}</h3>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import titleMore from "@/components/home/titleMore.vue";
import home from "@/store/home";
import dayjs from "dayjs";
export default {
  watch: {
    $route(to, from) {
      let id = to.params.id;
      this.getDetail(id);
    },
  },
  components: { titleMore, home },
  data() {
    return {
      detail: {},
      readList: [],
    };
  },
  mounted() {
    let id = this.$route.params.id;
    this.getDetail(id);
    home.getReadList({ pageNum: 1, pageSize: 10 }).then((data) => {
      if (data.success && data.code == 200) {
        this.readList = data.result.list;
      }
    });
  },
  methods: {
    getTime(date) {
      let d = dayjs(date);
      return d.month() + 1 + "-" + d.date();
    },
    getDetail(id) {
      home.getActivityDetail({ activityId: id }).then((data) => {
        if (data.success && data.code == 200) {
          this.detail = data.result.activity;
          console.log(this.detail);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.noticedetail {
  width: 85%;
  margin: 0 auto;
  text-align: start;
}
.breadNav {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  margin: 26px 0;
}
.textTitle {
  padding-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
}
.contentContainer {
  margin-top: 32px;
  display: flex;
  .content {
    flex: 1;
    & > div:first-child {
      margin-bottom: 20px;
    }
    span {
      font-size: 14px;
      font-weight: 600;
    }
    .tip {
      color: rgba(123, 103, 16, 1);
    }
    .value {
      color: rgba(0, 0, 0, 0.5);
      padding-left: 12px;
    }
    span:nth-child(3) {
      margin-left: 30px;
    }
    /deep/img {
      width: 670px;
    }
  }
  .reads {
    width: 353px;
    height: 500px;
    margin-left: 50px;
    ul {
      padding-left: 13px;
      margin-top: 20px;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
    }
    li {
      margin-bottom: 19px;
      position: relative;
      cursor: pointer;
      &::before {
        content: "";
        display: block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgba(192, 192, 192, 1);
        position: absolute;
        left: -16px;
        top: 8px;
      }
      span {
        padding: 0 11px 0 9px;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 2px;
      }
      h3 {
        margin-top: 10px;
        font-size: 16px;
        color: #000;
        font-weight: normal;
        overflow-wrap: break-word;
        display: -webkit-box;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
