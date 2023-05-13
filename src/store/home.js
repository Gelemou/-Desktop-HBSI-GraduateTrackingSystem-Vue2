import request from "@/utils/request";

export default {
  //参数para是一个对象(axios中的config中的params)
  getSliderPics(para) {
    // 返回axios生成的promise实例
    return request({
      url: "/swiper/wx/getListAll",
      method: "post",
      params: para,
    });
  },
  // 获取首页新闻中心或者首页的通知公告内容
  getNoticeOrNews(para) {
    return request({
      url: "/news/wx/getListAll",
      method: "post",
      params: para,
    });
  },
  // 获取新闻中心使用的新闻
  getNews(para) {
    return request({
      url: "/news/wx/getListAll",
      method: "post",
      params: para,
    });
  },
  // 获取通知公告和近期活动信息
  getNotice(para) {
    return request({
      url: "/news/wx/getListAll",
      method: "post",
      params: para,
    });
  },
  // 获取历届毕业照信息
  getPhotoInfo(para) {
    return request({
      url: "/classes/wx/getClassCovers",
      method: "post",
      params: para,
    });
  },
  // 获取校友风采
  getFriends(para) {
    return request({
      url: "/graduate/wx/getExcellentGraduateList",
      method: "post",
      params: para,
    });
  },
  // 获取校友活动
  getActivity(para) {
    return request({
      url: "/activity/getListAll",
      method: "post",
      params: para,
    });
  },
  // 获取活动通知详情
  getActivityDetail(para) {
    return request({
      url: "/activity/getByIdAll",
      method: "post",
      params: para,
    });
  },
  getReadList(para) {
    return request({
      url: "/activity/getListAllRe",
      method: "post",
      params: para,
    });
  },
  getActivitiesGlimpse(para) {
    return request({
      url: "/activity/getListImgAll",
      method: "post",
      params: para,
    });
  },
  // 班级记忆 系别
  getMemory(para) {
    return request({
      url: "/department/wx/getDepartmentByYear",
      method: "post",
      params: para,
    });
  },
  // 班级记忆 班级
  getMemoryClass(para) {
    return request({
      url: "/classes/wx/getClassByDeptId",
      method: "post",
      params: para,
    });
  },
};
