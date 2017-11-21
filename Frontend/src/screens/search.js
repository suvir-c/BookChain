import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  List,
  ListItem,
  SearchBar,
  ButtonGroup,
  CheckBox
} from "react-native-elements";
import BookAvatar from "../components/bookavatar.js";
import UserAvatar from "../components/useravatar.js";
import { Actions } from "react-native-router-flux";
import { getUserById } from "../api/user";
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1
    };
    this.updateIndex = this.updateIndex.bind(this);
  }
  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }
  toBookView(book) {
    getUserById(book.ownerID).then(user => {
      Actions.push("bookview", { book, user });
    });
  }
  toUserView(user) {
    Actions.push("userview", { user, books: user.books });
  }
  searchBooks(term) {
    this.props.searchBooks(term);
  }
  searchUsers(term) {
    this.props.searchUsers(term);
  }
  searchOnChange(term) {
    let { selectedIndex } = this.state;
    if (selectedIndex == 0) this.searchUsers(term);
    if (selectedIndex == 1) this.searchBooks(term);
  }
  render() {
    const buttons = ["Users", "Books"];
    const { selectedIndex } = this.state;
    const { search } = this.props;
    console.log(search);
    return (
      <View style={styles.screenWrapper}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 25 }}
        />
        <SearchBar
          selectedBackgroundColor="white"
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInput}
          onChangeText={text => this.searchOnChange(text)}
        />
        <View>
          {search.books &&
            this.state.selectedIndex == 1 && (
              <List containerStyle={styles.searchList}>
                {search.books.map((result, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      activeOpacity={0.5}
                      onPress={book => this.toBookView(book)}>
                      <BookAvatar
                        key={i}
                        cover={result.cover}
                        title={result.title}
                        distance={result.distance}
                        author={result.author}
                        rating={result.rating}
                      />
                    </TouchableOpacity>
                  );
                })}
              </List>
            )}
          {search.users &&
            this.state.selectedIndex == 0 && (
              <List containerStyle={styles.searchList}>
                {search.users.map((user, i) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => this.toUserView(user)}>
                      <UserAvatar
                        key={i}
                        avatar={user.avatar}
                        name={user.name}
                        email={user.username}
                        distance={user.distance}
                      />
                    </TouchableOpacity>
                  );
                })}
              </List>
            )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FF6659"
  },
  searchContainer: {
    backgroundColor: "white",
    borderColor: "white"
  },
  searchSelectorWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  checkBox: {
    height: 25
  },
  searchInput: {
    backgroundColor: "white",
    borderColor: "white"
  },
  searchList: {
    backgroundColor: "#FF6659"
  }
});
