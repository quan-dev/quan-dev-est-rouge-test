import { createAction } from "typesafe-actions";

import { ClassSlideBar } from "./model";
import * as types from "./types";

// Create the set actions
export const setClassnameSlidebar = createAction(
  types.SET_CLASS_SLIDEBAR
)<ClassSlideBar>();
