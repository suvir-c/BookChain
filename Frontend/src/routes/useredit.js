import UserEdit from "../screens/useredit";
import React from "react";
import { connect } from "react-redux";
import { deleteBook } from "../actions/auth";
class UserEditRoute extends React.Component {
  render() {
    console.log("props updated");
    let { user, deleteBook } = this.props;
    return <UserEdit user={user} deleteBook={deleteBook} />;
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteBook: (bookID, index) => dispatch(deleteBook(bookID, index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditRoute);
