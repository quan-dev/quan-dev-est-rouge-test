import { createSelector } from "reselect";

import { StateAll } from "../models";
import { initialLayoutState, LayoutState } from "./model";

const rootSelector = (state: StateAll) =>
  state.layout.layout || initialLayoutState;

export const getClassSlideBar = createSelector(
  rootSelector,
  (layoutState: LayoutState) => {
    return layoutState.classSlideBar;
  }
);
