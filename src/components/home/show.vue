<template>
  <div class="show">
    <titleMore class="titleMore" :more-url="moreUrl">校友风采</titleMore>
    <div class="picContent">
      <div class="pic" v-for="item in friends" :key="item.graduateId">
        <img :src="getImage(item.image1)" alt="" /><span
          >{{ item.post }}——{{ item.name }}</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import titleMore from "./titleMore.vue";
import home from "@/store/home";
import urls from "@/utils/urls";
export default {
  components: { titleMore },
  props: {
    moreUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
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
    home.getFriends({ pageNum: 1, pageSize: 20 }).then((data) => {
      if (data.code == 200 && data.success) {
        this.friends = data.result.list;
      }
    });
  },
  methods: {
    getImage(url) {
      if (url) return urls.SERVER_IMG_BASE_API + url;
      else {
        return "";
      }
    },
  },
};
</script>
<style lang="less" scoped>
* {
  padding: 0;
}
.titleMore {
  width: 80%;
  margin: 45px auto 20px;
}
.picContent {
  width: 80%;
  display: flex;
  margin: 70px auto;
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
