import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image
} from "react-native";
import { container } from "../mixins";

import { Card, Avatar } from "react-native-elements";
import { Actions } from "react-native-router-flux";

export default class BookView extends React.Component {
  constructor(props) {
    super(props);
  }
  getInitials(name) {
    return (name.split(" ")[0][0] + name.split(" ")[1][0]).toUpperCase();
  }
  toUserView() {
    let { user } = this.props;
    Actions.push("userview", { user, books: user.books });
  }
  render() {
    const { book, user } = this.props;
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          <View style={styles.bookcard}>
            <View style={styles.leftcard}>
              <Text style={styles.title}>{book.title}</Text>
              <Text>By {book.author}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                style={styles.image}
                source={{ uri: book.cover }}
              />
            </View>
          </View>
        </Card>
        <Card containerStyle={styles.card} onPress={() => this.toUserView()}>
          <View style={styles.bookcard}>
            <View style={styles.leftcard}>
              <Text style={styles.title}>{user.name}</Text>
              <Text>Gave the book {book.rating} stars.</Text>
              <Text>Reach them at: {user.username}</Text>
            </View>
            <View style={styles.imageContainer}>
              <Avatar
                xlarge
                rounded
                title={this.getInitials(user.name)}
                onPress={() => this.toUserView()}
                activeOpacity={0.7}
              />
            </View>
          </View>
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
    width: width * 0.95,
    height: 200
  },
  leftcard: {
    flex: 2
  },
  image: {
    width: 100,
    height: 150
  },
  imageContainer: {
    flex: 1,
    height: 165,
    justifyContent: "center",
    alignItems: "center"
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
