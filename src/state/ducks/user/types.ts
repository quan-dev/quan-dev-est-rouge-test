export const FETCH_USER_INFO = "user/info";
export const FETCH_USER_INFO_SUCCESS = "user/info_success";
export const FETCH_USER_INFO_FAILED = "user/info_failed";

export type EmployeeAction =
  | typeof FETCH_USER_INFO
  | typeof FETCH_USER_INFO_SUCCESS
  | typeof FETCH_USER_INFO_FAILED;
