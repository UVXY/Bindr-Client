
import React, { Component } from 'react';
import { View } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PicturePicker from '../components/PicturePicker';
import ImageCard from '../components/DataCard';
import Roulette from '../components/Roulette';
import Wordsearch from '../components/WordsearchBoard';
import API from '../utils/API';
import Header from '../components/Header';

export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: Header
  };

  state = {
    images: [],
    tags:[],
    gifSearch: "",
    user: null
  }

  gifArr = [
    "travel", "wandering", "lost", "best", "earliest-list", "favourites", "writer", "sad", "crying", "death", "learning", "technology", "help", "comedy", "funny", "humor", "humour", "satire", "old", "ancient", "storm", "cloudy", "celebrity", "movies", "blond", "fantasy", "sci-fi", "science-fiction", "sf", "classics", "business", "career", "creativity", "fitness", "happiness", "health", "love", "non-fiction", "nonfiction", "productivity", "relationships", "romance", "self-help", "success", "wellness", "baseball", "sports", "book club", "historical", "literary", "summer", "sunny", "clear", "warm", "autumn", "books", "coffee", "creep", "creepy", "dark", "fall", "fireplace", "freaky", "halloween", "leaves", "november", "october", "pumpkin", "rain", "rainy", "reading", "scary", "september", "spooky", "sweater", "tea", "thanksgiving", "intrigue", "mystery", "thriller", "fiction", "seasons", "setting", "weather", "winter", "cold", "warmup"
  ]
  NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

 
  handleGifPress = (search) => {
    this.setState({gifSearch: search})
  }
  picturePicker = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'PicturePicker'
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
          

      <View style={styles.container}>
        <Wordsearch
          picturePicker={this.picturePicker}
        />
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
  },
});
