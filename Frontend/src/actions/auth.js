import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from "../constants";
import { callLoginApi, callRegisterApi } from "../api/auth";

export function login(email, pass) {
  return dispatch => {
    callLoginApi(email, pass).then(data => {
      if (data.user) {
        dispatch(loginSuccess(data.user));
      } else {
        dispatch(loginFailure());
      }
    });
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  };
}
export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

export function register(email, pass) {
  return dispatch => {
    callRegisterApi(email, pass).then(data => {
      if (data.user) {
        dispatch(loginSuccess(data.user));
      } else {
        dispatch(loginFailure());
      }
    });
  };
}

export function registerSuccess(user) {
  return {
    type: REGISTER_SUCCESS,
    user
  };
}
export function registerFailure() {
  return {
    type: REGISTER_FAILURE
  };
}
