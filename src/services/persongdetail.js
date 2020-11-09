import { get } from "@/utils/request";

/**
 * 获取推荐每首歌曲详情页
 */
export function getPerSongdetail(params) {
  return get("/song/detail",params);
}
