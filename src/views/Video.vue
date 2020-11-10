<template>
  <div class="video">
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
    <!-- 导航 -->
     <div id="">
      <van-tabbar v-model="active" route active-color="#38b48b">
        <van-tabbar-item :to="{name:'Home'}">首页</van-tabbar-item>
        <van-tabbar-item :to="{name:'Video'}">歌手</van-tabbar-item>
        <van-tabbar-item :to="{name:'Ranklist'}">排行</van-tabbar-item>
        <van-tabbar-item :to="{name:'User'}">我的</van-tabbar-item>
      </van-tabbar>
    </div>

    <!-- 内容区域 -->
    <h4>热门歌手</h4>
    <ul>
      <li v-for="(item,index) in singerinfo" :key="index" @click="clickHandle(item.id,item.name,item.picUrl)">
        <img :src="item.picUrl" alt="">
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import {getsingers} from '@/services/singer'
export default {
  name:'Video',
  data() {
    return {
       active: 0,
      singerinfo:[],
    }
  },
  //获取数据方法
  async created(){
    const res = await getsingers();
    this.singerinfo=res.data.list.artists;
  },
  methods: {
    onClickRight(){
       this.$router.push({
          name: 'Search',
      });
    },clickHandle(i,n){
      this.$router.push({
          name: 'SingerDetail',
          query:{
            id:i,
            name:n
          }
      });
  }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
html,
body{
  height: 100%;
}
ul li{
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0 0.5rem;
  padding-bottom: 1rem;
  margin-top: 0.5rem;

  border-bottom: 1px solid #cecece;
}
ul li img{
  width: 20%;
  margin-right: 1.5rem;
}
ul li p{
  font-size:0.8rem;
  color: #333333;
}
h4{
  margin: 10px 0;
  margin-left: 10px;
  border-left: 3px solid #38b48b;
  padding-left: 4px;
}
</style>
