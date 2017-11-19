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
    return this.state.name.split(" ")[0][0] + this.state.name.split(" ")[0][1];
  }

  navigateToBook() {}
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View>
          <View style={styles.header}>
            <Text h4> Edit Profile </Text>
          </View>
          <View style={styles.editContainer}>
            <Avatar
              large
              rounded
              title={this.getInitials()}
              activeOpacity={0.7}
            />
            <View style={styles.nameInput}>
              <FormLabel labelStyle={styles.labelStyle}>Name</FormLabel>
              <FormInput
                inputStyle={styles.inputStyle}
                placeholder={this.state.name}
                autoFocus={false}
              />
            </View>
          </View>
        </View>
        <View style={styles.fullWidth}>
          <Text style={styles.subheader}>Books</Text>
          <List
            subtitleStyle={styles.subtitle}
            containerStyle={styles.feedList}
          >
            {this.props.user.books.map((book, i) => {
              return (
                <BookAvatarRemove
                  onPress={() => this.toBookView(book)}
                  key={i}
                  avatar={book.avatar}
                  name={book.name}
                  distance={book.distance}
                  author={book.author}
                  deleteBook={() => this.props.deleteBook(book.id, i)}
                  rating={book.rating}
                />
              );
            })}
          </List>
        </View>
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
    fontSize: 22
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
