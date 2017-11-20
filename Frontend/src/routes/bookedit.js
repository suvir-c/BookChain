import BookEdit from "../screens/bookedit";
import React from "react";
export default class BookEditRoute extends React.Component {
  render() {
    return <BookEdit {...this.props} />;
  }
}
