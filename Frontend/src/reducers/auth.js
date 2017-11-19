import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REMOVE_BOOK
} from "../constants/index";

const inititalState = {
  user: {
    email: "test@gmail.com",
    books: []
  }
};

const authReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        user: action.user,
        loginFailure: false
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, { loginFailure: true });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, {
        user: action.user,
        registerFailure: false
      });
    case REGISTER_FAILURE:
      return Object.assign({}, state, { registerFailure: true });
    case REMOVE_BOOK:
      let books = [
        ...state.user.books.slice(0, action.index),
        ...state.user.books.slice(action.index + 1)
      ];
      let newState = Object.assign({}, state);
      newState.ts = new Date().getTime(); // Triggers shallow update
      newState.user.books = books;
      return newState;
    default:
      return state;
  }
  return state;
};

export default authReducer;
