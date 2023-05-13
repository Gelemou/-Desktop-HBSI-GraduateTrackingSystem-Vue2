<template>
  <div class="glimplseContainer">
    <div class="activityContainer">
      <div class="background"></div>
      <div class="activity">
        <img :src="getImages()" alt="" />
        <!-- 右侧卡片 -->
        <div class="cardContainer">
          <div
            id="cardLi"
            class="card"
            :class="{ active: index == current }"
            @click="current = index"
            v-for="(item, index) in activity"
            :key="item.activityId"
          >
            <div>
              <span class="time">{{ item.activityDate }}</span>
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 活动图片 -->
      <div class="newsContainer">
        <div class="newsImg" v-for="item in activity" :key="item.activityId">
          <span>{{ item.activityDate }}</span>
          <span>{{ item.title }}</span>
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
      // 当前用户点击的项
      current: 0,
      // 卡片静态数据
      activity: [
        {
          activityId: 119,
          title: "教职工篮球赛",
          activityDate: "2023-03-25",
          coverPicture: "/images/0001.png",
        },
        {
          activityId: 118,
          title: "访企拓岗促就业活动",
          activityDate: "2023-03-17",
          coverPicture: "/images/0002.png",
        },
        {
          activityId: 118,
          title: "访企拓岗促就业活动",
          activityDate: "2023-03-17",
          coverPicture: "/images/0003.png",
        },
        {
          activityId: 118,
          title: "访企拓岗促就业活动",
          activityDate: "2023-03-17",
          coverPicture: "/images/01(1).png",
        },
        {
          activityId: 118,
          title: "访企拓岗促就业活动",
          activityDate: "2023-03-17",
          coverPicture: "/images/01(2).png",
        },
      ],
      news: [],
    };
  },
  mounted() {
    // Array.splice(start, deleteCount) -- 数组的截取
    // 截取时,会影响数组本身,函数的返回值是一个数组(包含了删除的元素)

    // Array.slice(start, end) 截取时不包含终止位置,不影响原数组,函数的的返回值是一个数组(为截取到的元素)

    // home.getActivity({ pageNum: 1, pageSize: 5 }).then((res) => {
    //   if (res.code == 200 && res.success) {
    //     this.activity = res.result.list;
    //   }
    // });
    home.getActivity({ pageNum: 1, pageSize: 6 }).then((data) => {
      this.news = data.result.list;
    });
    home.getActivitiesGlimpse({ pageNum: 1, pageSize: 6 }).then((data) => {
      if (data.success && data.code == 200) {
        this.activity = data.result.list;
        this.topList = this.activity.slice(0, 5);
      }
    });

    //轮播函数
    // card.addEventListener(
    //   "focus",
    //   function setInterval() {
    //     if (this.current < 5) {
    //       this.current++;
    //     } else this.current = 0;
    //   },
    //   1000,
    //   true
    // );
  },
  methods: {
    getImages() {
      let url = this.activity[this.current].coverPicture;
      return this.getServerImg(url);
    },
    getServerImg(url) {
      if (url) {
        return urls.SERVER_IMG_BASE_API + url;
      } else return "";
    },
  },
};
</script>
<style lang="less" scoped>
.activityContainer {
  position: relative;
}
.activity {
  width: 80%;
  height: 562px;
  display: flex;
  position: relative;
  margin: 0 auto;
  img {
    width: 70%;
    height: 100%;
    object-fit: cover;
  }
}
// 紫色渐变容器
.background {
  width: 80%;
  height: 500px;
  position: absolute;
  top: -50px;
  right: 0;
  background: linear-gradient(to right, #5000b9, #0d437f);
}
.cardContainer {
  width: 296px;
  height: 100%;
  background: #f3f3f3;
  display: flex;
  text-align: left;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
  // 设置卡片
  .card {
    width: 100%;
    height: 20%;
    background: #fff;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    // margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    // 选中卡片后
    &.active {
      color: #fff;
      background-color: rgba(177, 177, 0, 0.333);
      span {
        color: #fff;
      }
    }
    // 选择前四个元素
    &:nth-child(-n + 4) {
      border-bottom: 2px solid rgba(231, 231, 231, 0.9);
    }
    span {
      color: #7f7f7f;
      font-size: 12px;
    }
    p {
      font-size: 18px;
      font-weight: 900;
    }
    & > div {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;
      margin: 25px 15px 0;
    }
  }
}
.newsContainer {
  width: 80%;
  height: 500px;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  .newsImg {
    width: 33.33%;
    height: 50%;
    display: inline-block;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    // 日期
    span {
      position: absolute;
      color: #fff;
      left: 15px;
    }
    // 时间
    & span:first-of-type {
      width: 107px;
      height: 30px;
      bottom: 45px;
      font-size: 14px;
      line-height: 30px;
      background: linear-gradient(to right, #5000b9, #0d437f);
      border: 1px dashed #fff;
    }
    // 活动内容
    & span:last-of-type {
      width: 90%;
      bottom: 10px;
      font-size: 24px;
      font-weight: 600;
      text-align: left;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>
