import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container, Content, Card, CardItem, Text
} from 'native-base';
import Header from '../components/Header';
import Board from '../components/WordsearchBoard';

const width = 375;
const size = 5; // four-by-four grid
const cellSize = Math.floor(width * 0.2); // 20% of the screen width

export default class Wordsearch extends Component {
  static navigationOptions = {
    header: Header
  };

  render() {
    return (
      <View style={styles.container}>
        <Board />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62'
  }
});
