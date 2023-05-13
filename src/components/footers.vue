<template>
  <div class="footerContainer">
    <div class="third">
      <div class="topContent">
        <div class="content">
          <div><img src="../assets/组 22.png" alt="" /></div>
          <div>
            <span>域名备案信息:www.hbsi.edu.cn</span
            ><span>通讯地址:河北省保定市莲池区东风东路999号</span
            ><span>邮政编码:1000XX Email:@bjfu.edu.cn</span
            ><span>本贴图文未经授权严禁转载及使用</span>
          </div>
          <div class="codeContainer">
            <div class="code"><img src="" alt="" /><span>官微</span></div>
            <div class="code"><img src="" alt="" /><span>小程序</span></div>
          </div>
        </div>
        <div class="corp">版权所有 &copy; 河北软件职业技术学院</div>
      </div>
    </div>
    <div class="second">
      <div></div>
    </div>
    <div class="first"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less">
.footerContainer {
  height: 300px;
  margin-top: 100px;
  position: relative;
}
.footerContainer > div {
  position: absolute;
  bottom: 0;
  & > div {
    margin: 0 auto;
  }
}
.first {
  width: 100%;
  height: 60px;
  background: rgba(198, 207, 215, 0.2);
}
.second {
  width: 100%;
  div {
    width: 90%;
    height: 110px;
    background: rgb(148, 174, 202);
  }
}
.third {
  width: 100%;
  z-index: 100;
  & > div {
    width: 85%;
    height: 250px;
    background: rgb(2, 62, 130);
  }
}
.topContent {
  color: #fff;
  .content {
    height: 198px;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 90px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.19);
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
    }
    span {
      text-align: left;
      line-height: 30px;
    }
  }
}
.codeContainer {
  display: flex;
  .code {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
  }
  img {
    width: 88px;
    height: 88px;
  }
}
.corp {
  width: 80%;
  font-size: 16px;
  font-weight: 600;
  margin: 20px auto 0;
  text-align: left;
}
</style>
