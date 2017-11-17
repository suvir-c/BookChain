import { SET_BOOKS, SET_USERS } from "../constants";

const initialState = {
  books: [],
  users: []
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return Object.assign({}, state, {
        books: action.books
      });
    case SET_USERS:
      return Object.assign({}, state, {
        users: action.users
      });
    default:
      return state;
  }
};

export default searchReducer;
