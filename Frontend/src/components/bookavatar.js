import React from "react";
import { View, Text } from "react-native";
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
          roundAvatar
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
