import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { Actions } from "react-native-router-flux";
export default class BookEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        name: "",
        author: "",
        rating: 0
      }
    };
  }
  createBook() {
    this.props.createBook(this.state.book);
    Actions.pop();
  }
  render() {
    return (
      <View>
        <Text>Book Edit</Text>
        <Button raised title="CREATE BOOK" onPress={() => this.createBook()} />
      </View>
    );
  }
}
