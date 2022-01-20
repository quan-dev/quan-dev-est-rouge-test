import { all, call, put, takeLatest } from "redux-saga/effects";

import { API_ENDPOINTS } from "../../../config/api-endpoints/blogs";
import { PAGINATION } from "../../../constant/pagination";
import { axiosInstance } from "../../utils/axios";
import * as actions from "./actions";

// Handle request saga
function* getBlogList(
  action: ReturnType<typeof actions.getBlogList.request>
): Generator {
  try {
    const { limit, page, search } = action.payload;
    const pageParam = `page=${page || "1"}`;
    const searchParam = search ? `&search=${search}` : "";
    const url = `${API_ENDPOINTS.list}?${pageParam}${searchParam}&limit=${
      limit ? limit : PAGINATION.PER_PAGE
    }`;

    const response = yield call(() => axiosInstance.get(url));
    yield put(actions.getBlogList.success((response as any).data));
  } catch (err) {
    yield put(actions.getBlogList.failure(err));
  }
}

// Handle request saga
function* getBlogDetail(
  action: ReturnType<typeof actions.getBlogDetail.request>
): Generator {
  try {
    const { id } = action.payload;

    const response = yield call(() =>
      axiosInstance.get(`${API_ENDPOINTS.detail.replace("{id}", id)}`)
    );
    yield put(actions.getBlogDetail.success((response as any).data));
  } catch (err) {
    yield put(actions.getBlogDetail.failure(err));
  }
}

// Main saga
export default function* employeeSaga() {
  yield all([takeLatest(actions.getBlogList.request, getBlogList)]);
  yield all([takeLatest(actions.getBlogDetail.request, getBlogDetail)]);
}
