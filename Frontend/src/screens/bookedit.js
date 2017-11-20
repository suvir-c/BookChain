import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button, FormInput, FormLabel } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { getCoverForBook } from "../api/googlebooks";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";

export default class BookEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        title: "",
        author: "",
        rating: 0
      }
    };
  }
  updateBook(update) {
    let newBook = {
      ...this.state.book,
      ...update
    };
    this.setState({ book: newBook });
  }
  createBook() {
    getCoverForBook(this.state.book.title).then(cover => {
      this.props.createBook({
        ...this.state.book,
        cover
      });
      Actions.pop();
    });
  }
  render() {
    let radio_props = [
      { label: "1", value: 1 },
      { label: "2", value: 2 },
      { label: "3", value: 3 },
      { label: "4", value: 4 },
      { label: "5", value: 5 }
    ];
    return (
      <View style={styles.container}>
        <FormLabel labelStyle={styles.input}>Title</FormLabel>
        <FormInput
          inputStyle={styles.input}
          onChangeText={title => this.updateBook({ title })}
        />
        <FormLabel labelStyle={styles.input}>Author</FormLabel>
        <FormInput
          inputStyle={styles.input}
          onChangeText={author => this.updateBook({ author })}
        />
        <View style={styles.center}>
          <RadioForm
            radio_props={radio_props}
            initial={1}
            formHorizontal={true}
            labelHorizontal={true}
            onPress={rating => {
              this.updateBook({ rating });
            }}
          />
        </View>
        <View>
          <Button
            raised
            buttonStyle={styles.button}
            title="CREATE BOOK"
            onPress={() => this.createBook()}
          />
        </View>
      </View>
    );
  }
}
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF6659"
  },
  button: {
    backgroundColor: "#03a9f4"
  },
  input: {
    color: "white"
  },
  center: {
    justifyContent: "center",
    alignItems: "stretch",
    width: width * 0.9
  }
});
