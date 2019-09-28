<template>
  <div id="app">
    <commom-header></commom-header>
    <div id="container">
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
    <!-- <router-link to="/">电影</router-link> -->
  </div>
</template>

<script>
import CommomHeader from "./components/CommomHeader";
import CommonFooter from "./components/CommonFooter";
export default {
  components: {
    CommomHeader,
    CommonFooter
  }
};
</script>
<style lang="scss">
#container {
  margin: 50px 0;
}
</style>
