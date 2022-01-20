export type ClassSlideBar = string;

export type LayoutState = {
  classSlideBar: ClassSlideBar;
};

export const initialLayoutState: LayoutState = { classSlideBar: "toggled" };

declare module "./../models" {
  interface StateAll {
    // match to a duck folder
    layout: {
      // match to reducer name, each reducer will be one field in state
      layout: LayoutState;
    };
  }
}
