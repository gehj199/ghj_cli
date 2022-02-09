<template>
  <div>
    <!-- <keep-alive v-if="$route.meta.keepAlive">
      <router-view ></router-view>
    </keep-alive>
    <router-view v-else></router-view> -->
    <router-view v-slot="{ Component }">
      <!-- vue3.0配置 keep-alive缓存-->
      <keep-alive>
        <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" :key="$route.name" v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  
</template>

<script>

export default {
  name: 'App',
  created() {
    document.oncontextmenu = new Function("event.returnValue=false");
        // 禁用选择
    document.onselectstart = new Function("event.returnValue=false");
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  padding: 0;
  background: #efefef;
}
@font-face {
  font-family: SiYuanMedium;       
  /* src:url("./assets/fonts/SourceHanSansCN-Medium.otf");        */
  src:url("./assets/fonts/SourceHanSansCN-Medium.ttf") format('truetype');
}
@font-face {
  font-family: SiYuanLight;       
  /* src:url("./assets/fonts/SourceHanSansCN-Light.otf");     */
      src:url("./assets/fonts/SourceHanSansCN-Light.ttf") format('truetype');    
}
@font-face {
  font-family: SiYuanRegular;       
  /* src:url("./assets/fonts/SourceHanSansCN-Regular.otf");        */
  src:url("./assets/fonts/SourceHanSansCN-Regular.ttf") format('truetype');       
}
@font-face {
  font-family: SiYuanNormal;       
  /* src:url("./assets/fonts/SourceHanSansCN-Normal.otf");        */
  src:url("./assets/fonts/SourceHanSansCN-Normal.ttf") format('truetype');       
}
.van-dialog{
  overflow: scroll !important;
}
</style>
