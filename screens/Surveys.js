
import React, { Component } from 'react';
import { View } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PicturePicker from '../components/PicturePicker';
import WordSearch from '../components/WordsearchBoard';
import API from '../utils/API';
import Header from '../components/Header';

export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: Header
  };
  // should all the words be stored in an array to later be stored?
  state = {
    bookSearch: "",
    books: [],
    user: null
  }

  componentWillMount() {
    API.getUser()
    .then((res) => {
      this.setState({
        user: res.data
      })
    });
  }

  myFunction = () => {
    console.log("Button was pressed")
  }
  searchBook = (event) => {
    event.preventDefault();
    axios
    .get("https://www.googleapis.com/books/v1/volumes", { params: {q: this.state.bookSearch }})
    .then((results) => {
      console.log(results)
      this.setState({ books: results.data.items });
    })
    .catch(err => console.log(err));
  }
  favorites = (searchObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Saved",
      params: { data: searchObj }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }
  handlePressChange = (search) => {
    this.setState({bookSearch: search})
  }
  getSearch = () => {
    API.getSearch(this.state)
    .then(res => this.favorites(res.data))
    .catch(err => console.log(err))
    console.log(state);
  } 
  
  render() {
    return (
      <View style={styles.picturePickerContainer}>
        <PicturePicker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picturePickerContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  wordsearchContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62'
  }
});
