<template>
  <div class="home">
    <!-- logo和搜索 -->
    <div class="logo">
      <van-nav-bar @click-right="onClickRight">
        <template #left>
          <h1>YF-M</h1>
        </template>
        <template #right>
          <van-icon color="#f08300" name="search" size="18"/>
        </template>
      </van-nav-bar>
    </div>
    <div class="home_content">
      <!-- banner图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.imageUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
      <!-- 分类歌单 -->
      <h4>推荐歌单</h4>
      <div class="rec_music">
        <van-grid v-for="value in recommend_music" :key="value.id">
          <span class="playCount">{{(value.playCount/10000).toFixed(1)}}万</span>
          <van-grid-item
          icon-size= 40
          :icon="value.picUrl"
          :text="value.name"
          :to="{name:'RecommendMusicDetail',query:{id:value.id}}"
           />
        </van-grid>
      </div>
      <!-- 最新音乐 -->
      <h4>最新音乐</h4>
      <el-row :gutter="20">
        <el-col
          v-for="item in newest_music"
          :key="item.id"
        >
        <div class="persong"  @click="clickHandle(item.id)">
          <div class="topsong">
            <p class="song">
              <span>{{item.name}}</span>
              <span style="padding-top:2px">{{item.song.artists[0].name}}&nbsp;&nbsp;-&nbsp;&nbsp;{{item.song.album.name}}</span>
            </p>
            <p class="play"><img src="../assets/cover_play.png" alt=""></p>
          </div>
          <el-divider></el-divider>
        </div>
        </el-col>
      </el-row>
      <p :loading="isLoading" @click="loadMore" style="font-size:14px;color:#cecece;width:100%;text-align:center">点击加载更多...</p>
    </div>
    <div id="myfooter"></div>
     <div id="footer">
      <van-tabbar v-model="active" route active-color="#38b48b">
        <van-tabbar-item :to="{name:'Home'}" icon="music-o">首页</van-tabbar-item>
        <van-tabbar-item :to="{name:'Video'}" icon="video-o">视频</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item :to="{name:'User'}" icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>

import {getBanners} from '@/services/banners'
import {getRecommendMusic} from '@/services/recommend_music'
import {getNewestMusic} from '@/services/newest_music'
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      active: 0,
      banners: [],
      recommend_music:[],
      newest_music:[],
      isLoading: false,
      limit:10,
    }
  },
  async created () {
    // banner
    const res = await getBanners();
    this.banners = res.data.banners
    // 推荐歌单
    const res1 = await getRecommendMusic();
    this.recommend_music=res1.data.result;
    this.loadMore();
  },
  methods:{
    async loadMore() {
      // 最新音乐
      this.limit+=10;
      const res2 = await getNewestMusic( { limit: this.limit });
      this.newest_music=res2.data.result;
    },
    clickHandle(i){
      this.$router.push({
          name: 'PerSongDetail',
          query:{
            id:i
          }
      });
    },
    onClickRight(){
       this.$router.push({
          name: 'Search',
      });
    }
  }
}

</script>
<style scoped>
body{
  overflow: hidden;
}
.home{
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.home_content{
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}
.banner img{
  width: 100%;
}
.logo{
  background-color: "#38b48b";
  height: 46px;
}
.logo h1{
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  color: #f08300;
}
h4{
  margin: 10px 0;
  margin-left: 10px;
  border-left: 3px solid #38b48b;
  padding-left: 4px;
}
.song{
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
}
.song span:nth-child(2){
  font: 12px Helvetica,sans-serif;
  color: #888;
}
.playCount{
  position: absolute;
  top: 10px;
  right: 10px;
  color: #fff;
  font:12px Helvetica,sans-serif;
  z-index: 1;
}
.rec_music{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.persong{
  width: 90%;
  display: flex;
  flex-direction: column;
}
.topsong{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.play img{
  width: 25px;
}
#myfooter{
  height: 50px;
}
.el-row{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.el-col-24{
  display: flex;
  justify-content: center;
  align-items: center;
}
.el-divider--horizontal{
  margin: 0;
  margin-top: .3rem;
}
</style>
<style>
.van-nav-bar{
  background-color:#38b48b ;
  opacity: .8;
  border: none;
}
.van-grid-item__text{
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 35.2px;
}
.van-hairline--top{
  display: flex;
  flex-direction: column;
  position: relative;
}
.van-grid-item{
  display: flex;
  width: 33%;
}
.van-grid-item__icon img {
    width: 110px;
}
.van-grid-item__content{
  padding: .1rem;
  margin: 0.3rem;
}
.van-grid-item__icon {
    font-size: 110px;
}
.van-grid-item:nth-of-type(1){
  margin-left: 3px;
}
</style>
