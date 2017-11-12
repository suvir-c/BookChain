import React from "react";
import { TabBar } from "react-native-tab-view";

export default class MainTabBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <TabBar {...this.props} />;
  }
}
