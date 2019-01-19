
import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, View} from 'native-base';
import {
  Image,
  StyleSheet,
  ScrollView
} from 'react-native';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import { NavigationActions } from "react-navigation";

export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: null,
  };
  goToRoulette = (wordObj) => {
    const navigateAction = NavigationActions.navigate({
      routeName: "Roulette",
      params: { data: wordObj }
    });
    this.props.navigation.dispatch(navigateAction);
    // this.props.navigation.goBack();
  }
  saveWord = (wordObj) => {
    
    const { title } = wordObj;

    const newWord = {
      title
    }

    API.saveWord(newWord, this.state.user._id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <View style={styles.container}>
      <SearchBar 
          handleInputChange={this.handleInputChange} 
          search={this.searchBook}
          logout={this.logout}
        />
   <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>Word Search</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem>
              <Body>
                {/* <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/> */}
                
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button >
                  <Icon name="logo-facebook" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
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