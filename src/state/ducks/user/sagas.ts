import { all, call, put, takeLatest } from "redux-saga/effects";

import { API_ENDPOINTS } from "../../../config/api-endpoints/user";
import { axiosInstance } from "../../utils/axios";
import * as actions from "./actions";

// Handle request saga
function* getInfoUser(
  action: ReturnType<typeof actions.getInfoUser.request>
): Generator {
  try {
    const response = yield call(axiosInstance.get, API_ENDPOINTS.info, {
      params: action.payload,
      paramsSerializer: (params: any) => JSON.stringify(params),
    });

    yield put(actions.getInfoUser.success((response as any).data));
  } catch (err) {
    yield put(actions.getInfoUser.failure(err));
  }
}

// Main saga
export default function* employeeSaga() {
  yield all([takeLatest(actions.getInfoUser.request, getInfoUser)]);
}
