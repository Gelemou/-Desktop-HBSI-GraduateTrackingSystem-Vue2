<template>
  <div>
    <div
      class="noticeContainer"
      v-for="item in activity"
      :key="item.activityId"
    >
      <ul>
        <li>
          <router-link :to="`/activitydetail/${item.activityId}`">
            <div class="box">
              <span>{{ getYear(item.activityDate) }}</span>
              <span
                >{{ getMonth(item.activityDate) + 1 }}-{{
                  getDay(item.activityDate)
                }}</span
              >
            </div>
            <span class="title">{{ item.title }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
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
import home from "@/store/home";
import dayjs from "dayjs";
export default {
  components: { home },
  data() {
    return {
      pageNum: 1,
      pageSize: 4,
      total: 100,

      activity: [{ activityDate: "", title: "", activityId: "" }],
    };
  },
  methods: {
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
    currentChange() {
      home
        .getActivity({ pageNum: this.pageNum, pageSize: this.pageSize })
        .then((res) => {
          if (res.code == 200 && res.success) {
            this.activity = res.result.list;
            this.total = Number.parseInt(res.result.page.total);
          }
        });
    },
  },
  mounted() {
    this.currentChange();
  },
};
</script>
<style lang="less" scoped>
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
.el-pagination {
  margin-top: 40px;
  li,
  span {
    font-size: 28px;
  }
}
</style>
