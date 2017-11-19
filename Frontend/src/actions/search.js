import { SET_SEARCH_BOOKS, SET_SEARCH_USERS } from "../constants";
import { callBookSearchApi, callUserSearchApi } from "../api/search";

export function searchBooks(bookname) {
  return dispatch => {
    return callBookSearchApi(bookname, 5)
      .then(data => {
        return dispatch(setSearchBooks(data));
    })
  };
}

export function setSearchBooks(books) {
  return {
    type: SET_SEARCH_BOOKS,
    books
  };
}

export function searchUsers(username) {
  return dispatch => {
    return callUserSearchApi(username)
      .then(data => {
        return dispatch(setSearchUsers(data));
    })
  };
}

export function setSearchUsers(users) {
  return {
    type: SET_SEARCH_USERS,
    users
  };
}
