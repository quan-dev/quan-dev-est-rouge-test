import { createAsyncAction } from "typesafe-actions";

import { UserRequest, UserResponse } from "../../api-models/user";
import * as types from "./types";

// Create the set of async actions
export const getInfoUser = createAsyncAction(
  types.FETCH_USER_INFO,
  types.FETCH_USER_INFO_SUCCESS,
  types.FETCH_USER_INFO_FAILED
)<UserRequest, UserResponse, any>();
