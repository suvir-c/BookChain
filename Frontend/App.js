import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Container } from "./src/mixins";
import Routes from "./src/routes";
import { Router, Stack, Scene } from "react-native-router-flux";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import Reducer from "./src/reducers";
import devToolsEnhancer from "remote-redux-devtools";

const ConnectedRouter = connect()(Router);
const store = createStore(Reducer, devToolsEnhancer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter>
          <Stack key="root">
            <Scene
              key="login"
              component={Routes.Login}
              title="Login"
              initial={true}
            />
            <Scene
              key="register"
              component={Routes.Register}
              title="Register"
            />
            <Scene
              key="tabview"
              component={Routes.TabView}
              headerMode="none"
              hideNavBar
            />
            <Scene key="chat" component={Routes.Chat} />
            <Scene key="userview" component={Routes.UserView} />
            <Scene key="bookview" component={Routes.BookView} hideNavBar />
            <Scene key="bookedit" component={Routes.BookEdit} />
          </Stack>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...Container
  }
});
