<template>
  <div class="detail">
    <span class="el-icon-arrow-left" style="position:fixed;z-index:1000;top:10px;color:#fff;" @click="jumpHome">返回</span>
    <!-- 头部 -->
    <section class="header" :style="{'background-image': 'url('+detaildata.coverImgUrl+')'}">
        <div class="pic">
          <img :src="detaildata.coverImgUrl" alt="">
          <span class="song_list">歌单</span>
          <span class="playcount">{{(detaildata.playCount/10000).toFixed(1)}}万</span>
        </div>
        <div class="talk">
          <h2>{{detaildata.name}}</h2>
          <p><span><img :src="creator.avatarUrl" alt=""></span><span>{{creator.nickname}}</span></p>
        </div>
        <div class="mask"></div>
    </section>
    <!-- 歌曲列表 -->
    <div class="songlist">
      <h3>歌曲列表</h3>
      <el-row :gutter="20">
        <el-col
          v-for="(value ,index) in musicList"
          :key="value.id"
        >
        <p style="width:10%;height:100%;font-size: 17px;color: #999;">{{index+1}}</p>
        <div class="songRignt">
          <div class="persong" @click="clickHandle(value.id)">
            <p class="song">
              <span>{{value.name}}</span>
              <span style="padding-top:2px">{{value.ar[0].name}}&nbsp;&nbsp;/&nbsp;&nbsp;{{value.ar[0].name}}</span>
            </p>
            <p class="play"><img src="../assets/cover_play.png" alt=""></p>
          </div>
          <el-divider></el-divider>
        </div>
        </el-col>
      </el-row>
    </div>
    <!-- 精彩评论 -->
    <div class="goodcomment">
      <h3>精彩评论</h3>
      <el-row :gutter="20">
        <el-col v-for="v in comment" :key="v.userId">
        <p style="width:30px;height:30px;border-radius:100%;overflow:hidden;margin-right:10px">
          <img :src="v.user.avatarUrl" alt="" style="width:30px;height:30px;">
        </p>
        <div class="commentRignt">
          <div class="cr_top">
            <p style="margin-bottom:0">
              <span style="float:left">{{v.user.nickname}}</span>
              <span style="float:right;font-size: 11px;color: #999;width: 65px;height: 22px;line-height: 22px;">
                {{v.likedCount}}<img src="../assets/zan.png" alt="" style="width:14px;height:14px;margin-left:2px;"></span>
              </p>
            <!-- 评论时间 -->
            <!-- <span style="font-size: 9px;color: #999; padding:2px 0;">时间</span> -->
          </div>
          <p style="color: #333;
            font-size: 15px;
            line-height: 22px;
            margin:5px 0;">
            {{v.content}}
          </p>
          <el-divider></el-divider>
        </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import { getSonglistdetail } from '@/services/song_list_detail'
import {getSongComment} from '@/services/song_comment'
export default {
  name:'',
  data(){
    return{
      musicList:[],
      detaildata:{},
      creator:{},
      comment:[]
    }
  },
  async created(){
    const res = await getSonglistdetail({id:this.$route.query.id});
    this.musicList=res.data.playlist.tracks;
    this.detaildata = res.data.playlist;
    this.creator=res.data.playlist.creator
    const res1 = await getSongComment({id:this.$route.query.id})
    this.comment = res1.data.hotComments;
  },
  methods:{
    jumpHome(){
       this.$router.push({
          name: 'Home',
      });
    },
    clickHandle(i){
      this.$router.push({
          name: 'PerSongDetail',
          query:{
            id:i
          }
      });
    }
  }
}
</script>

<style scoped>
.detail{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
.header{
  width: 100%;
  padding: 40px 0;
  display: flex;
  background-position-x: 50%;
  background-position-y: center;
  background-repeat:no-repeat;
  background-size:cover;
  position: relative;
}
.mask{
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .3);
}
.pic{
  position: relative;
  width: 126px;
  height: 120px;
  z-index: 3;
  margin-left: 16px;
}
.pic img{
  width: 126px;
}
.song_list{
  position: absolute;
  z-index: 3;
  top: 10px;
  left: 0;
  padding: 0 8px;
  height: 17px;
  color: #fff;
  font-size: 9px;
  text-align: center;
  line-height: 17px;
  background-color: rgba(217,48,48,.8);
  border-top-right-radius: 17px;
  border-bottom-right-radius: 17px;
}
.playcount{
  position: absolute;
  right: 3px;
  top: 0;
  z-index: 4;
  padding-left: 15px;
  color: #fff;
  font-size: 12px;
}
.talk{
  width: 208px;
  height: 126px;
  margin-left: 16px;
  z-index: 3;
}
.talk p{
  height: 30px;
  line-height: 30px;
  color: hsla(0,0%,100%,.7);
  display: flex;
  align-items: center;
}
.talk span:nth-child(1){
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  overflow: hidden;
  margin-right: 5px;
}

.talk img{
  width: 30px;
}
h2{
  font: 17px Helvetica,sans-serif;
  padding-top: 1px;
  line-height: 1.3;
  color: #fefefe;
  height: 44px;
}
h3{
  height: 23px;
  line-height: 23px;
  padding: 0 10px;
  margin: 0;
  font-size: 12px;
  color: #666;
  background-color: #eeeff0;
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
.songRignt{
  width: 80%;
  display: flex;
  flex-direction: column;
}
.persong{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.play img{
  width: 25px;
}
.commentRignt{
  width: 80%;
  display: flex;
  flex-direction: column;
}
.cr_top{
  width: 100%;
  display: flex;
  flex-direction: column;
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
