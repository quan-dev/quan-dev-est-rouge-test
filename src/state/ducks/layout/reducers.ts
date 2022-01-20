import produce, { Draft } from "immer";
import { combineReducers } from "redux";
import { ActionType, getType } from "typesafe-actions";

import * as actions from "./actions";
import { initialLayoutState, LayoutState } from "./model";

const layout = produce(
  (draft: Draft<LayoutState>, action: ActionType<typeof actions>) => {
    switch (action.type) {
      case getType(actions.setClassnameSlidebar): {
        draft.classSlideBar = action.payload;
        return draft;
      }
      default: {
        return draft;
      }
    }
  },
  initialLayoutState
);

export default combineReducers({ layout });
