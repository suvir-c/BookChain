import BookView from "../screens/bookview";
import React from "react";
export default class BookViewRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <BookView {...this.props} />;
  }
}
