import { get } from "@/utils/request";

/**
 * 获取歌手
 */
export function getsingers() {
  return get("/toplist/artist");
}