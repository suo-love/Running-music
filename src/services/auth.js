import { post, get } from "@/utils/request";
/**
 *注册(修改密码)
 */
export function regAPI(user) {
  return post("/register/cellphone", user);
}
/**
 *手机密码登录 phone password
 */
export function loginAPI(params) {
  return post("/login/cellphone", params);
}

/**
 * 获取用户详情 uid
 */
export function userInfoAPI(params) {
  return get("/user/detail",params);
}
/**
 * 检测手机号码是否已注册 phone
 */
export function testregAPI(params) {
  return post("/cellphone/existence/check", params);
}
/**
 * 发送验证码 phone
 */
export function sendSCodeAPI(params) {
  return post("/captcha/sent", params);
}
/**
 * 验证验证码是否正确 phone captcha
 */
export function testSCodeAPI(params) {
  return post("/captcha/sent", params);
}
/**
 * 获取用户详情 uid
 */
export function getUserDetail(params) {
  return post("/user/detail", params);
}
/**
 * 退出登录
 */
export function Nologin() {
  return post("/logout");
}
/**
 * 获取用户信息 , 歌单，收藏，mv, dj 数量
 */
export function getUserInfo() {
  return post("/user/subcount");
}
/**
 * 获取账号信息
 */
export function getHaoInfo() {
  return post("/user/account");
}
/**
 * 获取用户获取用户播放记录 uid
 */
export function Recentlyplayed(params) {
  return post("/user/record", params);
}
