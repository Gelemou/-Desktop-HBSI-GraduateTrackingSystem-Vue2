<template>
  <div class="bodyDiv">
    <topContent>校友活动</topContent>
    <div class="activityContent">
      <div class="bar">
        <!-- 当状态为被选中时,启用组件 -->
        <span
          @click="currentTabComponent = 'activityNotices'"
          :class="{ active: currentTabComponent == 'activityNotices' }"
          >活动通知</span
        >
        <span
          @click="currentTabComponent = 'activityGlimplse'"
          :class="{ active: currentTabComponent == 'activityGlimplse' }"
          >活动掠影</span
        >
      </div>
    </div>
    <div class="content">
      <!-- <keep-alive></keep-alive> -->
      <!-- component可以动态渲染组件 根据绑定的is值决定哪个组件被渲染 -->
      <component :is="currentTabComponent"></component>
    </div>
  </div>
</template>
<script>
import topContent from "@/components/home/topContent.vue";
import activityNotices from "@/components/activityNotices.vue";
import activityGlimplse from "@/components/activityGlimplse.vue";
export default {
  components: { topContent, activityNotices, activityGlimplse },
  data() {
    return {
      currentTabComponent: `activityNotices`,
    };
  },
};
</script>
<style lang="less" scoped>
.bodyDiv {
  background-color: rgb(243, 243, 243);
}
.activityContent {
  width: 80%;
  margin: 94px auto;
  .bar {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    span {
      width: 200px;
      padding-bottom: 10px;
      color: rgba(0, 0, 0, 0.4);
      font-size: 20px;
      font-weight: 900;
      border-bottom: 8px solid rgba(3, 62, 131, 0.4);
      cursor: pointer;
      &:first-child {
        margin-right: 100px;
      }
      // 选中后改变样式
      &.active {
        color: #000;
        border-bottom: 8px solid rgba(3, 62, 131);
      }
    }
  }
}
</style>
