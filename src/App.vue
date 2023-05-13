<template>
  <div id="app">
    <navTop class="navTop"></navTop>
    <router-view />
    <footers></footers>
  </div>
</template>

<script>
import navTop from "./components/navTop.vue";
import footers from "./components/footers.vue";
export default {
  components: {
    navTop,
    footers,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navTop {
  position: sticky;
  top: -40px;
  z-index: 200;
}
</style>
