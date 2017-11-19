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
      let newState = Object.assign({}, state);
      newState.user.books.splice(action.index, 1);
      return newState;
    default:
      return state;
  }
  return state;
};

export default authReducer;
