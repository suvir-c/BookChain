import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Avatar, ListItem, Icon } from "react-native-elements";
export default class BookAvatar extends React.Component {
  constructor(props) {
    super(props);
  }
  deleteBook() {}
  render() {
    return (
      <View>
        <ListItem
          style={styles.listItemStyle}
          roundAvatar
          rightIcon={<Icon name="remove-circle" color="pink" />}
          onPressRightIcon={this.deleteBook}
          avatar={this.props.avatar}
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
      </View>
    );
  }
}

BookAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
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
