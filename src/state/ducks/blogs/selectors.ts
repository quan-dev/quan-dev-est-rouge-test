import { createSelector } from "reselect";

import { StateAll } from "../models";
import { BlogsState, initialBlogsState } from "./models";

const rootSelector = (state: StateAll) =>
  state.blogs.blogs || initialBlogsState;

export const getBlogList = createSelector(
  rootSelector,
  (blockState: BlogsState) => {
    return blockState.blogs ? blockState.blogs : initialBlogsState.blogs;
  }
);
