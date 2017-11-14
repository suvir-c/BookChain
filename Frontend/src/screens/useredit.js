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
import BookAvatar from "../components/bookavatarremove";
export default class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name ? props.name : "Please Enter your name"
    };
  }
  navigateToBook() {}
  render() {
    const book = {
      name: "Some Book",
      distance: "1",
      author: "Jimbo",
      rating: "2",
      avatar: "test"
    };
    const books = [0, 0, 0, 0, 0].map(() => book);
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
              source={{
                uri:
                  "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"
              }}
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
            {books.map((book, i) => {
              return (
                <TouchableOpacity activeOpacity={0.5} key={i}>
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
