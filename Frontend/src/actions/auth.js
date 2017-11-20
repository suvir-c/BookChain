import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_SUCCESS
} from "../constants";
import { callLoginApi, callRegisterApi } from "../api/auth";
import { Actions } from "react-native-router-flux";
import { REMOVE_BOOK, CREATE_BOOK } from "../constants";
import { deleteBookApi, callCreateBookApi } from "../api/book";

export function login(email, pass) {
  console.log("login action called");
  return dispatch => {
    console.log("login action dispatched");
    return callLoginApi(email, pass)
      .then(data => {
        if (data) {
          Actions.push("tabview");
          return dispatch(loginSuccess(data));
        }
        return dispatch(loginFailure());
      })
      .catch(console.log);
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
export function createBook(userID, book) {
  return dispatch => {
    return callCreateBookApi(userID, book).then(() => {
      dispatch(createBookAction(book));
    });
  };
}
export function createBookAction(book) {
  return {
    type: CREATE_BOOK,
    book
  };
}

export function register(email, pass, longitude, latitude) {
  return dispatch => {
    return callRegisterApi(email, pass, longitude, latitude).then(data => {
      if (data) {
        console.log("made it here");
        Actions.push("tabview");
        return dispatch(loginSuccess(data));
      } else {
        return dispatch(loginFailure());
      }
    });
  };
}

export function deleteBook(bookID, bookIndex) {
  return dispatch => {
    return deleteBookApi(bookID).then(data => {
      dispatch(deleteBookAction(bookIndex));
    });
  };
}

export function deleteBookAction(bookIndex) {
  return {
    type: REMOVE_BOOK,
    index: bookIndex
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
