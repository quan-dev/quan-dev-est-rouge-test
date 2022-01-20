export const GET_BLOGS_LIST = "blogs/get_blogs_list";
export const GET_BLOGS_LIST_SUCCESS = "blogs/get_blogs_list_success";
export const GET_BLOGS_LIST_FAILED = "blogs/get_blogs_list_failed";

export const GET_BLOGS_DETAIL = "blogs/get_blogs_detail";
export const GET_BLOGS_DETAIL_SUCCESS = "blogs/get_blogs_detail_success";
export const GET_BLOGS_DETAIL_FAILED = "blogs/get_blogs_detail_failed";

export type BlockAction =
  | typeof GET_BLOGS_LIST
  | typeof GET_BLOGS_LIST_SUCCESS
  | typeof GET_BLOGS_LIST_FAILED
  | typeof GET_BLOGS_DETAIL
  | typeof GET_BLOGS_DETAIL_SUCCESS
  | typeof GET_BLOGS_DETAIL_FAILED;
