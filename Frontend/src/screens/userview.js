import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";

export default class UserView extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    props.getBooksNearby();
  }
  render() {
    const user = this.props;
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
                  onPress={() => this.toBookView(book)}>
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
    container: {
      backgroundColor: "#FF6659"
    },
    bookList: {
      backgroundColor: "#FF6659"
    },
    card: {
      width: width * 0.95
    }
});
