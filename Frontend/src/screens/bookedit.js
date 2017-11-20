import React from "react";
import { View, Text } from "react-native";
import { Button, Slider, FormInput, FormLabel } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { getCoverForBook } from "../api/googlebooks";
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
  updateBook(update) {
    let newBook = {
      ...this.state.book,
      ...update
    };
    this.setState({ book: newBook });
  }

  createBook() {
    getCoverForBook(this.state.book.name).then(cover => {
      this.props.createBook({
        ...this.state.book,
        cover
      });
      Actions.pop();
    });
  }
  render() {
    return (
      <View>
        <Text>Book Edit</Text>
        <FormLabel>Title</FormLabel>
        <FormInput onChangeText={title => this.updateBook({ name: title })} />
        <FormLabel>Author</FormLabel>
        <FormInput onChangeText={author => this.updateBook({ author })} />
        <Slider
          value={this.state.book.rating}
          minimumValue={0}
          step={1}
          maximumValue={5}
          onValueChange={rating => this.updateBook({ rating })}
        />
        <Button raised title="CREATE BOOK" onPress={() => this.createBook()} />
      </View>
    );
  }
}
