<template>
  <div>
    <carousel></carousel>
    <newsCenter></newsCenter>
    <div class="afterNews">
      <notice :data-info="notices" target-url="/noticedetail" more-url="/more">
        <template #title>通知公告</template>
      </notice>
      <notice
        :data-info="activities"
        target-url="/activitydetail"
        more-url="/active"
      >
        <template #title>近期活动</template>
      </notice>
    </div>
    <photo></photo>
    <show more-url="/show"></show>
    <activity></activity>
  </div>
</template>
<script>
import carousel from "../components/home/carousel.vue";
import newsCenter from "@/components/home/newsCenter.vue";
import notice from "@/components/home/notice.vue";
import photo from "@/components/home/photo.vue";
import show from "@/components/home/show.vue";
import activity from "@/components/home/activity.vue";

import home from "@/store/home";

export default {
  components: {
    carousel,
    newsCenter,
    notice,
    photo,
    show,
    activity,
  },
  data() {
    return {
      notices: [],
      activities: [],
    };
  },
  mounted() {},
  created() {
    home
      .getNoticeOrNews({ pageNum: 1, pageSize: 3, newsType: 2 })
      .then((res) => {
        if (res.code == 200 && res.success) {
          this.notices = res.result.list;
        }
      });
    home.getActivity({ pageNum: 1, pageSize: 3 }).then((res) => {
      if (res.code == 200 && res.success) {
        for (let item of res.result.list) {
          let newsId = item.activityId;
          let title = item.title;
          let createTime = item.activityDate;
          this.activities.push({ newsId, title, createTime });
        }
      }
    });
  },
};
</script>
<style>
.afterNews {
  display: flex;
  width: 80%;
  margin: 0 auto;
}
</style>
