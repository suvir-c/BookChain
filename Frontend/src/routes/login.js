import Login from "../screens/login";
import React from "react";
import { login } from "../actions/auth";
import { connect } from "react-redux";

class LoginRouter extends React.Component {
  render() {
    let { auth, login } = this.props;
    return <Login auth={auth} login={login} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRouter);
