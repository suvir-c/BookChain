import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  Dimensions,
  TextInput
} from "react-native";
import { Text, Avatar, FormLabel, FormInput } from "react-native-elements";
import { container, labelStyle, inputStyle } from "../mixins";
export default class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name ? props.name : "Please Enter your name"
    };
  }
  render() {
    const book = {
      name: "Some Book",
      author: "Jimbo",
      rating: 2
    };
    const books = [0, 0, 0, 0, 0].map(() => book);

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View>
          <View style={styles.header}>
            <Text h4> Edit Profile </Text>
          </View>
          <View style={styles.editContainer}>
            <Avatar
              large
              rounded
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"
              }}
              activeOpacity={0.7}
            />
            <View style={styles.nameInput}>
              <FormLabel labelStyle={styles.labelStyle}>Name</FormLabel>
              <FormInput
                inputStyle={styles.inputStyle}
                placeholder={this.state.name}
                autoFocus={false}
              />
            </View>
          </View>
        </View>
        <View>
          <Text>Books</Text>
        </View>
      </View>
    );
  }
}
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    ...container,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  editContainer: {
    flex: 0,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nameInput: {
    width: width * 0.5,
    paddingHorizontal: 10
  },
  labelStyle: {
    ...labelStyle
  },
  inputStyle: {
    ...inputStyle,
    width: width * 0.4
  }
});
