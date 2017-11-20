import { ADD_BOOK, REMOVE_BOOK, SET_BOOKS } from "../constants";

import { getNearbyBooksApi, deleteBookApi } from "../api/book";

export function getNearbyBooks(userID) {
  return dispatch => {
    return getNearbyBooksApi(userID).then(data => {
      dispatch(setNearbyBooksAction(data));
    })
    .catch((error) => {
      console.log(error);
    });
  };
}
export function addBookAction(book) {
  return {
    type: ADD_BOOK,
    book
  };
}
export function deleteBook(bookID, bookIndex) {
  return dispatch => {
    return deleteBookApi(bookID).then(data => {
      dispatch(deleteBookAction(bookIndex, data));
    });
  };
}

export function setNearbyBooksAction(books) {
  return {
    type: SET_BOOKS,
    books
  };
}

export function deleteBookAction(successful) {
  return {
    type: REMOVE_BOOK,
    successful
  }
}
