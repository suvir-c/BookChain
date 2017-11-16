import {
  FETCH_LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from "../constants/index";

const authReducer = (state, action) => {
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

    default:
      return {
        user: {
          email: "initial.js"
        }
      };
  }
};

export default authReducer;
