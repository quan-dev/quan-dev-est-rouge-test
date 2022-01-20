import produce, { Draft } from "immer";
import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";

import * as actions from "./actions";
import { initialUserState, UserState } from "./model";

const user = produce(
  (draft: Draft<UserState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.getInfoUser.request): {
        draft.info.loading = true;
        return draft;
      }
      case getType(actions.getInfoUser.success): {
        draft.info.loading = true;
        draft.info.response = action.payload;
        return draft;
      }
      case getType(actions.getInfoUser.failure): {
        draft.info.loading = false;
        draft.info.errors = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialUserState
);

export default combineReducers({ user });
