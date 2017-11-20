import React from "react";
import { Container } from "../mixins";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    };
  }
  register() {
    let name = this.state.firstName + " " + this.state.lastName;
    this.props.register(this.state.email, this.state.password, name);
  }
  toLogin() {
    Actions.push("login");
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>BookChain</Text>
          <Text style={styles.subtitleText}>
            Decentralized, peer-to-peer book sharing
          </Text>
        </View>
        <View style={styles.loginWrapper}>
          <View style={styles.loginInputWrapper}>
            <View style={styles.loginPreviewWrapper}>
              <Text style={styles.loginPreview}>Email</Text>
            </View>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              style={styles.loginInput}
              onChangeText={email => this.setState({ email })}
            />
          </View>
          <View style={styles.loginInputWrapper}>
            <View style={styles.loginPreviewWrapper}>
              <Text style={styles.loginPreview}>First Name</Text>
            </View>
            <TextInput
              autoCorrect={false}
              style={styles.loginInput}
              onChangeText={firstName => this.setState({ firstName })}
            />
          </View>
          <View style={styles.loginInputWrapper}>
            <View style={styles.loginPreviewWrapper}>
              <Text style={styles.loginPreview}>Last Name</Text>
            </View>
            <TextInput
              autoCorrect={false}
              style={styles.loginInput}
              onChangeText={lastName => this.setState({ lastName })}
            />
          </View>
          <View style={styles.loginInputWrapper}>
            <View style={styles.loginPreviewWrapper}>
              <Text style={styles.loginPreview}>Password</Text>
            </View>
            <TextInput
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              style={styles.loginInput}
              onChangeText={password => this.setState({ password })}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => this.register()}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SIGNUP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={this.toLogin}>
          <View style={styles.createAccountWrapper}>
            <Text style={styles.createAccountButton}>
              Already have an account? Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C43E38"
  },
  titleWrapper: {
    paddingVertical: 50,
    alignItems: "center"
  },
  titleText: {
    fontSize: 40,
    color: "white"
  },
  subtitleText: {
    fontSize: 12,
    color: "white"
  },
  loginWrapper: {
    paddingVertical: 50
  },
  loginInputWrapper: {
    paddingVertical: 10,
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#3F9488"
  },
  loginPreviewWrapper: {
    alignItems: "flex-start"
  },
  loginPreview: {
    fontSize: 12,
    color: "white"
  },
  loginInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: "white"
  },
  button: {
    backgroundColor: "#3F9488",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  createAccountWrapper: {
    paddingVertical: 20,
    alignItems: "center"
  },
  createAccountButton: {
    fontSize: 15,
    color: "white"
  }
});
