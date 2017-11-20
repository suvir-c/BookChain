import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { Card, List } from "react-native-elements";
import { container } from "../mixins";
import BookAvatar from "../components/bookavatar.js";
import { Actions } from "react-native-router-flux";

export default class UserView extends React.Component {
  constructor(props) {
    super(props);
  }
  toBookView(book) {
    Actions.push("bookview", { book });
  }
  render() {
    const { user, books } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Card title="user" containerStyle={styles.card}>
          <Text>{user.name}</Text>
          <Text>{user.distance} miles away</Text>
        </Card>
        <List containerStyle={styles.bookList}>
          {this.props.books.map((book, i) => {
            return (
              <TouchableOpacity
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
      </View>
    );
  }
}

UserView.defaultProps = {
  books: [
    {
      name: "Test Book (Default Props)",
      author: "Jimbo bob",
      rating: 4
    }
  ],
  user: {
    name: "Test User (Default Props)",
    distance: 2,
    rating: 4
  }
};

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    ...container,
    justifyContent: "flex-start"
  },
  bookList: {
    backgroundColor: "#FF6659"
  },
  card: {
    width: width * 0.95
  }
});
