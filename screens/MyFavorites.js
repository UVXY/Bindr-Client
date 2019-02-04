import React, { Component } from 'react';
import {
  Platform, View, ScrollView, StyleSheet
} from 'react-native';
import {
  Thumbnail, H1
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import API from '../utils/API';
import BookCard from '../components/BookCard';
import Header from '../components/Header';

export default class MyFavorites extends Component {
  static navigationOptions = {
    header: Header
  };

  state = {
    books: []
  }

  componentWillMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getUserBooks()
      .then(res => this.setState({ books: res.data.savedBooks }));
  }

  comment = (newComment) => {
    API.makeComment(newComment);
  }

  bookDetail = (bookObj, saveFn, mkCmnt) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'BookDetail',
      params: {
        data: bookObj,
        save: saveFn,
        comment: mkCmnt,
      }
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    const user = this.props.navigation.state.params.data.user;
    const { books } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Thumbnail
            large
            source={
              user.photo
                ? { uri: user.photo }
                : require('../assets/images/reader-310398_640.png')
            }
          />

          <H1>
            {user.firstName}'s Saved Books
          </H1>
          {books.map(book => (
            <BookCard
              user={user}
              data={book}
              key={book._id}
              unsave={API.unsaveBook}
              handler={this.getBooks}
              detail={this.bookDetail}
              comment={this.comment}
            />
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
