import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

import axios from "axios";
import Drawer from '../components/Drawer';

import {
  NavigationActions
} from "react-navigation";
import API from "../utils/API";
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    bookSearch: "",
    books: [],
    user: null
  }

  componentDidMount(){
      console.log(this.props.navigation.state.params.data.user)
      const user = this.props.navigation.state.params.data.user;
      // this.props.navigation.setParams({ user })
      const navigateAction = NavigationActions.setParams({
          key: "id-1547683730508-2",
          params: { user: user }
        });

      this.props.navigation.dispatch(navigateAction);
      console.log("params set")
        // this.props.navigation.goBack();
      
      this.setState({user})
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
  
  handleInputChange = (search) => {
    this.setState({bookSearch: search})
  }

  bookDetail = (bookObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "BookDetail",
      params: { data: bookObj }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  saveBook = (bookObj) => {
    
    const { title, subtitle, description, authors, imageLinks, infoLink } = bookObj;

    const newBook = {
      title,
      subtitle,
      description,
      authors,
      image: imageLinks.thumbnail,
      infoLink
    }

    API.saveBook(newBook, this.state.user._id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  goHome = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Auth",
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }

  logout = () => {
    API.logout()
    .then(res => this.goHome())
    .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        {/* <SearchBar 
          handleInputChange={this.handleInputChange} 
          search={this.searchBook}
          logout={this.logout}
        /> */}
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
         {this.state.books.map(book => {
          return (
             <BookCard key={book.id} data={book.volumeInfo} bookDetail={this.bookDetail} save={this.saveBook}/>
          )}
         )}
         <Drawer/>
        </ScrollView>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
