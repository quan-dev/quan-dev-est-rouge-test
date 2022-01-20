import { all, fork } from "redux-saga/effects";

import blogsSaga from "./blogs/sagas";
import employeeSaga from "./user/sagas";

// We `fork()` these tasks so they execute in the background.
export function* rootSagas() {
  yield all([
    fork(employeeSaga),
    fork(blogsSaga),
    // `fork()` any other store sagas down here...
  ]);
}
