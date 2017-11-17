import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { List, ListItem } from "react-native-elements";
import BookAvatar from "../components/bookavatar.js";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    props.getBooksNearby();
  }
  render() {
    return (
      <View style={styles.listWrapper}>
        <List containerStyle={styles.feedList}>
          {this.props.books.map((book, i) => {
            return (
              <TouchableOpacity activeOpacity={0.5}>
                <BookAvatar
                  key={i}
                  avatar={book.avatar}
                  name={book.name}
                  distance={book.distance}
                  author={book.author}
                  rating={book.rating}
                />
              </TouchableOpacity>
            );
          })}
        </List>
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
