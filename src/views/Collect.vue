<template>
  <div class="collect">
    <div class="header">
      <span class="el-icon-arrow-left" @click="jump" style="font-size:20px; color:#38b48b;position:fixed;top:15px;left:10px;"></span>
      <h3 style="color:#38b48b;">我的收藏</h3>
    </div>
    <div class="nav">
      <el-tabs class="tabs" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane class="tab1"  label="音乐" name="first" >
            <ul>
              <li class="music">音乐</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane class="tab1" label="视频" name="second">
            <ul>
              <li>视频</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane class="tab1" label="歌手" name="third">
            <ul>
              <li>歌手</li>
            </ul>
          </el-tab-pane>
          <el-tab-pane class="tab1" label="专辑" name="fourth">
            <ul>
              <li>专辑</li>
            </ul>
          </el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name:'Collect',
  data:function(){
    return {
      activeName: 'first'
    }
  },
  methods:{
    handleClick(tab, event) {
        // console.log(tab, event);
      },
    jump(){
      console.log(1);
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.active{
  color: red;
}
.collect{
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.header{
  display: flex;
  margin-top: 0.8rem;
  align-items: center;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #cecece;
}
.header span{
  font-size: 1rem;
  margin-left: 0.5rem;
}
h3{
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 8rem;
}

</style>
<style>
.el-tabs__item{
  width: 25%;
}
.el-tabs__nav {
  width: 100%;
  text-align: center;
}
.el-tabs__active-bar{
  background-color: #38b48b;
}
.el-tabs__item.is-active {
    color: #38b48b;
}
</style>
