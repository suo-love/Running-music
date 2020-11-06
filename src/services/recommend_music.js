import { get } from "@/utils/request";

/**
 * 获取推荐歌单
 */
export function getRecommendMusic() {
  return get("/personalized");
}
