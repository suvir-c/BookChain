import { SET_SEARCH_BOOKS, SET_SEARCH_USERS } from "../constants";
import { callBookSearchApi, callUserSearchApi } from "../api/search";

export function searchBooks(bookname) {
  return dispatch => {
    return callBookSearchApi(boookname).then(data => {
      dispatch(setSearchBooks(data.books));
    });
  };
}

export function setSearchBooks(books) {
  return {
    type: SET_SEARCH_BOOKS,
    books
  };
}

export function userUsers(username) {
  return dispatch => {
    return callUserSearchApi(username).then(data => {
      dispatch(setSearchBooks(data.users));
    });
  };
}

export function setUserBooks(users) {
  return {
    type: SET_SEARCH_USERS,
    users
  };
}
