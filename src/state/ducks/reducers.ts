import { combineReducers } from "redux";

import blogsReducers from "./blogs/reducers";
import layoutReducers from "./layout/reducers";
import userReducers from "./user/reducers";

// export { default as session } from './session';

export const rootReducers = combineReducers({
  user: userReducers,
  layout: layoutReducers,
  blogs: blogsReducers,
  // session,
});

export type IRootState = ReturnType<typeof rootReducers>;
