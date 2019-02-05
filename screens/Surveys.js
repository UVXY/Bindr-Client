
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View} from 'native-base';
import {
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import PicturePicker from '../components/PicturePicker';
import ImageCard from '../components/DataCard';
import ToggleDisplay from 'react-toggle-display';
import GifPicker from '../components/GifPicker'
import {NavigationActions} from 'react-navigation'
import Roulette from '../components/Roulette';
export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: null,
  };
  // should all the words be stored in an array to later be stored?
  state = {
    images: [],
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
  // favorites = (searchObj) => {
  //   const navigateAction = NavigationActions.navigate({
  //     routeName: "Saved",
  //     params: { data: searchObj }
  //   });
  //   this.props.navigation.dispatch(navigateAction);
  //   // this.props.navigation.goBack();
  // }


  // getSearch = () => {
  //   API.getSearch(this.state)
  //   .then(res => this.favorites(res.data))
  //   .catch(err => console.log(err))
  //   console.log(state);
  // } 
  
  render() {
    return (
    <View style={styles.container}>
        {/* <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> */}
            {/* handleGifPress={this.handleGifPress} 
            searchGif={this.searchGif}
             */}
            <GifPicker/>
            
            {/* <PicturePicker goBookDetail = {this.favorites}/> */}
            {/* {this.state.images.map(book => {
            return (
              <ImageCard key={book.id} data={book.volumeInfo} bookDetail={this.bookDetail} save={this.saveBook}/>
            )} */}
            {/* <div className="App">
        <p className="App-intro">
          <button onClick={ () => this.handleClick() }>Toggle things</button>
        </p>
        <ToggleDisplay show={this.state.show}>
          I am rendered in a span (by default) and hidden with display:none when show is false.
        </ToggleDisplay>
 
        <ToggleDisplay if={this.state.show} tag="section">
          I am rendered in a section and removed from the DOM when if is false.
        </ToggleDisplay>
      </div> */}

        {/* </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flex: 1,
    alignContent: 'flex-start',
  }
});