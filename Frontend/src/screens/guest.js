import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Feed from "../routes/feed";
import { Container } from "../mixins";

export default class Guest extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Container,
    flex: 1
  }
});
