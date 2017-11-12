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

export default class Login extends React.Component {
  toRegister() {
    Actions.push("register");
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
              autoCorrect="false"
        			autoCapitalize="none"
        			style={styles.loginInput}
        		/>
          </View>
          <View style={styles.loginInputWrapper}>
            <View style={styles.loginPreviewWrapper}>
              <Text style={styles.loginPreview}>Password</Text>
            </View>
            <TextInput
              autoCapitalize="none"
              autoCorrect="false"
              secureTextEntry="true"
              style={styles.loginInput}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>GUEST</Text>
          </View>
        </TouchableOpacity>
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
