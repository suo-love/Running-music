import { get } from "@/utils/request";

/**
 * 获取最新音乐
 */
export function getNewestMusic(param) {
  return get("/personalized/newsong",param);
}
