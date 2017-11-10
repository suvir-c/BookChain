import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./src/mixins";
import Routes from "./src/routes";
import { Router, Stack, Scene } from "react-native-router-flux";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={Routes.Login} title="Login" />
          <Scene key="register" component={Routes.Register} title="Register" />
          <Scene key="tabview" component={Routes.TabView} />
          <Scene key="chat" component={Routes.Chat} />
          <Scene key="userview" component={Routes.UserView} />
          <Scene key="bookview" component={Routes.BookView} />
          <Scene key="bookedit" component={Routes.BookEdit} />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Container
  }
});
