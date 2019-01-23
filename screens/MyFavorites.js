import React, { Component } from 'react';
import { WebView, Platform, Text, View, ScrollView, StyleSheet } from 'react-native';
import { Container, Content, Thumbnail, H1 } from "native-base";
import API from "../utils/API";
import BookCard from '../components/BookCard';
import Header from "../components/Header";
// import SideBar from '../components/SideBar';


export default class MyFavorites extends Component {
  static navigationOptions = {
    header: null,
  };

  state ={
    books: []
  }
  
  componentDidMount(){
    
    API.getUser()
    .then(res => {
      this.getBooks(res.data.user._id)
    })
  }

  getBooks = (id) => {
    API.getUserBooks(id)
    .then(res => this.setState({books: res.data.book}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} >
            <Thumbnail large source={{uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fsample_native_app-0cf4d551-a506-47f6-996d-85ce02e8ca0b/ImagePicker/caf679dd-d953-4cab-aef2-8351f98842b7.jpg"}} />
            <H1>User name</H1>
            {this.state.books.map(book => {
              return (
                <BookCard key={book.id} data={book}/>
              )}
            )}
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
