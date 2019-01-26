
import React, { Component } from 'react';
import {
    Container, Header, Body, Right, Button, Icon, Title, Left
  } from 'native-base';
  
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from "axios";
import { Drawer } from 'native-base';
import SideBar from "../components/SideBar";
import {
  NavigationActions
} from "react-navigation";
import API from "../utils/API";
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
// import Header from '../components/Header';

export default class TestScreen extends Component {
    closeDrawer() {
        this.drawer._root.close()
      };
      openDrawer() {
        this.drawer._root.open()
      };
render(){
    
    return (
        <Drawer 
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
      <Container>
        <Header>
        <Left>
            <Button transparent onPress={()=> this.openDrawer()}>
            <Icon name="menu"/>
            </Button>
            </Left>
          <Body>
            <Title style={{ fontSize: 38 }}>
              {' '}
              Bindr
              <Icon style={{ fontSize: 42, color: '#ffffff' }} name="book" />
            </Title>
          </Body>
          <Right>
            <Button transparent >
              <Icon style={{ fontSize: 30 }} name="search" />
            </Button>
          </Right>
        </Header>
      </Container>
      </Drawer>
    );
  };
}