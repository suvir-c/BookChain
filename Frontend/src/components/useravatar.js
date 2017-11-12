import React from "react";
import { View, Text, ListItem } from "react-native";
import PropTypes from "prop-types";
import { Avatar } from "react-native-elements";
export default class UserAvatar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
          <ListItem
            roundAvatar
            avatar={this.props.avatar}
            title={this.props.name}
            subtitle={{this.props.distance} + " MI"}
          />
      </View>
    );
  }
}

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired
};
