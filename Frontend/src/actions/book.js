import { ADD_BOOK, REMOVE_BOOK, SET_BOOKS } from "../constants";

import { getBooksApi, deleteBookApi } from "../api/book";

export function getBooksNearby(location) {
  return dispatch => {
    return getBooksApi(location).then(data => {
      dispatch(setNearbyBooksAction(data.books));
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
      dispatch(deleteBookAction(bookIndex));
    });
  };
}

export function deleteBookAction(bookIndex) {
  return {
    type: REMOVE_BOOK,
    bookID
  };
}
export function setNearbyBooksAction(bookList) {
  return {
    type: SET_BOOKS,
    bookList
  };
}
