import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Avatar, ListItem, Icon } from "react-native-elements";
export default class BookAvatarRemove extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        style={styles.listItemStyle}
        // onPress={() => this.props.onPress()}
        roundAvatar
        rightIcon={{ name: "remove-circle", color: "pink" }}
        onPressRightIcon={() => this.props.deleteBook()}
        avatar={{ uri: this.props.cover }}
        title={this.props.name}
        subtitle={
          this.props.author +
          " | " +
          this.props.rating +
          " stars | " +
          this.props.distance +
          "MI"
        }
        subtitleStyle={styles.fontWhite}
        titleStyle={styles.fontWhite}
      />
    );
  }
}

BookAvatarRemove.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  deleteBook: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  listItemStyle: {
    backgroundColor: "#FF6659",
    color: "white",
    borderColor: "white"
  },
  fontWhite: {
    color: "white"
  }
});
