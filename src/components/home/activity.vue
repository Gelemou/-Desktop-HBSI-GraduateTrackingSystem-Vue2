<template>
  <div class="all">
    <div class="nav">
      <div class="navbar">
        <div class="navbar-top">
          <div>
            <div><span>校友活动</span></div>
            <div><span>精彩瞬间</span></div>
          </div>
          <div><img src="../../assets/组 24.png" alt="" /></div>
        </div>
        <div class="navbar-content">
          <ul>
            <li>
              <div>
                <span><router-link to="/show">校友风采</router-link></span>
                <i></i>
              </div>
            </li>
            <li>
              <div>
                <span><router-link to="/memory">班级记忆</router-link></span>
                <i></i>
              </div>
            </li>
            <li>
              <div>
                <span><router-link to="/active">校友活动</router-link></span>
                <i></i>
              </div>
            </li>
            <li>
              <div>
                <span><a href="http://www.hbsi.edu.cn">学校官网</a></span>
                <i></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="btn">
        <img src="../../assets/组 30.png" alt="" @click="prevPage()" />
        <img src="../../assets/组 31.png" alt="" @click="nextPage()" />
      </div>
    </div>
    <div class="container">
      <div class="row1">
        <div class="col" v-for="item in row1" :key="item.activityId">
          <img :src="getServerImg(item.coverPicture)" alt="" />
        </div>
      </div>
      <div class="row2">
        <div class="col" v-for="item in row2" :key="item.activityId">
          <img :src="getServerImg(item.coverPicture)" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import home from "@/store/home";
import urls from "@/utils/urls";
export default {
  data() {
    return {
      activityPic: "",
      coverPicture: "",
      total: 0,
      currentPage: 1, // 当前页数
      row1: [],
      row2: [],
    };
  },
  mounted() {
    this.getGlimpse();
  },
  methods: {
    // 上一页
    prevPage() {
      if (this.currentPage == 1) {
        this.$message("这是第一页");
        return;
      }
      this.currentPage--;
      console.log(this.currentPage);
      this.getGlimpse();
    },
    // 下一页
    nextPage() {
      let pages = Math.ceil(this.total / 10);
      if (this.currentPage == pages) {
        this.$message("这是最后一页");
        return;
      }
      this.currentPage++;
      this.getGlimpse();
    },
    getGlimpse() {
      home
        .getActivitiesGlimpse({ pageNum: this.currentPage, pageSize: 9 })
        .then((data) => {
          if (data.success && data.code == 200) {
            this.row2 = data.result.list;
            this.row1 = this.row2.splice(0, 5);
            this.total = data.result.page.total;
          }
        });
    },
    getServerImg(url) {
      if (url) {
        return urls.SERVER_IMG_BASE_API + url;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.all {
  height: 877px;
  margin-top: 132px;
  background: linear-gradient(#1a70d1, #003b7d);
}
.nav {
  height: 100px;
  position: relative;
  .btn img {
    padding-right: 25px;
    right: 0;
  }
}
.navbar {
  width: 300px;
  height: 1000px;
  background: rgb(239, 239, 239);
  position: absolute;
  top: -86px;
  right: 70%;
  // 裁剪角
  &::before {
    display: block;
    content: "";
    border-style: solid;
    border-width: 43px 150px;
    border-color: #fff #fff transparent transparent;
  }
}
.navbar-top {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  span {
    font: 36px bold;
    font-weight: 600;
    color: rgb(1, 62, 132);
  }
  img {
    margin-left: 30px;
  }
}
.navbar-content {
  margin-top: 100px;
  line-height: 50px;
  font-size: 25px;
  font-weight: bold;
  li {
    width: 80%;
    height: 70px;
    margin: 30px auto;
    border-bottom: 1px solid rgb(191, 191, 191);
    i {
      display: inline-block;
      content: "";
      width: 12px;
      height: 12px;
      border-width: 3px;
      border-style: solid;
      border-color: rgb(191, 191, 191) rgb(191, 191, 191) transparent
        transparent;
      transform: rotate(45deg);
    }
    & > div {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    a {
      color: black !important;
      padding-right: 50px;
    }
  }
}
.btn {
  position: absolute;
  right: 0;
  padding: 25px 50px 0 0;
}
.container {
  height: 688px;
  background: #fff;
  overflow: hidden;
}
.row1,
.row2 {
  height: 344px;
  display: flex;
}
.row1 {
  div {
    flex: 1;
    &:nth-child(1) {
      flex: 2;
    }
    &:nth-child(4) {
      flex: 2;
    }
  }
  img {
    height: 100%;
    object-fit: cover;
  }
}
.row2 {
  div {
    flex: 2;
    &:nth-child(1) {
      flex: 1;
    }
    &:nth-child(4) {
      flex: 1;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.img-small {
  display: flex;
  img {
    width: 50%;
    height: 344px;
    object-fit: cover;
  }
}
</style>
