<template>
  <div class="login">
    <div class="box">
    <div class="header">
      <span class="el-icon-back"></span>
      <h3>手机号登录</h3>
    </div>
      <p>未注册手机登陆后将自动创建账号</p>
    </div>
    <div class="shuru">
        <input type="text" name="" id="">
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