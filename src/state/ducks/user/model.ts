import { UserResponse } from "../../api-models/user";
import { BaseState } from "../models";

export type UserInfo = BaseState<UserResponse>;

export type UserState = {
  info: UserInfo;
};

export const initialUserState = {
  info: { loading: false, response: undefined },
};

declare module "./../models" {
  interface StateAll {
    // match to a duck folder
    user: {
      // match to reducer name, each reducer will be one field in state
      user: UserState;
    };
  }
}
