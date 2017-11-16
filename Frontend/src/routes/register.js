import Register from "../screens/register";
import React from "react";
import { register } from "../actions/auth";
import { connect } from "react-redux";
class RegisterRouter extends React.Component {
  render() {
    let { auth, register } = this.props;
    return <Register auth={auth} register={register} />;
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: (email, pass) => dispatch(register(email, pass))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterRouter);
