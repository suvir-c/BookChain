import React from "react";
import { StyleSheet, Text, View, List, ListItem } from "react-native";
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
        <BookAvatar
          avatar="test"
          name="jimbo"
          distance="1"
          author="jack"
          rating="3"
        />
        {/* <List>
          {
              list.map((book, i) => {

                return( <BookAvatar
                  key={i}
                  avatar={book.avatar}
                  name={book.name}
                  distance={book.distance}
                  author={book.author}
                  rating={book.rating}
                />
              )})
          }
        </List> */}
      </View>
    );
  }
}
