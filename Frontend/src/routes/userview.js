import UserView from "../screens/userview";
import React from "react";
export default class UserViewRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <UserView {...this.props}/>;
  }
}
