import React, { Component } from 'react';
import { Image, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Title, View, Button, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// export default class LayoutExample extends Component {
export default Pictures = (props) => {
  
    return (
      <Container>
           <ScrollView>
                <Title style={{ fontSize: 20, backgroundColor: '#00CE9F', textAlign: "left" }}>
                {' '}
                    Choose a picture
                </Title>
          <Grid>
              <Row>
            <Col >
                <TouchableOpacity onPress={(searchObj) => props.goBookDetail(searchObj)}>
                <Image source={require('../assets/images/LazyPug.jpg')} style={{height: 200, width: null, flex: 1}}/>           
                </TouchableOpacity>
            </Col>

            <Col>
            <TouchableOpacity onPress={props.myfunction}>
            <Image source={require('../assets/images/HappyCat.jpg')} style={{height: 200, width: null, flex: 1}} />
            </TouchableOpacity>

            </Col>
            </Row>
            <Row>
            <Col>
                <TouchableOpacity onPress={() => props.goBookDetail()}>
                    <Image source={require('../assets/images/LazyPug.jpg')} style={{height: 200, width: null, flex: 1}}/>
                </TouchableOpacity>
            </Col>
            
            <Col>
                <TouchableOpacity onPress={() => props.goBookDetail()}>
                    <Image source={require('../assets/images/HappyCat.jpg')} style={{height: 200, width: null, flex: 1}}/>
                </TouchableOpacity>
            </Col>
            
            </Row>
            <Row>
            <Col>
                <TouchableOpacity onPress={() => props.goBookDetail()}>
                    <Image source={require('../assets/images/LazyPug.jpg')} style={{height: 200, width: null, flex: 1}}/>
                </TouchableOpacity>

            </Col>
            
            <Col>
            <TouchableOpacity onPress={() => props.goBookDetail()}>
            <Image source={require('../assets/images/ScaredJack.gif')} style={{height: 200, width: null, flex: 1}}/>
            </TouchableOpacity>
            </Col>
            </Row>
            <Row>
            <Col>
            <TouchableOpacity onPress={() => props.goBookDetail()}>
            <Image source={require('../assets/images/HeartBroke.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </TouchableOpacity>

            </Col>
            
            <Col>
            <TouchableOpacity onPress={() => props.goBookDetail()}>
            <Image source={require('../assets/images/HappyCat.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </TouchableOpacity>

            </Col>
            </Row>
          </Grid>
          </ScrollView>
      </Container>
    );
  }