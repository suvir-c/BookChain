import Feed from "../screens/feed";
import React from "react";
import { getNearbyBooks } from "../actions/book";
import { connect } from "react-redux";
class FeedRoute extends React.Component {
  render() {
    let { getNearbyBooks, books } = this.props;
    return <Feed getNearbyBooks={getNearbyBooks} books={books} />;
  }
}
const mapStateToProps = state => {
  return {
    books: state.book.books
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getNearbyBooks: () => dispatch(getNearbyBooks())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedRoute);
