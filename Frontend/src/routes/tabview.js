import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { TabViewAnimated, SceneMap } from "react-native-tab-view";

import Feed from "../routes/feed.js";
import UserEdit from "../screens/useredit.js";
import Search from "../screens/search.js";

import TabBar from "../components/tabbar.js";
import { connect } from "react-redux";

class TabView extends PureComponent {
  state = {
    index: 1,
    routes: [
      { key: "0", title: "FEED" },
      { key: "1", title: "USER" },
      { key: "2", title: "SEARCH" }
    ]
  };

  handleIndexChange = index => this.setState({ index });

  renderHeader = props => <TabBar {...props} />;

  renderScene = SceneMap({
    "0": Feed,
    "1": UserEdit,
    "2": Search
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

//Force ReRenders when redux changes
const mapStateToProps = state => {
  return {
    data: state
  };
};
const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(TabView);
