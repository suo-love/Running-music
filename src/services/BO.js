import { get } from "@/utils/request";

/**
 * 获取播放地址
 */
export function getBo(param) {
  return get("/song/url", param);
}
