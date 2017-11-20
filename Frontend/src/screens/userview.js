import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Card, List, Avatar } from "react-native-elements";
import { container } from "../mixins";
import BookAvatar from "../components/bookavatar.js";
import { Actions } from "react-native-router-flux";
import { getUserById } from "../api/user";

export default class UserView extends React.Component {
  constructor(props) {
    super(props);
  }
  toBookView(book) {
    getUserById(book.ownerID).then(user => {
      Actions.push("bookview", { book, user });
    });
  }
  getInitials(name) {
    return (name.split(" ")[0][0] + name.split(" ")[1][0]).toUpperCase();
  }
  render() {
    const { user, books } = this.props;
    return (
      <ScrollView style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Card containerStyle={styles.card} onPress={() => this.toUserView()}>
          <View style={styles.bookcard}>
            <View style={styles.leftcard}>
              <Text style={styles.title}>{user.name}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Avatar
                xlarge
                rounded
                title={this.getInitials(user.name)}
                activeOpacity={0.7}
              />
            </View>
          </View>
        </Card>
        <List containerStyle={styles.bookList}>
          {this.props.books.map((book, i) => {
            return (
              <TouchableOpacity
                key={i}
                activityOpacity={0.5}
                onPress={() => this.toBookView(book)}
              >
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
      </ScrollView>
    );
  }
}

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  bookList: {
    backgroundColor: "#FF6659"
  },
  card: {
    width: width * 0.95,
    height: 200
  },
  leftcard: {
    flex: 2
  },
  bookcard: {
    height: 200,
    width: width * 0.85,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "black",
    fontSize: 36,
    fontWeight: "700"
  }
});
