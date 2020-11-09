<template>
  <div class="user">
    <el-container>
    <!-- header -->
    <el-avatar :size="100" :src="circleUrl" style="position:fixed;left:0;right:0;top:20px;margin:0 auto;"></el-avatar>
    <p style="width:100%;color:#38b48b;text-align:center;position:fixed;left:0;right:0;top:130px;margin:0 auto;">昵称</p>
    <el-row>
      <el-col>
          <span class="el-icon-back" @click="onClickLeft" style="font-size:32px;color:#38b48b;margin:0 10px;padding-top:10px;"></span>
          <el-button round style="border:none;">退出登录</el-button>
      </el-col>
    </el-row>
      <!-- content -->
      <div class="content" style="margin:50px 0;">
        <el-row>
        <el-col style="display:flex;">
          <el-card>
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
  </div>
</template>

<script>
export default {
  name:'User',
  data(){
    return {
      active: 0,
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
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
  height: 120px;
  display: flex;
  align-items: center;
  justify-content:space-between;
}
.el-card__body{
  text-align: center;
}
h4{
  margin: 10px 0;
  margin-left: 10px;
  border-left: 3px solid #38b48b;
  padding-left: 4px;
}
</style>
