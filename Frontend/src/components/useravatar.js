import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Avatar, ListItem } from "react-native-elements";
export default class UserAvatar extends React.Component {
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
          avatar={this.props.avatar}
          title={this.props.name}
          subtitle={this.props.email}
        />
      </View>
    );
  }
}

UserAvatar.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
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
