import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { Avatar } from "react-native-elements";
export default class BookAvatar extends React.Component {
  render() {
    return (
      <View>
        <Text> This is a book</Text>
      </View>
    );
  }
}

BookAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired
};
