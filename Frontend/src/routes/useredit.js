import UserEdit from "../screens/useredit";
import React from "react";
import { connect } from "react-redux";
import { deleteBook, createBook } from "../actions/auth";
class UserEditRoute extends React.Component {
  render() {
    console.log("props updated");
    let { user, deleteBook, books, createBook } = this.props;
    return (
      <UserEdit
        user={user}
        books={books}
        deleteBook={deleteBook}
        createBook={createBook}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    books: state.auth.user.books
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteBook: (bookID, index) => dispatch(deleteBook(bookID, index)),
    createBook: (userID, book) => dispatch(createBook(userID, book))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditRoute);
