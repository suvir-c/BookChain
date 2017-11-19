import { ADD_BOOK, REMOVE_BOOK, SET_BOOKS } from "../constants";

const initialState = {
  books: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, {
        books: state.books.concat([action.book])
      });
    case SET_BOOKS:
      return Object.assign({}, state, {
        books: action.books
      });
    default:
      return state;
  }
};

export default bookReducer;
