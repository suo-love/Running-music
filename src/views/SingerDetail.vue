<template>
  <div class="singer">
    <!-- <h3>{{title}}</h3> -->
    
    <div class="contain" :style="{backgroundImage: pic}">
      <h3 class='el-icon-arrow-left' @click="goback()">歌手</h3>
    </div>
    <ul>
      <li v-for="(item,index) in SingerDetail" :key="index" @click="start(item.id)">
        <!-- <img :src="item.al.picUrl" alt=""> -->
        <div>
          <span>{{index+1}}.</span>
          <p>{{item.name}}</p>
        </div>
        <p class="el-icon-video-play"></p>
      </li>
    </ul>
    
    
  </div>
</template>

<script>
import {getSingerDetail} from '@/services/getSingerDetail'
export default {
  name:'SingerDetail',
  data(){
    return {
      SingerDetail:[],
      title:"",
      pic:"",
      
    }
  },
  async created(){
    const res = await getSingerDetail({id:this.$route.query.id})
    // this.persongdetail= res.data.songs[0]
    this.SingerDetail=res.data.songs;
    this.title=this.$route.query.name;
    this.pic="url("+res.data.songs[0].al.picUrl+")";
    // console.log(this.pic)
    // console.log(this.title);
    // this.ar=res.data.songs[0].ar.map(item=>{return item.name});
  },
  methods:{
    onClickLeft(){
      this.$router.push({
          name: 'Home',

      });
    },
    goback(){
      this.$router.go(-1);
    },
    start(id){
      this.$router.push({
          name: 'PerSongDetail',
          query:{
            id:id,
            lid:this.$route.query.id
          }
      });
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
.contain{
  height: 20rem;
  width: 100%;
  background-repeat:no-repeat;
  background-size: cover;
}
.play{
  width: 90%;
  height: 60px;
  display: flex;
  align-items: center;
}
ul{
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: #F5F5F5;
}

ul li[data-v-e54aa4b2] {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #cecece;
}
ul li div{
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}
ul li>p{
  margin-right: 0.5rem;
  font-size: 1.5rem;
}
ul li span{
  font-weight: bolder;
}
</style>
