import { ListBlogsResponse } from "../../api-models/blogs";
import { BlogsDetailResponse } from "../../api-models/blogs";
import { BaseState } from "../models";

export type BlockInfo = BaseState<ListBlogsResponse>;
export type BlogsDetail = BaseState<BlogsDetailResponse>;

export type BlogsState = {
  blogs: BlockInfo;
  detail: BlogsDetail;
};

export const initialBlogsState: BlogsState = {
  blogs: {
    loading: false,
    response: [],
  },
  detail: {
    loading: false,
    response: {
      content: "",
      createdAt: "",
      id: "",
      image: "",
      title: "",
    },
  },
};

declare module "./../models" {
  interface StateAll {
    // match to a duck folder
    blogs: {
      // match to reducer name, each reducer will be one field in state
      blogs: BlogsState;
    };
  }
}
