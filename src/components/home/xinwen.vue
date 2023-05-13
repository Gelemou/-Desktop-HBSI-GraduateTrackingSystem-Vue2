<template>
  <div class="newscentercontainer">
    <!-- <TitleMore>新闻中心</TitleMore> -->
    <div class="content">
      <div>
        <img src="../../assets/11.png" alt="" />
        <h5>全国大学英语四、六级考试（笔试）的通知</h5>
      </div>
      <div>
        <img src="../../assets/11(1).png" alt="" />
        <h5>全国大学英语四、六级考试（笔试）的通知</h5>
      </div>
      <div>
        <img src="../../assets/11(2).png" alt="" />
        <h5>全国大学英语四、六级考试（笔试）的通知</h5>
      </div>
      <div>
        <img src="../../assets/11(3).png" alt="" />
        <h5>全国大学英语四、六级考试（笔试）的通知</h5>
      </div>
    </div>
    <TitleMore>通知公告</TitleMore>
  </div>
</template>

<script>
// import TitleMore from "./TitleMore.vue";
// export default {
//   name: "Project1TitleMore",
//   components: { TitleMore },
//   data() {
//     return {};
//   },
// };
</script>

<style lang="less" scoped>
.newscentercontainer {
  width: 80%;
  margin: 39px auto 0;
  .content {
    margin-top: 33px;
    display: flex;
    justify-content: space-between;
    div {
      position: relative;
      width: 25%;
      height: 221px;
      // padding-right: 14px;
      border-right: 14px solid transparent;
      &:last-child {
        // padding-right: 0;
        border-right-width: 0;
        h5 {
          right: 0;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      h5 {
        position: absolute;
        box-sizing: border-box;
        bottom: 0%;
        left: 0;
        right: 0px;
        height: 44px;
        font-size: 14px;
        padding-left: 13px;
        line-height: 44px;
        background-color: rgba(0, 119, 255, 0.4);
        color: #fff;
        //文本内容超宽后，显示....
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
