import { Blog } from "../models/blogs";
import { CommonRequest } from "./common";

export type ListBlogsRequest = CommonRequest & {
  search?: string | null;
  page?: string | null;
  limit?: string;
};

export type ListBlogsResponse = Blog[];

export type BlogsDetailRequest = CommonRequest & { id: string };

export type BlogsDetailResponse = Blog;
