<template>
  <el-carousel arrow="always" indicator-position="none">
    <el-carousel-item v-for="img in images" :key="img.wxSwiperId">
      <a href="" target="_blank">
        <img :src="getFullPath(img)" alt="" />
      </a>
    </el-carousel-item>

    <!-- <el-carousel-item>
      <img src="../../../public/images/蒙版组 1.png" alt="" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/0002.png" alt="" />
    </el-carousel-item>
    <el-carousel-item>
      <img src="../../assets/0001.png" alt="" />
    </el-carousel-item> -->
  </el-carousel>
</template>
<script>
import home from "@/store/home";
import urls from "@/utils/urls";
export default {
  data() {
    return {
      images: [
        {
          wxSwiperId: 6,
          swiperUrl: "/introImages/167763493675884465155.png",
          linkUrl: "http://www.baidu.com",
        },
      ],
    };
  },
  mounted() {
    home.getSliderPics({ pageNum: 1, pageSize: 3 }).then((res) => {
      if (res.code == 200 && res.success) {
        this.images = res.result.list;
        window.sessionStorage.setItem(
          "carouselUrl",
          this.getFullPath(this.images[0])
        );
      }
    });
  },
  methods: {
    getFullPath(img) {
      return urls.SERVER_IMG_BASE_API + img.swiperUrl;
    },
  },
};
</script>
<style lang="less">
.el-carousel__container {
  height: 600px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
