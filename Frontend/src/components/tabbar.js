import React from "react";
import { TabBar } from "react-native-tab-view";
import { StyleSheet } from "react-native";

export default class MainTabBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TabBar
        {...this.props}
        style={styles.TabBar}
        indicatorStyle={styles.Indicator}
      />
    );
  }
}

const styles = StyleSheet.create({
  TabBar: {
    backgroundColor: "#FF6659"
  },
  Indicator: {
    backgroundColor: "#fff"
  }
});
