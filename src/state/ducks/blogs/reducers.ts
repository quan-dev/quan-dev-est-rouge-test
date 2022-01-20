import produce, { Draft } from "immer";
import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";

import * as actions from "./actions";
import { BlogsState, initialBlogsState } from "./models";

const blogs = produce(
  (draft: Draft<BlogsState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getBlogList.request): {
        draft.blogs.loading = true;
        return draft;
      }
      case getType(actions.getBlogList.success): {
        draft.blogs.loading = false;
        draft.blogs.response = action.payload;
        return draft;
      }
      case getType(actions.getBlogList.failure): {
        draft.blogs.loading = false;
        draft.blogs.errors = action.payload;
        return draft;
      }
      case getType(actions.getBlogDetail.request): {
        draft.detail.loading = true;
        return draft;
      }
      case getType(actions.getBlogDetail.success): {
        draft.detail.loading = false;
        draft.detail.response = action.payload;
        return draft;
      }
      case getType(actions.getBlogDetail.failure): {
        draft.detail.loading = false;
        draft.detail.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialBlogsState
);

export default combineReducers({ blogs });
