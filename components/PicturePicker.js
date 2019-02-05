// import React, {
//     Component
// } from 'react';
// import {
//     Image,
//     TouchableOpacity,
//     Text,
//     ScrollView
// } from 'react-native';
// import {
//     Container,
//     Header,
//     Title,
//     View,
//     Button,
//     Input
// } from 'native-base';
// import axios from "axios";

// import {
//     Col,
//     Row,
//     Grid
// } from 'react-native-easy-grid';
// // export default class LayoutExample extends Component {

// export default class Pictures extends Component {
//     // export default function PicturePicker() {
// render() {
//         let NumberList = () => {
//             const numbers = [
//                 "travel", "wandering", "lost", "best", "earliest-list", "favourites", "writer", "sad", "crying", "death", "learning", "technology", "help", "comedy", "funny", "humor", "humour", "satire", "old", "ancient", "storm", "cloudy", "celebrity", "movies", "blond", "fantasy", "sci-fi", "science-fiction", "sf", "classics", "business", "career", "creativity", "fitness", "happiness", "health", "love", "non-fiction", "nonfiction", "productivity", "relationships", "romance", "self-help", "success", "wellness", "baseball", "sports", "book club", "historical", "literary", "summer", "sunny", "clear", "warm", "autumn", "books", "coffee", "creep", "creepy", "dark", "fall", "fireplace", "freaky", "halloween", "leaves", "november", "october", "pumpkin", "rain", "rainy", "reading", "scary", "september", "spooky", "sweater", "tea", "thanksgiving", "intrigue", "mystery", "thriller", "fiction", "seasons", "setting", "weather", "winter", "cold", "warmup"
//             ];            
//             const listItems = numbers.map((number) =>
//               <ul key={number.toString()}>
//                 {number}
//               </ul>
//             );
//             return (
//               <ul>{listItems}</ul>
//             );
//           }
          
//         return ( 
//             <Text source= {NumberList}>  </Text>
//         );
// }
// }

// import React from 'react';
// import { View, Button, Image } from 'react-native';
// import { Container, Header, Item, Input, Icon, Text, Left } from 'native-base';

// export default Pictures = (props) => {
//     // check the testroulette folder
// }
import React, {
    Component
} from 'react';
import {
    Image,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
import {
    Container,
    Header,
    Title,
    View,
    Button,
    Input
} from 'native-base';
import axios from "axios";

import {
    Col,
    Row,
    Grid
} from 'react-native-easy-grid';
// export default class LayoutExample extends Component {

export default class Pictures extends Component {
    // export default function PicturePicker() {
render() {

        const gifs = [
            "travel", "wandering", "lost", "best", "earliest-list", "favourites", "writer", "sad", "crying", "death", "learning", "technology", "help", "comedy", "funny", "humor", "humour", "satire", "old", "ancient", "storm", "cloudy", "celebrity", "movies", "blond", "fantasy", "sci-fi", "science-fiction", "sf", "classics", "business", "career", "creativity", "fitness", "happiness", "health", "love", "non-fiction", "nonfiction", "productivity", "relationships", "romance", "self-help", "success", "wellness", "baseball", "sports", "book club", "historical", "literary", "summer", "sunny", "clear", "warm", "autumn", "books", "coffee", "creep", "creepy", "dark", "fall", "fireplace", "freaky", "halloween", "leaves", "november", "october", "pumpkin", "rain", "rainy", "reading", "scary", "september", "spooky", "sweater", "tea", "thanksgiving", "intrigue", "mystery", "thriller", "fiction", "seasons", "setting", "weather", "winter", "cold", "warmup"
        ];
        const listItems = gifs.map((gif) => {
            searchGif = (event) => {
                event.preventDefault();
                axios
                .get("https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=", {params: {q: {gif}}})
                .then((results) => { <img 
                    source = {results.data.images.fixed_height_still.url} 
                    style = {{height: 200, width: null, flex: 1}}
                        />  
                    })
                    .catch(err => console.log(err));
            }
        }
        );
        return ( 
            <ScrollView>
            {/* <Col >
            <TouchableOpacity onPress={(searchObj) => props.goBookDetail(searchObj)}>
            {listItems}   
            </TouchableOpacity>
        </Col> */}
        </ScrollView>
        );
        console.log(listItems);
}}
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
{
    /* <Container>
    <ScrollView>
        <Header style={{ backgroundColor: '#00CE9F' }}>
        <Title style={{ fontSize: 28 }}>
        {' '}
            Pick a picture.
        </Title>
        </Header>
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
    </Container> */
}