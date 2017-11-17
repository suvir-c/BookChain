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
  render() {
    const list = [
      {
        name: "test",
        distance: "1",
        author: "jimbo",
        rating: "2",
        avatar: "test"
      }
    ];
    const buttons = ["Users", "Books"];
    const { selectedIndex } = this.state;
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
        />
        <View>
          {this.state.selectedIndex == 1 && (
            <List containerStyle={styles.searchList}>
              {this.props.books.map((result, i) => {
                return (
                  <TouchableOpacity activeOpacity={0.5}>
                    <BookAvatar
                      key={i}
                      avatar={result.avatar}
                      name={result.name}
                      distance={result.distance}
                      author={result.author}
                      rating={result.rating}
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
