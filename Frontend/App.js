import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform } from "react-native";
import { Container } from "./src/mixins";
import Routes from "./src/routes";
import { Router, Stack, Scene } from "react-native-router-flux";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import Reducer from "./src/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

console.disableYellowBox = true;

const ConnectedRouter = connect()(Router);
const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.statusBar}>
            <StatusBar backgroundColor={"transparent"} translucent />
          </View>
          <ConnectedRouter>
            <Stack key="root">
              <Scene
                key="login"
                component={Routes.Login}
                title="Login"
                hideNavBar
                initial={true}
              />
              <Scene
                key="register"
                component={Routes.Register}
                title="Register"
                hideNavBar
              />
              <Scene
                key="tabview"
                component={Routes.TabView}
                headerMode="none"
                hideNavBar
              />
              <Scene key="chat" component={Routes.Chat} />
              <Scene key="userview" component={Routes.UserView} />
              <Scene key="bookview" component={Routes.BookView} />
              <Scene key="bookedit" component={Routes.BookEdit} />
              <Scene
                key="guest"
                title={"Nearby Books"}
                component={Routes.Guest}
              />
            </Stack>
          </ConnectedRouter>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight,
    backgroundColor: "#FF6659"
  }
});
