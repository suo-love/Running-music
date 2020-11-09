<template>
  <div class="list">
    <el-row>
        <el-col  v-for="(item,index) in list" :key="index" :span="24">
          <div class="grid-content">
            <!-- 左 -->
            <div class="rank_list__bd">
              <h2 class="rank_list__tit">{{item.name}}</h2>
              <ol class="rakn_song_list">
                <li class="rakn_song_list__item">
                  <strong class="rakn_song_list__no c_txt1">1<!-- -->.</strong>
                  <span class="rakn_song_list__name c_txt1">{{typeof(item.tracks[0])}}</span>
                  -<span class="rakn_song_list__singer c_txt2">执迷不悟</span>
                </li>
                <li class="rakn_song_list__item">
                    <strong class="rakn_song_list__no c_txt1">2<!-- -->.</strong>
                    <span class="rakn_song_list__name c_txt1">执迷不悟</span>
                    -<span class="rakn_song_list__singer c_txt2">执迷不悟</span>
                </li>
                <li class="rakn_song_list__item">
                      <strong class="rakn_song_list__no c_txt1">3<!-- -->.</strong>
                      <span class="rakn_song_list__name c_txt1">执迷不悟</span>
                      -<span class="rakn_song_list__singer c_txt2">执迷不悟</span>
                </li>
              </ol>
            </div>

            <!-- 右 -->
            <div class="rank_list__media">
              <img class="rank_list__img" :src="item.coverImgUrl">
              <span class="rank_list__update">{{item.updateFrequency}}</span>


              <div class="mui_cover_count">
                <!-- <i class="mui_cover_count__icon"></i>  播放图标 -->
                <span class="mui_cover_count__num">{{(item.playCount/1000000).toFixed(1)}}<!-- -->万</span>
              </div>
            </div>
         
         
         
          </div>
        </el-col>  
    </el-row>
  </div>
  
</template>

<script>
import {getranklist} from '@/services/ranklist'

export default {
  name:'Ranklist',
  data () {
    return {
      list:[],
      // imgarr:[]
    }
  },
  async created () {
    const res=await getranklist();
    this.list = res.data.list
    // this.list.forEach(ele => {
    //   this.imgarr.push(ele.coverImgUrl)
    // });
    console.log(this.list)
  },
  methods:{
    // async loadMore() {
    //   // 最新音乐
    //   const res2 = await getNewestMusic();
    //   this.newest_music=res2.data.result;
    // }, 
  },
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
html,body{
  height: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
/* 盒子 */
.grid-content {
  display: flex;
  /* padding-right: 15px; */
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  margin-top: 10px;
  min-height: 36px;
  width: 98%;
}
/* 左边整体 */
.rank_list__bd {
    display: flex;
    flex-direction: column;
    margin-right: 30px;

}
/* h2 */
.rank_list__tit {
    /* margin: 16px 0 14px 14px; */
    margin-top: 10px;
    margin-left: 14px;
    margin-bottom: 8px;
    line-height: 1;
    font-size: 16px;
    font-weight: 700;
}
/* ol 下面的li */
/* 第一个 */
.rakn_song_list__item {
    margin-left: 14px;
    overflow: hidden;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 24px;   
}
/* li下面的strong和第一个span */
.rakn_song_list__name{
  color: #555855;
}
/* li下面第二个span */
.c_txt2 {
    color: rgba(26,26,26,.5);
}

/* 右边整体 */
.rank_list__media {
    position: relative;
    width: 107px;
    height: 107px;
    /* padding-left: 30px; */
    overflow: hidden;
    border-radius: 0 7px 7px 0;
    
}


/* 图片 */
.rank_list__img {
    display: block;
    width: 100%;
    height: 100%;
}


/* 每日更新 */
.rank_list__update {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    display: -webkit-box;
    -webkit-box-pack: end;
    height: .38rem;
    padding: 5px;
    font-size: 12px;
    color: #fff;
    background-image: -webkit-linear-gradient(top,rgba(0,0,0,.4),transparent);
}



/* 播放量 */
.mui_cover_count {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 5;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    height: 17px;
    min-width: 14px;
    padding: 0 7px;
    border-radius: 9px;
    background: rgba(0,0,0,.4);
}
.mui_cover_count__num {
    display: block;
    margin-left: 2px;
    line-height: normal;
    font-size: 11px;
    font-weight: 300;
    color: #fff;
}
.mui_cover_count::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    min-width: 40px;
    height: 40px;
}
</style>
