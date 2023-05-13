<template>
  <div>
    <topContent>校友风采</topContent>
    <!-- 照片 -->
    <div class="picContent">
      <div class="pic" v-for="item in friends" :key="item.graduateId">
        <img :src="getImage(item.image1)" alt="" /><span
          >{{ item.post }}——{{ item.name }}</span
        >
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
      pageSize: 3,
      friends: [
        {
          graduateId: 1,
          name: "11",
          post: "222",
          image1: "",
        },
      ],
    };
  },
  mounted() {
    this.handleCurrentChange();
  },
  methods: {
    getImage(url) {
      if (url) return urls.SERVER_IMG_BASE_API + url;
      else {
        return "";
      }
    },
    handleCurrentChange() {
      home
        .getFriends({ pageNum: this.pageNum, pageSize: this.pageSize })
        .then((data) => {
          if (data.code == 200 && data.success) {
            this.friends = data.result.list;
            this.total = Number.parseInt(data.result.page.total);
          }
        });
    },
  },
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.picContent {
  width: 80%;
  display: flex;
  margin: 89px auto;
  flex-wrap: wrap;
  .pic {
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 0 8px;
    margin-bottom: 47px;
    box-sizing: border-box;
    & > span {
      font-size: 0.5rem;
      border: 0.5px rgb(231, 231, 231) solid;
      text-align: left;
      line-height: 45px;
      padding-left: 15px;
    }
    & > img {
      width: 100%;
      height: 220px;
    }
  }
}
</style>
