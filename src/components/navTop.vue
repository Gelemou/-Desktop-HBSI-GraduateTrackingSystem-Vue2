<template>
  <div>
    <div class="top">
      <a href="">校友登录</a>| <a href="">教职工登录</a>|
      <a href="http://www.hbsi.edu.cn">学校官网</a>
    </div>
    <div class="top topContainer">
      <a href=""
        ><img src="../../public/images/河北软件职业技术学院.png" alt=""
      /></a>
      <ul>
        <li id="a1">
          <router-link to="/"> 首页 </router-link>
        </li>
        <li><router-link to="/show">校友风采</router-link></li>
        <li><router-link to="/memory">班级记忆</router-link></li>
        <li><router-link to="/active">校友活动</router-link></li>
        <li><router-link to="/more">走进校园</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
// function getVisited() {
//   var a1 = document.getElementById("a1");
//   a1.style.borderBottom = "3px solid #fff";
// }
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less">
* {
  list-style: none;
}
body,
ul {
  margin: 0;
  padding: 0;
}
div {
  display: block;
}
a {
  text-decoration: none;
  color: aliceblue;
}
.test {
  position: -webkit-sticky;
  overflow: visible;
}
.top {
  height: 40px;
  background: #1a5ba1;
  color: aliceblue;
  text-align: right;
  position: relative;
  a:hover {
    color: #709bff;
  }
  li:hover {
    border-bottom: 3px solid #fff;
  }
}
.top > a {
  margin: 0 20px;
  font-size: 1rem;
  line-height: 40px;
}
.topContainer {
  position: sticky;
  top: 20px;
  height: 100px;
  background: #09437c;
  display: flex;
  justify-content: space-between;
  /* logo */
  img {
    width: 376px;
    margin: 15px 0;
  }
  ul {
    display: flex;
    margin: 0;
    line-height: 100px;
  }
  a {
    margin: 0 20px;
  }
}
</style>
