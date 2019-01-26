// import React from 'react';
// import { View, Button } from 'react-native';
// import { Container, Header, Item, Input, Icon, Text, Left } from 'native-base';

// export default Pictures = (props) => {
//     // check the testroulette folder
// }
import React, { Component } from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Title, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
          <ScrollView>
              <Header style={{ backgroundColor: '#00CE9F' }}>
              <Title style={{ fontSize: 28 }}>
              {' '}
                  Pick a picture.
              </Title>
              </Header>
          <Grid>
              <Row>
              <TouchableOpacity onPress={this._onPressButton}>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
            <Image source={require('../assets/images/LazyPug.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </Col>
            </TouchableOpacity>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Image source={require('../assets/images/HappyCat.jpg')} style={{height: 200, width: null, flex: 1}}/>

            </Col>
            </Row>
            <Row>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
            <Image source={require('../assets/images/LazyPug.jpg')} style={{height: 200, width: null, flex: 1}}/>

            </Col>
            
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Image source={require('../assets/images/HappyCat.jpg')} style={{height: 200, width: null, flex: 1}}/>

            </Col>
            </Row>
            <Row>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
            <Image source={require('../assets/images/LazyPug.jpg')} style={{height: 200, width: null, flex: 1}}/>

            </Col>
            
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Image source={require('../assets/images/ScaredJack.gif')} style={{height: 200, width: null, flex: 1}}/>

            </Col>
            </Row>
            <Row>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
            <Image source={require('../assets/images/HeartBroke.jpg')} style={{height: 200, width: null, flex: 1}}/>

            </Col>
            
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Image source={require('../assets/images/HappyCat.jpg')} style={{height: 200, width: null, flex: 1}}/>

            </Col>
            </Row>
          </Grid>
          </ScrollView>
      </Container>
    );
  }
//    const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'green',
//     },
//     textContent: {
//       fontSize: 20,
//       color: 'red',
//     },
//   });
}