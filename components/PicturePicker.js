<<<<<<< HEAD
import React, {
    Component
} from 'react';
import {
    Image,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
    Col,
    Row,
    Grid
} from 'react-native-easy-grid';
import datas from '../data.json'
import {
    Container,
    Header,
    Title,
    View,
    Button
} from 'native-base';
import DataCard from './DataCard'

// ========================= check testing for dumped files ==============================
export default class GifPicture extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        // datas: []
        datas
    }

    removeData = id => {
        const datas = this.state.datas.filter(data => data.id !== id);
        this.setState({ datas });
    };
=======
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
>>>>>>> 29c4339eac61bb056f72b3ef4879ee73c7128196

    sendToRecommendation = (word) => {
        console.log(word);
    }
    recommendationTab = () => {
        const navigateAction = NavigationActions.navigate({
          routeName: 'Recommendations'
        });
        this.props.navigation.dispatch(navigateAction);
      }
    render() {

        return (
            <ScrollView>
                <Header style={{ backgroundColor: '#00CE9F' }}>
                <Title style={{ fontSize: 28 }}>
                {' '}
                Pick a picture.
                </Title>
                </Header>            
            {this.state.datas.map(data => (
              <DataCard
              id={data.id}
              key={data.id}
              word={data.word} 
              image={data.image}
              renderRec={this.goToRecommendation}
              style = {{height: 200, flex: 1}}
              recommendationTab={this.recommendationTab}
            />
          ))}
            </ScrollView>
        )
    }
}

<<<<<<< HEAD
=======
            </Col>
            </Row>
          </Grid>
          </ScrollView>
      </Container>
    );
  }
>>>>>>> 29c4339eac61bb056f72b3ef4879ee73c7128196
