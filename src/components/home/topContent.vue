<template>
  <div class="friendContainer">
    <img :src="this.carouselImg" alt="" />
    <!-- 校友风采 -->
    <div class="titleText">
      <div class="text">
        <slot></slot>
      </div>
    </div>
    <div class="bread">
      <span>首页 ● <slot></slot></span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carouselImg: "",
    };
  },
  mounted() {
    this.carouselImg = window.sessionStorage.getItem("carouselUrl");
  },
};
</script>
<style lang="less">
.friendContainer {
  position: relative;
  img {
    width: 100%;
    height: 300px;
  }
}
.titleText {
  width: 100%;
  height: 50px;
  position: absolute;
  top: 189px;
  text-align: left;
  .text {
    width: 80%;
    margin: 0 auto;
    font-size: 50px;
    font-weight: 900;
    color: #fff;
  }
}
.bread {
  width: 780px;
  height: 72px;
  position: absolute;
  bottom: -42px;
  background: linear-gradient(to right, #5000b9, #0d437f);
  position: absolute;
  transform: skewX(8deg);
  /*  设置扭曲的基点,初始是在左下角 */
  transform-origin: bottom right;
  span {
    display: block;
    transform: skewX(-8deg);
    color: #fff;
    line-height: 72px;
  }
}
</style>
