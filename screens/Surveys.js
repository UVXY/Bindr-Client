
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View} from 'native-base';
import {
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import PicturePicker from '../components/PicturePicker';
import Roulette from '../components/Roulette';
 

export default class CardShowcaseExample extends Component {
  state = {
    bookSearch: "",
    books: [],
    user: null
  }
  
  handleInputChange = (search) => {
    this.setState({bookSearch: search})
  }
  
  render() {
    return (
    <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <PicturePicker/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});