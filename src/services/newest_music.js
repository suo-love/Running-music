import { get } from "@/utils/request";

/**
 * 获取最新音乐
 */
export function getNewestMusic() {
  return get("/personalized/newsong");
}
