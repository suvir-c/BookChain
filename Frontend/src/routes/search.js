import Search from "../screens/search";
import React from "react";
import { connect } from "react-redux";
import { searchBooks, searchUsers } from "../actions/search";
class SearchRoute extends React.Component {
  render() {
    let { search, searchBooks, searchUsers } = this.props;
    console.log(search);
    return (
      <Search
        search={search}
        searchBooks={searchBooks}
        searchUsers={searchUsers}
      />
    );
  }
}
const mapStateToProps = state => {
  return {
    search: state.search
  };
};
const mapDispatchToProps = dispatch => {
  return {
    searchUsers: user => dispatch(searchUsers(user)),
    searchBooks: book => dispatch(searchBooks(book))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchRoute);
