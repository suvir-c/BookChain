import Feed from "../screens/feed";
import React from "react";
import { getBooksNearby } from "../actions/book";
import { connect } from "react-redux";
class FeedRoute extends React.Component {
  render() {
    let { getBooksNearby, books } = this.props;
    return <Feed getBooksNearby={getBooksNearby} books={books} />;
  }
}
const mapStateToProps = state => {
  return {
    books: state.book.books
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getBooksNearby: () => dispatch(getBooksNearby())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedRoute);
