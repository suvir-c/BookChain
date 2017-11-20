import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Button, FormInput, FormLabel } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { getCoverForBook } from "../api/googlebooks";
import { Slider } from "react-native-slider";
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
          <Slider
            minimumValue={0}
            maximumValue={5}
            step={1}
            value={this.state.book.rating}
            onValueChange={rating => this.updateBook({ rating })}
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
  slider: {
    backgroundColor: "white"
  },
  center: {
    justifyContent: "center",
    alignItems: "stretch",
    width: width * 0.9
  }
});
