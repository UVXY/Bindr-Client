import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from "./SideBar";

import {

  StyleSheet
} from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title } from 'native-base';
export default class HeaderIconExample extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };

  render() {
      
    return (
      <Container>
        <Header>
       
          <Body>
          <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()} style={styles.container}>
          </Drawer>
    
            <Title style={{ fontSize: 38 }}> Bindr 
              <Icon style={{ fontSize: 42, color: "#ffffff" }}
                name="book" />
            </Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{ fontSize: 30 }}
              name="search" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderColor: "#ff0000",
    marginLeft:20
  }
});