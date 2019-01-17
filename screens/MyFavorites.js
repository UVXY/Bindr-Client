import React, { Component } from 'react';
import { WebView, Text, View, ScrollView } from 'react-native';
import { Container, Content, Header } from "native-base";
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