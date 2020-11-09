<template>
  <div class="persong">
    <div class="header">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <span class="el-icon-back" @click="onClickLeft" style="font-size:32px;color:#38b48b;margin:0 10px;padding-top:10px;"></span>
            <div class="songname">
              <span style="font: 17px Helvetica,sans-serif;color:#38b48b;">{{persongdetail.name}}</span>
              <p>
                <span v-for="( item,index) in ar" :key="index"
                style="font-size:14px;color:#cecece;margin-right:4px;"
                >{{item}}</span>
              </p>
            </div>
            <el-avatar :size="50" :src="persongdetail.al.picUrl"></el-avatar>
            <span class="el-icon-share" style="font-size:32px;color:#38b48b;margin-left:10px;padding-top:10px;"></span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content" style="text-align:center;margin:50px 0;">
      <el-avatar :size="300" :src="persongdetail.al.picUrl"></el-avatar>
    </div>
    <div>
      <el-row class="select">
        <el-col :span="8" style="font-size:32px;color:#38b48b;text-align:center;"><van-icon name="like-o"/></el-col>
        <el-col :span="8" style="font-size:32px;color:#38b48b;text-align:center;"><span class="el-icon-download"></span></el-col>
        <el-col :span="8" style="color:#38b48b;font-size:32px;text-align:center;"><van-icon name="chat-o" badge="99+"/></el-col>
      </el-row>
    </div>
    <div class="progress" style="margin:30px 0;display:flex;justify-content: center;">
      <van-slider v-model="value" bar-height="4px" active-color="#38b48b" style="width:90%"/>
    </div>
    <div style="width:100%;display:flex;justify-content: space-around;">
      <el-row class="play">
        <el-col style="font-size:32px;color:#38b48b;text-align:center;"><van-icon name="replay" /></el-col>
        <el-col style="font-size:48px;color:#38b48b;text-align:center;"><span class="el-icon-caret-left"></span></el-col>
        <el-col style="color:#38b48b;font-size:48px;text-align:center;"><van-icon name="play-circle-o"/></el-col>
        <el-col style="font-size:48px;color:#38b48b;text-align:center;"><span class="el-icon-caret-right"></span></el-col>
        <el-col style="color:#38b48b;font-size:32px;text-align:center;"><van-icon name="orders-o" /></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {getPerSongdetail} from '@/services/persongdetail'
export default {
  name:'PerSongdetail',
  data(){
    return {
      persongdetail:{},
      ar:[],
      value: 50
    }
  },
  async created(){
    const res = await getPerSongdetail({ids:this.$route.query.id})
    this.persongdetail= res.data.songs[0]
    this.ar=res.data.songs[0].ar.map(item=>{return item.name});
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1);
    },
  }
}
</script>

<style scoped>
.persong{
  overflow: hidden;
}
.bg-purple-dark{
  margin-top: 20px;
  display: flex;
}
.songname{
  width: 55%;

}
.play{
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
}
</style>
