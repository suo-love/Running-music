<template>
  <div id="app">
    <!-- 组件内容区域 -->
    <router-view/>
    <!-- 底部导航 -->
    <div id="footer">
      <van-tabbar v-model="active" route active-color="#38b48b">
        <van-tabbar-item :to="{name:'Home'}" icon="music-o">首页</van-tabbar-item>
        <van-tabbar-item :to="{name:'Video'}" icon="video-o">视频</van-tabbar-item>
        <van-tabbar-item :to="{name:'Ranklist'}" icon="friends-o">排行</van-tabbar-item>
        <van-tabbar-item :to="{name:'User'}" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: 0,
      };
    },
  };
</script>
<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

</style>
