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
