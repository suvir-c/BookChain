import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { List, ListItem } from "react-native-elements";
import BookAvatar from "../components/bookavatar.js";
import { Actions } from "react-native-router-flux";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    props.getNearbyBooks(5);
    // setInterval(props.getBooksNearby, 1000);
  }
  toBookView(book) {
    Actions.push("bookview", { book });
  }
  render() {
    return (
      <View style={styles.listWrapper}>
        {this.props.books && (
          <List containerStyle={styles.feedList}>
            {this.props.books.map((book, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  activeOpacity={0.5}
                  onPress={() => this.toBookView(book)}
                >
                  <BookAvatar
                    key={i}
                    avatar={book.picture}
                    name={book.title}
                    distance={book.distance}
                    author={book.author}
                    rating={book.rating}
                  />
                </TouchableOpacity>
              );
            })}
          </List>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listWrapper: {
    backgroundColor: "#FF6659"
  },
  feedList: {
    backgroundColor: "#FF6659"
  },
  subtitle: {
    color: "white"
  }
});
