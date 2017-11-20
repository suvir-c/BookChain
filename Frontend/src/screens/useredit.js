import React from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  Text,
  Avatar,
  FormLabel,
  FormInput,
  List
} from "react-native-elements";
import { container, labelStyle, inputStyle } from "../mixins";
import BookAvatarRemove from "../components/bookavatarremove";
import { Actions } from "react-native-router-flux";
import ActionButton from "react-native-action-button";
export default class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name ? props.user.name : "Please Enter your name",
      books: props.user.books
    };
  }
  componentWillReceiveProps() {
    console.log("props updated");
  }
  toBookView(book) {
    Actions.push("bookview", { book });
  }
  getInitials() {
    return this.state.name.split(" ")[0][0] + this.state.name.split(" ")[1][0];
  }
  toCreateBookView() {
    let createBook = this.props.createBook.bind(this, this.props.user.userID);
    Actions.push("bookedit", { createBook });
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View>
          <View style={styles.editContainer}>
            <Avatar
              large
              rounded
              title={this.getInitials()}
              activeOpacity={0.7}
            />
            <Text style={styles.subheader}>
              Hello, {"\n"}
              {this.props.user.name}
            </Text>
          </View>
        </View>
        <View style={styles.fullWidth}>
          <Text style={styles.subheader}>Books</Text>
          <List
            subtitleStyle={styles.subtitle}
            containerStyle={styles.feedList}
          >
            {this.props.user.books &&
              this.props.user.books.map((book, i) => {
                return (
                  <BookAvatarRemove
                    onPress={() => this.toBookView(book)}
                    key={i}
                    avatar={book.avatar}
                    name={book.name}
                    cover={book.cover}
                    distance={book.distance}
                    author={book.author}
                    deleteBook={() => this.props.deleteBook(book.id, i)}
                    rating={book.rating}
                  />
                );
              })}
          </List>
        </View>
        <ActionButton
          buttonColor="rgba(128,203,196,1)"
          onPress={() => {
            this.toCreateBookView();
          }}
        />
      </ScrollView>
    );
  }
}
const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    ...container,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  header: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 100
  },
  editContainer: {
    flex: 0,
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  nameInput: {
    width: width * 0.5,
    paddingHorizontal: 10
  },
  labelStyle: {
    ...labelStyle
  },
  inputStyle: {
    ...inputStyle,
    width: width * 0.4
  },
  subheader: {
    color: "white",
    fontSize: 30,
    left: 10
  },
  subtitle: {
    color: "white"
  },
  fullWidth: {
    width: width * 0.9
  },
  feedList: {
    backgroundColor: "#D32F2F"
  }
});
