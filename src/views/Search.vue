<template>
  <div class="search">
    <div class="header">
      <span class="el-icon-arrow-left" style="color:#fff;" @click="jumpHome">返回</span>
       <van-search
        v-model="keyword"
        shape="round"
        background='#4fc08d'
        placeholder="请输入搜索关键词"
        @search="onSearch"
        style="width:85%"
      >
      </van-search>
    </div>

    <div class="searchlist" :style="{'display':value}">
      <p v-for="(v,i) in searchlist" :key="i" style="font-size:14px;color:#fff;margin-left:20px;" @click="jumpPerSong(v.id)">{{v.name}}</p>
    </div>
    <!-- <h4>搜索历史</h4> -->
    <h4>热搜</h4>
    <div class="perhot">
      <el-row v-for="(item,index) in hotsearch" :key="index">
        <el-col style="display: flex;align-items: center;height:60px;" @click.native="hotHandle(item.searchWord)">
            <span style="padding:0 20px;">{{index+1}}</span>
            <p style="display:flex;flex-direction: column;">
              <span style="color:#38b48b;">{{item.searchWord}}</span>
              <span style="font-size:12px;color:#cecece;margin-top:4px;">{{item.content}}</span>
            </p>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {getHotSearch,getSearchrecSong,getSearchSong} from '@/services/searchsong'
export default {
  name:'Search',
  data() {
    return {
      hotsearch:[],
      searchlist:[],
      keyword:'',
      value:'none'
    };
  },
  async created(){
    const res = await getHotSearch();
    this.hotsearch = res.data.data;
  },
  methods:{
    // 搜索功能
    async onSearch(){
      const res1 = await getSearchSong({
        keywords: this.keyword,
      })
    this.searchlist=res1.data.result.songs;
    this.value='block'
    },
    jumpHome(){
       this.$router.push({
          name: 'Home',
      });
    },
    jumpPerSong(id){
      this.$router.push({
        name: 'PerSongDetail',
        query: {
          id: id,
        },
      })
    },
    async hotHandle(i){
      const res2 = await getSearchSong({
        keywords: i,
      })
      this.jumpPerSong(res2.data.result.songs[0].id)
    }
  }

}
</script>

<style scoped>
h4{
  margin: 10px 0;
  margin-left: 10px;
  border-left: 3px solid #38b48b;
  padding-left: 4px;
}
.search{
  position: relative;
}
.header{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background:#4fc08d
}
.searchlist{
  width: 95%;
  background: #38b48b;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 10px;
  z-index: 1;
}
</style>

