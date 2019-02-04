
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View} from 'native-base';
import {
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import PicturePicker from '../components/PicturePicker';
import {NavigationActions} from 'react-navigation'
export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: null,
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
    <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <PicturePicker/>
            {/* <PicturePicker goBookDetail = {this.favorites}/> */}
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