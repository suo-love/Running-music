<template>
  <div class="login">
    <div class="box">
    <div class="header">
      <span class="el-icon-back" @click ="jump" style="font-size:32px;"></span>
      <h3>登录</h3>
    </div>
      <p>没有收到验证码？</p>
    </div>
    <div class="shuru">
       <input type="text" placeholder="请输入昵称">
    </div>
    <div class="shuru">
       <input type="text" placeholder="请输入密码">
    </div>
    <div class="shuru">
        <input type="text" placeholder="请输入验证码">
    </div>
    <el-button class="btn" type="primary" round>下一步</el-button>
  </div>
</template>

<script>
export default {
  name:'login',
  data:function(){
    return {

    }
  },
  methods:{
    jump(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>

.login{
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
}
.header span{
  font-size: 1rem;
}
h3{
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 2rem;
  font-weight: normal;
}
p{
  font-size: 0.8rem;
  color: #cecece;
}
.box{
  margin-left: 0.5rem;
}
.login input{
  width: 95%;
  border: none;

}
.shuru{
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-bottom: 1px solid #cecece;
  display: flex;
  margin-top: 2rem;
  justify-content: center;
}
</style>
