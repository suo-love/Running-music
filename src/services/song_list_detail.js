import { get } from "@/utils/request";

/**
 * 获取推荐歌单的详情页
 */
export function getSonglistdetail(params) {
  return get("/playlist/detail",params);
}
