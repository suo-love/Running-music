import { get } from "@/utils/request";

/**
 * 
 */
export function getSingerDetail(params) {
  return get("/artist/top/song",params);
}
