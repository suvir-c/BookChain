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
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  login() {
    this.props.login(this.state.email, this.state.password);
  }
  toRegister() {
    Actions.push("register");
  }
  toGuest() {
    Actions.push("guest");
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
              <Text style={styles.loginPreview}>Password</Text>
            </View>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              style={styles.loginInput}
              onChangeText={password => this.setState({ password })}
            />
          </View>
        </View>
        <Button
          buttonStyle={styles.button}
          raised
          onPress={() => this.login()}
          title="LOGIN"
        />
        <Button
          buttonStyle={styles.button}
          raised
          onPress={this.toGuest}
          title="GUEST"
        />
        <TouchableOpacity activeOpacity={0.5} onPress={this.toRegister}>
          <View style={styles.createAccountWrapper}>
            <Text style={styles.createAccountButton}>
              No account yet? Create one
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
    backgroundColor: "#FF6659"
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
    borderBottomColor: "#03A9F4"
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
    backgroundColor: "#03A9F4",
    marginVertical: 30,
    alignItems: "center",
    justifyContent: "center"
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
