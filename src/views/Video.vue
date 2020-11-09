<template>
  <div class="video">
    <el-radio-group v-model="radio">
      <el-radio-button label="广场"></el-radio-button>
      <el-radio-button label="MV"></el-radio-button>
    </el-radio-group>

    <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData" @click="clickFn">
      
    </vue-waterfall-easy>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import {getBanners} from '@/services/banners'
// import axios from 'axios'
export default {
  name:'Video',
  data() {
    return {
      imgsArr: [],
      group: 0, // 当前加载的加载图片的次数
      pullDownDistance: 0,
      radio:"广场"
    }
  },
  components: {
    vueWaterfallEasy
  },
  
  //获取数据方法

  async created(){
    const res=await getBanners();
    this.imgsArr=res.data.banners
    console.log(this.imgsArr)
  },
  methods:{
    getData(){

    },
    clickFn(){

    }
  }
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,
body{
  height: 100%;
}
.el-radio-group{
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

</style>
