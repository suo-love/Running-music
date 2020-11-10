<template>
  <div class="persong">
    <!-- 头部 -->
    <div class="header">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <span
              class="el-icon-back"
              @click="onClickLeft"
              style="
                font-size: 32px;
                color: #38b48b;
                margin: 0 10px;
                padding-top: 10px;
              "
            ></span>
            <div class="songname">
              <span style="font: 17px Helvetica, sans-serif; color: #38b48b">{{
                persongdetail.name
              }}</span>
              <p>
                <span
                  v-for="(item, index) in ar"
                  :key="index"
                  style="font-size: 14px; color: #cecece; margin-right: 4px"
                  >{{ item }}</span
                >
              </p>
            </div>
            <el-avatar :size="50" :src="persongdetail.al.picUrl"></el-avatar>
            <span
              class="el-icon-share"
              style="
                font-size: 32px;
                color: #38b48b;
                margin-left: 10px;
                padding-top: 10px;
              "
            ></span>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 旋转区域 -->
    <div class="content" :class="animt">
      <el-avatar :size="300" :src="persongdetail.al.picUrl"></el-avatar>
    </div>

    <!-- 下载之类的三个按钮 -->
    <div>
      <el-row class="select">
        <el-col
          :span="8"
          style="font-size: 32px; color: #38b48b; text-align: center"
          ><van-icon name="like-o"
        /></el-col>
        <el-col
          :span="8"
          style="font-size: 32px; color: #38b48b; text-align: center"
          ><span class="el-icon-download"></span
        ></el-col>
        <el-col
          :span="8"
          style="color: #38b48b; font-size: 32px; text-align: center"
          ><van-icon name="chat-o" badge="99+"
        /></el-col>
      </el-row>
    </div>

    <!-- 进度条 -->
    <div class="fang">
      <!-- 开始时间 -->

      <!-- 小圆点 -->
      <p></p>
      <!-- 当前时间 -->
      <span>{{currentTime}}</span>
      <!-- 总时长 -->
      <span>{{duration}}</span>
      <audio  @canplay="getDuration" @timeupdate="updateTime" ref="start" :src="playurl" controls autoplay="autoplay" style="display:none"></audio>

    </div>
    <!-- 五个按钮 -->


    <div
      class="xiang"
      style="width: 100%; display: flex; justify-content: space-around"
    >
      <el-row class="play">
        <!-- 点击重新播放 -->
        <el-col style="font-size: 32px; color: #38b48b; text-align: center"
          ><van-icon @click="load" name="replay"
        /></el-col>

        <!-- 点击上一首 -->
        <el-col style="font-size: 48px; color: #38b48b; text-align: center"
          ><span class="el-icon-caret-left"></span
        ></el-col>

        <!-- 点击播放暂停 -->
        <el-col style="color: #38b48b; font-size: 48px; text-align: center"
          ><van-icon @click="pastar" :name="named"
        /></el-col>

        <!-- 点击下一首 -->
        <el-col style="font-size: 48px; color: #38b48b; text-align: center"
          ><span class="el-icon-caret-right"></span
        ></el-col>

        <!-- 点击出现菜单 -->
        <el-col style="color: #38b48b; font-size: 32px; text-align: center"
          ><van-icon @click="menulist" name="orders-o"
        /></el-col>
      </el-row>
      <ul :class="active" class="menu" ref="men">
        <li v-for="(item, index) in songs" :key="index" @click="tiao(item.id)">
          <span>{{ item.name }}</span
          ><span>{{ item.ar[0].name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getPerSongdetail } from '@/services/persongdetail'
import { getBo } from '@/services/BO'
import { getSingerDetail } from '@/services/getSingerDetail'
import { getSonglistdetail } from '@/services/song_list_detail'
export default {
  name: 'PerSongdetail',
  data() {
    return {
      duration:0,
      currentTime:0,
      persongdetail: {
        al: {},
      },
      songs: [],
      ar: [],
      playurl: '',
      active: 'active',
      named: 'pause-circle-o',
      animt: '',
      lid: this.$route.query.lid,
      ids:this.$route.query.ids
    }
  },
  async created() {
    const res1 = await getBo({ id: this.$route.query.id })
    this.playurl = res1.data.data[0].url
    const res = await getPerSongdetail({ ids: this.$route.query.id })
    this.persongdetail = res.data.songs[0]

    if(this.$route.query.ids){
      const res3 = await getSonglistdetail({id:this.$route.query.ids});
      this.songs = res3.data.playlist.tracks
    }else{
      const res2 = await getSingerDetail({ id: this.lid })
      this.ar = res.data.songs[0].ar.map((item) => {
        return item.name
      })
      this.songs = res2.data.songs
    }
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    pastar() {
      if (this.$refs.start.paused) {
        this.$refs.start.play()
        this.named = 'pause-circle-o'
        this.animt = ''
      } else {
        this.$refs.start.pause()
        this.named = 'play-circle-o'
        this.animt = 'state'
      }
      console.log(this.$refs.start.currentTime)
    },
    load() {
      this.$refs.start.load()
    },
    menulist() {
      if (this.active) {
        this.active = ''
      } else {
        this.active = 'active'
      }
    },
    tiao(id) {
      this.$router.push({
        name: 'PerSongDetail',
        query: {
          id: id,
        },
      })
      var that = this
      getBo({ id: id }).then(function (response) {
        that.playurl = response.data.data[0].url
      })

      // lid

      // getPerSongdetail({ id: id }).then(function (response) {

      // })

    },
    getDuration() {
       console.log(parseInt(this.$refs.start.duration)); //此时可以获取到duration
       var middle= 0;// 分
       var s=0;
       if(parseInt(this.$refs.start.duration)>60){
              middle= parseInt(this.$refs.start.duration/60);
              s= parseInt(this.$refs.start.duration%60);
              console.log(middle,s)
       }
       this.duration = middle+":"+s;
    },
    updateTime(e) {
      // this.currentTime =parseInt(e.target.currentTime);  //获取audio当前播放时间
      console.log(parseInt(e.target.currentTime/60))
      var a="";
      if(parseInt(e.target.currentTime)<10){
        a=""+parseInt(e.target.currentTime)
      }
      else{
        a+=parseInt(e.target.currentTime)
      }
      if(parseInt(e.target.currentTime)>=60){
        a=parseInt(e.target.currentTime)%60
      }
      if(a<10){
        a="0"+a
      }
      this.currentTime=parseInt(e.target.currentTime/60)+":"+a

    },

},
watch:{
    currentSong() {  //监听正在播放的歌曲改变
        this.$nextTick(() => {
            this.$refs.start.play();
            console.log(this.$refs.start.duration); //此时duration为NaN
        })
    },
}


}

</script>

<style scoped>
.fang {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.fang p{
  width: 78%;
  height: 0.2rem;
  background-color: #cecece;
  /* rgb(56, 180, 139) */
}
.fang p::after{
  content: "";
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  background-color: #fff;
  border: 0.1rem solid rgb(56, 180, 139);
  position: absolute;
  border-radius: 50%;
  top: 0.7rem;
  left:2.0rem;
}
.fang span{
  font-size: 0.5rem;
  color: #696969;
  position: absolute;
}
.fang span:nth-of-type(1){
  top: 1.5rem;
    left: 1.5rem;
}
.fang span:nth-of-type(2){
  top: 1.5rem;
  right: 1.5rem;
}
.state {
  animation-play-state: paused;
}
.persong {
  overflow: hidden;
}
.bg-purple-dark {
  margin-top: 20px;
  display: flex;
}
.songname {
  width: 55%;
}
.play {
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
}
.xiang {
  position: relative;
}
.menu {
  background-color: black;
  opacity: 0.5;
  position: absolute;
  display: flex;
  right: 0.5rem;
  bottom: 3.5rem;
  width: 14rem;
  display: flex;
  height: 10rem;
  max-height: 10rem;
  border-radius: 0.5rem;
  flex-direction: column;
  overflow-y: auto;
  /* height: 0.5rem; */
}
.menu li {
  list-style: none;
  color: #ffffff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 0.3rem;
}
.active {
  display: none;
}
/* animation: name duration timing-function delay iteration-count direction fill-mode play-state; */
.content {
  animation-name: myfirst;
  animation-duration: 30s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  text-align: center;
  margin: 40px 0;
}
@keyframes myfirst {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
