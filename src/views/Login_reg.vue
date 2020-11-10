<template>
  <div class="login">
    <div class="box">
    <div class="header">
      <span class="el-icon-back" @click ="jump" style="font-size:32px;"></span>
      <h3>手机号登录</h3>
    </div>
      <p>未注册手机登陆后将自动创建账号</p>
    </div>
    <div class="shuru">
        <input type="text" name="" id="" v-model="phonenum" placeholder="请输入手机号">
    </div>
    <el-button class="btn" type="primary" round @click="jumpSCode">下一步</el-button>
  </div>
</template>

<script>
import {testregAPI,sendSCodeAPI} from '@/services/auth'
export default {
  name:'login',
  data:function(){
    return {
      phonenum:'',
      exist:1,//判断手机号是否注册过返回1是注册过返回-1是未注册
    }
  },
  methods:{
    async jumpSCode(){
      const res = await testregAPI({phone:this.phonenum})
      this.exist=res.data.exist;
      console.log(res.data.exist);
      // const res1 =await sendSCodeAPI({phone:this.phonenum})//发送验证码
      // console.log(res1);
      if(this.exist==1){
        this.$router.push({
          name: 'Security_code',
          query:{
            phone:this.phonenum
          }
      });
      }else{
        this.$router.push({
          name: 'New_SCode',
          query:{
            phone:this.phonenum
          }
        });
      }
    },
    jump(){
      this.$router.push({
          name: 'Login',
      });
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
