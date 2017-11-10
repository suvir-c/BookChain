import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { TabViewAnimated, SceneMap } from "react-native-tab-view";

import Feed from "../screens/feed.js";
import UserView from "../screens/userview.js";
import ChatList from "../screens/chatlist.js";
import Search from "../screens/search.js";

import TabBar from "../components/tabbar.js";

export default class TabView extends PureComponent {
  status = {
    index: 0,
    routes: [
      { key: "0", title: "FEED" },
      { key: "1", title: "USER" },
      { key: "2", title: "SEARCH" },
      { key: "3", title: "CHAT" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBar />;

  _renderScene = SceneMap({
    "0": Feed,
    "1": UserView,
    "2": ChatList,
    "3": Search
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
