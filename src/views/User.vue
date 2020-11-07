<template>
  <div class="user">
    <el-container>
      <el-header class="header">
        <el-row class="demo-avatar demo-basic">
          <el-col :span="12" class="headphoto">
              <el-avatar :size="60" :src="circleUrl"></el-avatar>
              <span style="font-size:12px;color:#606266;">登录立享手机电脑多端同步</span>
              <el-button round style="height:40px;border:solid 1px #cecece;">立即登录</el-button>
          </el-col>
        </el-row>
      </el-header>
      <!-- content -->
      <el-main>Main</el-main>
      <!-- footer -->
      <!-- <div id="myfooter"></div> -->
      <div id="footer">
      <van-tabbar v-model="active" route active-color="#38b48b">
        <van-tabbar-item :to="{name:'Home'}" icon="music-o">首页</van-tabbar-item>
        <van-tabbar-item :to="{name:'Video'}" icon="video-o">视频</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item :to="{name:'User'}" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name:'User',
  data(){
    return {
      active: 0,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  }
}
</script>

<style scoped>
/* #myfooter{
  height: 50px;
} */
.headphoto{
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
