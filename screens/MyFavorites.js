import React, { Component } from 'react';
import {
  Platform, View, ScrollView, StyleSheet
} from 'react-native';
import {
  Thumbnail, H1
} from 'native-base';
import API from '../utils/API';
import BookCard from '../components/BookCard';
import Header from "../components/Header";
// import SideBar from '../components/SideBar';


export default class MyFavorites extends Component {
  static navigationOptions = {
    header: Header
  };

  state = {
    books: [],
    userName: 'Unknown',
    userImage: null
  }

  componentWillMount() {
    API.getUser()
      .then((res) => {
        this.setState({
          userImage: res.data.photo,
          userName: res.data.firstName
        });
        this.getBooks();
      });
  }

  getBooks = () => {
    API.getUserBooks()
      .then(res => this.setState({ books: res.data.savedBooks }));
  }

  render() {
    const { userName, userImage, books } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Thumbnail
            large
            source={
              userImage
                ? { uri: userImage }
                : require('../assets/images/reader-310398_640.png')
            }
          />

          <H1>{userName}'s Saved Books</H1>
          {books.map(book => (
            <BookCard data={book} key={book._id} unsave={API.unsaveBook} handler={this.getBooks} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  contentContainer: {
    padding: 10
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)'
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4
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
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center'
  },
  navigationFilename: {
    marginTop: 5
  }
});
