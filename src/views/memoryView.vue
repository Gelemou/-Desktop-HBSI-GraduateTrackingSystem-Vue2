<template>
  <div>
    <topContent>班级记忆</topContent>
    <div class="memoryContainer">
      <div class="year">
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="selectedYear"
            @change="dateChange()"
            :picker-options="pickerOption"
            type="year"
            placeholder="选择年"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="contentContainer">
        <div class="department">
          <ul>
            <li>全部</li>
            <li
              v-for="item in departments"
              @click="
                currentDepartmentId = item.departmentId;
                getClasses();
              "
              :class="{ active: currentDepartmentId == item.departmentId }"
              :key="item.departmentId"
            >
              {{ item.departmentName }}
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="pics">
            <div class="pic" v-for="items in classes" :key="items.classId">
              <img :src="getServerImage(items.coverPicture)" alt="" />
              <div class="message">
                <h3>{{ items.className }}</h3>
                <span>辅导员:{{ items.teacherName }}</span>
              </div>
            </div>
          </div>
          <div class="nav"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topContent from "@/components/home/topContent.vue";
import home from "@/store/home.js";
import urls from "@/utils/urls";

export default {
  components: {
    topContent,
    home,
  },
  data() {
    return {
      selectedYear: new Date(),
      currentDepartmentId: 0,
      departments: [
        {
          departmentId: "",
          departmentName: "222",
          coverPicture: "",
        },
      ],
      classes: {},
      pickerOption: {
        disabledDate(dt) {
          // 禁用超过今年的年份
          return dt.getFullYear() > new Date().getFullYear();
        },
      },
    };
  },
  mounted() {
    this.getMemoryDepartment();
  },
  methods: {
    getServerImage(url) {
      if (url) {
        return urls.SERVER_IMG_BASE_API + url;
      }
    },
    dateChange() {
      this.getMemoryDepartment();
    },
    // 获取系部
    getMemoryDepartment() {
      let y = this.selectedYear.getFullYear();
      home.getMemory({ year: y }).then((data) => {
        if (data.success && data.code == 200) {
          this.departments = data.result.departmentList;
          this.currentDepartmentId =
            this.getMemoryDepartment.length > 0
              ? this.getMemoryDepartment[0].departmenId
              : 0;
          this.getClasses();
        }
      });
    },
    // 根据系部获取班级
    getClasses() {
      // 如果没有对应的系部,则退出
      if (this.currentDepartmentId == -1) {
        this.classes = [];
        return;
      }
      home
        .getMemoryClass({
          departmentId: this.currentDepartmentId,
          pageNum: 1,
          pageSize: 6,
        })
        .then((data) => {
          if (data.success && data.code == 200) {
            this.classes = data.result.list;
          }
        });
    },
  },
};
</script>
<style lang="less" scoped>
.memoryContainer {
  width: 80%;
  margin: 0 auto;
}
.year {
  height: 42px;
  border-left: 11px solid rgba(13, 67, 127, 1);
  margin-top: 76px;
  padding-left: 20px;
  text-align: left;
  /deep/.el-input__inner {
    font-size: 26px !important;
    color: rgba(13, 67, 127, 1) !important;
  }
}
.contentContainer {
  margin-top: 47px;
  display: flex;
  .department {
    margin-left: 50px;
    li {
      height: 30px;
      cursor: pointer;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      &:last-child {
        border-bottom: none;
      }
      &.active {
        font-weight: 600;
        border-bottom: 1px solid #000;
      }
    }
  }
}
.content {
  flex: 1;
  margin-left: 66px;
  .pics {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    .pic {
      width: 50%;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0 8px;
      img {
        width: 100%;
        height: 240px;
        object-fit: cover;
      }
      .message {
        height: 100px;
        text-align: left;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-top: none;
        h3 {
          margin-left: 20px;
        }
        span {
          color: rgba(0, 0, 0, 0.2);
          font-size: 12px;
          font-weight: 600;
          margin-left: 20px;
        }
      }
    }
  }
}
</style>
