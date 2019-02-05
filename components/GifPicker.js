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
    Button,
    Input
} from 'native-base';
import Wrapper from './Wrapper';
import DataCard from './DataCard'

import axios from "axios";
//=========================
export default class GifPicture extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         imageUrls: [],
    //     }
    // }

    // componentDidMount() {
    //     this.fetchImageUrls()
    // }
    
    // state = [];
    state = {
        datas: []
    }
   
    // constructor(props) {
    //     super(props);
    //     this.state = {isHidden: false};
    //     this.onPress = this.onPress.bind(this);
    //   }
    //   onPress() {
    //     this.setState({isHidden: !this.state.isHidden})
    //   }
    removeData = id => {
        // Filter this.state.friends for friends with an id not equal to the id being removed
        const datas = this.state.datas.filter(data => data.id !== id);
        // Set this.state.datas equal to the new datas array
        this.setState({ datas });
      };
    render() {
        // const imageUrls = [
        //     {link:'https://media2.giphy.com/media/BLCHvwl9C5j1u/giphy.gif',
        //     word: 'cat'
        //     }, 
        //     {link:'https://media1.giphy.com/media/l0MYwnwdWnc0EMhy0/giphy.gif',
        //     word: 'dog'
        //     },
        //     {link:"https://media0.giphy.com/media/l3UcrqNnA3zZTavMA/giphy.gif",
        //     word: 'travel'
        //     },
        // ];

        return (
            <ScrollView>
                <Header style={{ backgroundColor: '#00CE9F' }}>
                <Title style={{ fontSize: 28 }}>
                {' '}
                Pick a picture.
                </Title>
                </Header>
            {/* <Grid> */}
            
            {this.state.datas.map(data => (
              <DataCard
              id={data.id}
              key={data.id}
              word={data.word} 
              image={data.image}
              style = {{height: 200, marginTop: 300, flex: 1}}
            />
          ))}
          
                {/* <View style={styles.buttonContainer}>
              {this.state.isHidden ?  : null}
              <Text>This is a button</Text>
              <Button bordered title={this.state.isHidden ? "SHOW" : "HIDE"} onPress={this.onPress}><Text>Primary</Text></Button>
            </View> */}
                    {/* {imageUrls.map((imageUrl, index) => (
                    // <Col >
                    <TouchableOpacity onPress={this._onPressButton}>
                    <Image key={index} source={{uri: imageUrl.link}} style={{width: 500, height: 310}}/>
                    </TouchableOpacity>
                    // </Col>
                    ))} */}
                
            {/* </Grid> */}
            </ScrollView>
        )
    }
}

