import Register from "../screens/register";
import React from "react";
import { register } from "../actions/auth";
import { connect } from "react-redux";
export default class RegisterRouter extends React.Component {
  render() {
    let { auth } = this.props;
    return <Register auth={auth} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRouter);
