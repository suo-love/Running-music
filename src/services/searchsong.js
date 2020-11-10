import { get } from "@/utils/request";

/**
 * 推荐搜索
 */
export function getSearchrecSong(params) {
  return get("/search/suggest",params);
}
/**
 * 热搜
 */
export function getHotSearch() {
  return get("/search/hot/detail");
}
/**
 * 搜索歌曲
 */
export function getSearchSong(params) {
  return get("/cloudsearch",params);
}
