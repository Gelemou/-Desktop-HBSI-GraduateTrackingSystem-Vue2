<template>
  <div class="photo">
    <!-- 标题和按钮 -->
    <div>
      <titleMore class="titleMore" :hasMore="false">历届毕业照</titleMore>
      <!-- 箭头 -->
      <div class="btns">
        <img
          @click="prevPage()"
          src="../../assets/组 23.png"
          alt="上一页"
        /><img @click="nextPage()" src="../../assets/组 24.png" alt="下一页" />
      </div>
    </div>
    <!-- 图片 -->
    <div class="graduationPhoto">
      <div class="info" v-for="item in classes" :key="item.classId">
        <img :src="getFullPath(item.coverPicture)" alt="" />
        <span>{{ item.className }}</span>
        <div class="depart">
          <a href=""
            ><img src="../../assets/路径 62.png" alt="" />
            <span>{{ item.studentList }}</span></a
          >
        </div>
      </div>
      <!-- <div class="info">
        <img src="../../assets/01(1).png" alt="" /><span
          >软件技术2019-02毕业班</span
        >
        <div class="depart">
          <a href=""
            ><img src="../../assets/路径 62.png" alt="" /><span
              >软件工程系</span
            ></a
          >
        </div>
      </div>
      <div class="info">
        <img src="../../assets/01(2).png" alt="" /><span
          >软件技术2019-02毕业班</span
        >
        <div class="depart">
          <a href=""
            ><img src="../../assets/路径 62.png" alt="" /><span
              >软件工程系</span
            ></a
          >
        </div>
      </div>
      <div class="info">
        <img src="../../assets/01(3).png" alt="" /><span
          >软件技术2019-02毕业班</span
        >
        <div class="depart">
          <a href=""
            ><img src="../../assets/路径 62.png" alt="" /><span
              >软件工程系</span
            ></a
          >
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import titleMore from "./titleMore.vue";
import home from "@/store/home";
import urls from "@/utils/urls";
export default {
  components: { titleMore },
  data() {
    return {
      currentPage: 1, // 当前页
      total: 0,
      classes: [
        {
          classId: 1,
          className: "",
          studentList: "",
        },
        {
          classId: 2,
          className: "",
          studentList: "",
        },
        {
          classId: 3,
          className: "",
          studentList: "",
        },
        {
          classId: 4,
          className: "",
          studentList: "",
        },
      ],
    };
  },
  mounted() {
    this.getClassesData();
  },
  methods: {
    // 上一页
    prevPage() {
      if (this.currentPage == 1) {
        this.$message("已经是第一页了.");
        return;
      }
      this.currentPage--;
      this.getClassesData();
    },
    // 下一页
    nextPage() {
      // 取出最后一页的页数   Math.ceil() 向上取整   例: Math.ceil(2.5) -- 3
      let pages = Math.ceil(this.total / 4);
      if (this.currentPage == pages) {
        this.$message("这是最后一页");
        return;
      }
      this.currentPage++;
      this.getClassesData();
    },
    getClassesData() {
      home
        .getPhotoInfo({ pageNum: this.currentPage, pageSize: 4 })
        .then((res) => {
          if (res.code == 200 && res.success) {
            this.classes = res.result.list;
            this.total = res.result.page.total;
          }
        });
    },
    getFullPath(coverPicture) {
      if (coverPicture) return urls.SERVER_IMG_BASE_API + coverPicture;
      else return "";
    },
  },
};
</script>
<style lang="less" scoped>
.photo {
  height: 600px;
  background-color: rgb(238, 238, 238);
}
.photo > div:first-child {
  width: 80%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}
/* 设置组件 */
.titleMore {
  width: 80%;
  margin: 45px 0;
}
// 设置左右切换按钮
.btns img:last-child {
  margin: 0 20px;
}
.graduationPhoto {
  display: flex;
  overflow: hidden;
  .info:last-child {
    margin-right: 0;
  }
}
.info {
  width: 25%;
  margin-right: 30px;
  display: flex;
  flex-flow: column;
  text-align: left;
  & > img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  // 设置班级字体
  & > span {
    font-size: 1.5rem;
    font-weight: 1000;
    margin: 25px 0 20px;
  }
  // 设置系别的字体
  span:last-child {
    color: rgb(13, 67, 127);
    margin: 0 20px 2px;
    font-weight: 500;
  }
}
</style>
