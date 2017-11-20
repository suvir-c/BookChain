import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Avatar, ListItem } from "react-native-elements";
export default class BookAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ListItem
          subtitleStyle={styles.subtitle}
          titleStyle={styles.title}
          style={styles.listItem}
          roundAvatar
          avatar={{ uri: this.props.cover }}
          title={this.props.title}
          subtitle={
            this.props.author +
            " | " +
            this.props.rating +
            " stars | " +
            this.props.distance +
            "MI"
          }
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
  cover: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#FF6659",
    color: "white",
    borderColor: "white"
  },
  title: {
    color: "white"
  },
  subtitle: {
    color: "white"
  }
});
