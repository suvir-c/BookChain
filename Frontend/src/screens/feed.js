import React from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import { List, ListItem } from "react-native-elements";
import BookAvatar from "../components/bookavatar.js";
import { Actions } from "react-native-router-flux";
import { getUserById } from "../api/user";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      refreshing: false
    };
    props.getNearbyBooks(5);
    // setInterval(props.getNearbyBooks.bind(this, 5), 10000);
  }
  toBookView(book) {
    getUserById(book.ownerID).then(user => {
      Actions.push("bookview", { book, user });
    });
  }
  _onRefresh() {
    this.setState({ refreshing: true });
    this.props.getNearbyBooks(5).then(() => {
      this.setState({ refreshing: false });
    });
  }
  render() {
    return (
      <ScrollView
        style={styles.listWrapper}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
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
                    title={book.title}
                    cover={book.cover}
                    distance={book.distance}
                    author={book.author}
                    rating={book.rating}
                  />
                </TouchableOpacity>
              );
            })}
          </List>
        )}
      </ScrollView>
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
