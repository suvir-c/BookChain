import { ADD_BOOK, REMOVE_BOOK } from "../constants";

const initialState = {
  books: []
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return Object.assign({}, state, {
        books: state.books.concat([action.book])
      });
    case REMOVE_BOOK:
      return Object.assign({}, state, {
        books: books.splice(action.index, 1)
      });
    default:
      return state;
  }
};
