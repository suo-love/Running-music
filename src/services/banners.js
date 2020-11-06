import { get } from "@/utils/request";

/**
 * 获取banner图
 */
export function getBanners() {
  return get("/banner");
}
