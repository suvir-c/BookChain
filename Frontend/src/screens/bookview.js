import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import { container } from "../mixins";

import { Card } from "react-native-elements";

export default class BookView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { book, user } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Card title="book" containerStyle={styles.card}>
          <Text>{book.name}</Text>
          <Text> By {book.author}</Text>
        </Card>
        <Card title="user" containerStyle={styles.card}>
          <Text>{user.name}</Text>
          <Text>{user.distance} Miles Away</Text>
          <Text> Rated the book {book.rating} stars </Text>
        </Card>
      </View>
    );
  }
}

BookView.defaultProps = {
  book: {
    name: "Test Book (Default Props)",
    author: "Jimbo bob",
    rating: 4
  },
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
  card: {
    width: width * 0.95
  }
});
