import React from "react";
import { Container } from "../mixins";
import { Button } from 'react-native-elements';
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
} from 'react-native';
export default class Login extends React.Component {
  render() {
    return (
        <View>
            <View>
                <View>
                    <View style={styles.loginPreviewWrapper}>
                        <Text style={styles.loginPreview}>Email</Text>
                    </View>
                    <TextInput style={styles.loginInput}/>
                </View>
                <View>
                    <View style={styles.loginPreviewWrapper}>
                        <Text style={styles.loginPreview}>Password</Text>
                    </View>
                    <TextInput style={styles.loginInput}/>
                </View>
            </View>
            <TouchableOpacity activeOpacity={.5}>
                <View>
                    <Text style={styles.buttonText} >LOGIN</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>GUEST</Text>
                </View>
            </TouchableOpacity>

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginPreviewWrapper: {
    alignItems: "flex-start",
  }
  loginPreview: {
    fontSize: 12,
  },
  loginInput: {
    flex: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#3F9488',
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: 'FFF',
    fontSize: 20,
  }
});
