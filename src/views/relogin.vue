
<template>
  <div class="loginbox">
      <!-- 太极 -->
        <div class="box">
          <div class="circleblack"></div>
          <div class="circlewhite"></div>
          <div class="circlebm"></div>
          <div class="circlewm"></div>
          <div class="circlebs"></div>
          <div class="circlews"></div>
        </div>
      <div class="phone">
        <input disabled class="phonenum" type="text" name="" id="" value="17864299371">
        <i class="el-icon-edit"></i>
      </div>
      <div class="btn">
        <el-button round>一键登录</el-button>
        <el-button round>立即体验</el-button>
      </div>
      <div class="icon">
        <i class="iconfont icon-qq"></i>
         <i class="iconfont icon-weixin"></i>
          <i class="iconfont icon-weibo"></i>
           <i class="iconfont icon-wangyi"></i>
      </div>
       


        

    
  </div>
</template>

<script>
export default {
  name: 'relogin',
  data() {
    return {
     
    }
  },
  methods: {
    
  },
}
</script>


<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  
}
* {
  margin: 0;
  padding: 0;
}
.loginbox{
  background: linear-gradient(135deg,#FFF886,#F072B6);
  background: url(../assets/1.jpg) no-repeat;
  height: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  /* justify-content: center; */
}

/* 太极图 */
.box {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  position: relative;
  animation: infinite linear taiji 5s;
  margin-top: 50px;
  margin-bottom: 220px;

}
.circleblack {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: black;
}
.circlewhite {
  width: 75px;
  height: 150px;
  background-color: white;
  border-top-right-radius: 75px;
  border-bottom-right-radius: 75px;
  position: absolute;
  top: 0;
  left: 75px;
}
.circlebm {
  width: 75px;
  height: 75px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 0px;
  left: 37.5px;
}
.circlewm {
  width: 75px;
  height: 75px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  bottom: 0px;
  left: 37.5px;
}
.circlebs {
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 22.5px;
  left: 60px;
}
.circlews {
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  bottom: 22.5px;
  left: 60px;
}
@keyframes taiji {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.phone{
  display: flex;
  justify-content: center;
}
.phonenum{
  /* opacity: 0; */
  width: 55%;
  background-color: rgba(0, 0, 0, 0);
  color: #ffffff;
  border: none;
  outline: none;
}
.el-icon-edit{
  color: #ffffff;
}
.btn{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  justify-content: center;
}
.el-button+.el-button {
    margin-left: 0px;
}
.el-button.is-round{
  margin: 5px 0;
  width: 90%;
  background-color: #E80505;
  outline: none;
  border: none;
}
.el-button.is-round:nth-of-type(1){
  color: #ffffff;
}
.icon{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin-top: 8px;
}
.icon i{
  font-size: 20px;
  color: #ffffff;
  display: block;
}
.icon i:nth-of-type(1){
  color: skyblue;
}
.icon i:nth-of-type(2){
  color: greenyellow;
}
.icon i:nth-of-type(3){
  color: red;
}
.icon i:nth-of-type(4){
  color: orangered;
}
</style>