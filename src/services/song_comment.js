import { get } from "@/utils/request";

/**
 * 获取推荐歌单评论
 */
export function getSongComment(params) {
  return get("/comment/playlist",params);
}
