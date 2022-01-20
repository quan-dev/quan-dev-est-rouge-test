import { createAsyncAction } from "typesafe-actions";

import {
  BlogsDetailRequest,
  BlogsDetailResponse,
  ListBlogsRequest,
  ListBlogsResponse,
} from "../../api-models/blogs";
import * as types from "./types";

// Create the set of async actions
export const getBlogList = createAsyncAction(
  types.GET_BLOGS_LIST,
  types.GET_BLOGS_LIST_SUCCESS,
  types.GET_BLOGS_LIST_FAILED
)<ListBlogsRequest, ListBlogsResponse, any>();

// Create the set of async actions
export const getBlogDetail = createAsyncAction(
  types.GET_BLOGS_DETAIL,
  types.GET_BLOGS_DETAIL_SUCCESS,
  types.GET_BLOGS_DETAIL_FAILED
)<BlogsDetailRequest, BlogsDetailResponse, any>();
