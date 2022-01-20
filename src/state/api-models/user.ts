import { User } from "../models/user";
import { CommonResponse, SearchRequest } from "./common";

export type UserRequest = (SearchRequest & {}) | undefined;
export type UserResponse = CommonResponse & {
  data?: {
    user: User;
  };
};
