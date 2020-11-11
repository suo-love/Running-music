<template>
  <div class="user" style="position:relative;overflow:hidden;">
    <el-container>
    <!-- header -->
    <el-avatar :size="100" :src="circleUrl" style="position:absolute;left:0;right:0;top:20px;margin:0 auto;"></el-avatar>
    <p style="width:100%;color:#38b48b;text-align:center;position:absolute;left:0;right:0;top:130px;margin:0 auto;">{{profile.nickname}}</p>
    <el-row>
      <el-col style="height:120px;">
          <span class="el-icon-back" @click="onClickLeft" style="font-size:32px;color:#38b48b;margin:0 10px;padding-top:10px;"></span>
          <el-button round style="border:none;" @click ="nologin">退出登录</el-button>
      </el-col>
    </el-row>
      <!-- content -->
      <div class="content" style="margin-top:50px;">
        <el-row>
        <el-col style="display:flex;">
          <el-card @click.native="jumpCollect">
            <span class="el-icon-star-off" style="width:100%;text-align:center;margin:10px 0;color:#38b48b"></span>
            <div>
              <span style="color:#38b48b">我的收藏</span>
            </div>
          </el-card>
          <el-card>
            <span class="el-icon-star-off" style="width:100%;text-align:center;margin:10px 0;color:#38b48b"></span>
            <div @click = "ChangePassword">
              <span style="color:#38b48b">修改密码</span>
            </div>
          </el-card>
          <el-card>
            <span class="el-icon-star-off" style="width:100%;text-align:center;margin:10px 0;color:#38b48b"></span>
            <div @click = "ChangePersonInf">
              <span style="color:#38b48b">修改信息</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      </div>
    </el-container>
    <!-- footer -->
    <h4>最近播放</h4>
    <el-row :gutter="20">
        <el-col
          v-for="value in songs"
          :key="value.id"
          @click.native="jumpPerSong(value.id)"
        >
        <div class="songRignt">
          <div class="persong">
            <p class="song">
              <span>{{value.name}}</span>
              <span style="padding-top:2px">{{value.ar[0].name}}</span>
            </p>
            <p class="play"><img src="../assets/cover_play.png" alt=""></p>
          </div>
          <el-divider></el-divider>
        </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import {removeToken,getToken} from '@/utils/tools'
import {Nologin,getUserDetail,getHaoInfo,getUserInfo,Recentlyplayed} from '@/services/auth'
export default {
  name:'User',
  data(){
    return {
      active: 0,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      uid:0,
      profile:[],
      songs:[],
    }
  },
  async created(){
    this.uid = getToken();
    const res = await getUserDetail({uid:this.uid});
    // console.log(this.uid);
    this.profile = res.data.profile;
    this.circleUrl=this.profile.avatarUrl
    // const res2 = await getHaoInfo();
    // console.log(res2);
    const res3 = await getUserInfo();
    // console.log(res3);

    // 用户最近播放
    const res4 = await Recentlyplayed({uid:this.uid})
    this.songs = res4.data.allData.map(item=>{return item.song})
  },
  methods:{
    onClickLeft(){
      this.$router.push({
          name: 'Home',
      });
    },
    ChangePassword(){
      this.$router.push({
          name: 'ChangePassword',
      });
    },
    ChangePersonInf(){
      this.$router.push({
          name: 'ChangePersonInf',
      });
    },
    nologin(){
      Nologin();
      removeToken();
      this.$router.push({
          name: "Login",
        });
    },
    jumpCollect(){
      this.$router.push({
          name: "Collect",
      });
    },
    jumpPerSong(id){
       this.$router.push({
        name: 'PerSongDetail',
        query: {
          id: id,
        },
      })
    }
  }
}
</script>

<style scoped>
/* #myfooter{
  height: 50px;
} */
.el-container{
  display: flex;
  flex-direction: column;
}
.el-col-24{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
}
.el-card__body{
  text-align: center;
}
.el-divider--horizontal{
  margin: 2px 0;
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
.songRignt{
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}
.persong{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.play img{
  width: 25px;
}
</style>
