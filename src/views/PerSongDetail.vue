<template>
  <div class="persong">
    <div class="header">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <span class="el-icon-back" style="font-size:32px;color:#38b48b;margin:0 10px;padding-top:10px;"></span>
            <div class="songname">
              <span style="font: 17px Helvetica,sans-serif;color:#38b48b;">{{persongdetail.name}}</span>
              <p>
                <span v-for="( item,index) in ar" :key="index"
                style="font-size:14px;color:#cecece;margin-right:4px;"
                >{{item}}</span>
              </p>
            </div>
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
            <span class="el-icon-share" style="font-size:32px;color:#38b48b;margin-left:10px;padding-top:10px;"></span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content" style="text-align:center;">
      <el-avatar :size="300" :src="persongdetail.al.picUrl"></el-avatar>
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
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  },
  async created(){
    const res = await getPerSongdetail({ids:this.$route.query.id})
    this.persongdetail= res.data.songs[0]
    this.ar=res.data.songs[0].ar.map(item=>{return item.name});
  },
  methods:{
    onClickLeft(){
      this.$router.push({
          name: 'Home',
      });
    }
  }
}
</script>

<style scoped>

.bg-purple-dark{
  margin-top: 20px;
  display: flex;
}
.songname{
  width: 55%;
}
</style>
