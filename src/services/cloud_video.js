import { get } from "@/utils/request";

/**
 * 获取推荐歌单
 */
export function getcloudvideo(params) {
  return get("/top/mv",params);
}