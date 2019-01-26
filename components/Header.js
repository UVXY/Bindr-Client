import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from "../components/SideBar";

import {
  Container, Header, Body, Right, Left, Button, Icon, Title
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

export default class HeaderMenu extends Component{
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
render(){
  return (
    <Drawer 
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
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
        <Button transparent>
          <Icon style={{ fontSize: 30 }} name="search" />
        </Button>
      </Right>
    </Header>
    </Drawer>
  );
}}

