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

// ========================= check testing.js for dumped files ==============================
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
