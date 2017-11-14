import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { List, ListItem } from "react-native-elements";
import BookAvatar from '../components/bookavatar.js';
import MainTabBar from '../components/tabbar.js';

export default class Feed extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const list = [
      {
        name: 'test',
        distance: '1',
        author: 'jimbo',
        rating: '2',
        avatar: 'test'
      }
    ]
    return (
      <View>
        {/* <MainTabBar /> */}
        <List subtitleStyle={styles.subtitle} containerStyle={styles.feedList}>
          {
              list.map((book, i) => {
                return(
                  <TouchableOpacity activeOpacity={0.5}>
                  <BookAvatar
                  key={i}
                  avatar={book.avatar}
                  name={book.name}
                  distance={book.distance}
                  author={book.author}
                  rating={book.rating}
                />
              </TouchableOpacity>
              )})
          }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    feedList : {
      backgroundColor: '#FF6659',
    },
    subtitle: {
      color: 'white',
    }
});
