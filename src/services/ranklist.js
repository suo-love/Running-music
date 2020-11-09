import { get } from "@/utils/request";

/**
 * 获取排行榜歌单
 */
export function getranklist() {
  return get("/toplist/detail");
}