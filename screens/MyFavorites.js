import React, { Component } from 'react';
import { WebView, Text, View, ScrollView } from 'react-native';
import { Container, Content, Thumbnail, Header, H1 } from "native-base";
import API from "../utils/API";
import BookCard from '../components/BookCard';

export default class MyFavorites extends Component {

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
      <Container>
        <Content>
          <ScrollView>
            <Thumbnail large source={{uri: "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fsample_native_app-0cf4d551-a506-47f6-996d-85ce02e8ca0b/ImagePicker/caf679dd-d953-4cab-aef2-8351f98842b7.jpg"}} />
            <H1>User name</H1>
            {this.state.books.map(book => {
              return (
                <BookCard key={book.id} data={book}/>
              )}
            )}
          </ScrollView>
        </Content>
      </Container>
      
    );
  }
}