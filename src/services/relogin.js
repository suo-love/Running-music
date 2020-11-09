import { get } from "@/utils/request";

/**
 * 登录
 */
export function getBanners(params) {
  return get("/login/cellphone",params);
}