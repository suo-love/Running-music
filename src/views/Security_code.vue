<template>
  <div class="login">
    <div class="box">
    <div class="header">
      <span class="el-icon-back" @click ="jump" style="font-size:32px;"></span>
      <h3>登录</h3>
    </div>
      <p>忘记密码？</p>
    </div>
    <div class="shuru">
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <!-- <div class="shuru">
      <input type="text" placeholder="请输入验证码" v-model="code">
    </div> -->
    <el-button class="btn" type="primary" round @click="jumpUser">登录</el-button>
  </div>
</template>

<script>
import {testSCodeAPI,loginAPI,getUserDetail} from '@/services/auth'
import {setToken} from '@/utils/tools'
export default {
  name:'login',
  data:function(){
    return {
      // code:'',
      password:'',
      phone:this.$route.query.phone,
      userId:0,
      nickname:''
    }
  },
  methods:{
    jump(){
      this.$router.go(-1);
    },
    async jumpUser(){
      // const res = await testSCodeAPI({phone:this.phone,captcha:this.code});
      const res1 = await loginAPI({
        phone:this.phone,
        password:this.password
      });
      // 获取用户id
      console.log(res1.data);
      if(res1.data.code == 502){
        alert(res1.data.msg);
      }else{
        this.userId=res1.data.bindings[0].userId;
        const res2 = await getUserDetail({uid:this.userId})
        this.nickname = res2.data.profile.nickname;
        console.log(res2.data.profile.nickname);
        setToken(this.userId);
        this.$router.push({
          name: "User",
          query:{
            nickname:this.nickname
          }
        });
      }
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
