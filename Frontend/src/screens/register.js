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
import { Actions } from "react-native-router-flux";
import {
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from "react-native-elements";

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
        <FormLabel labelStyle={styles.input}>Email</FormLabel>
        <FormInput
          inputStyle={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={email => this.setState({ email })}
        />
        <FormLabel labelStyle={styles.input}>First Name</FormLabel>
        <FormInput
          inputStyle={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />
        <FormLabel labelStyle={styles.input}>First Name</FormLabel>
        <FormInput
          inputStyle={styles.input}
          autoCorrect={false}
          onChangeText={firstName => this.setState({ firstName })}
        />
        <FormLabel labelStyle={styles.input}>Last Name</FormLabel>
        <FormInput
          inputStyle={styles.input}
          autoCorrect={false}
          onChangeText={firstName => this.setState({ firstName })}
        />
        <View style={styles.buttonContainer}>
          <Button
            raised
            buttonStyle={styles.button}
            onPress={() => this.register()}
            title="SIGN UP"
          />
        </View>
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
  buttonContainer: {
    marginTop: 25
  },
  subtitleText: {
    fontSize: 12,
    color: "white"
  },
  button: {
    backgroundColor: "#03A9F4",
    alignItems: "center",
    justifyContent: "center"
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
  },
  input: {
    color: "white"
  }
});
