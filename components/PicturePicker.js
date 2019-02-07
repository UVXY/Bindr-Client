import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Header, Title } from 'native-base';
import images from '../data.json';
import DataCard from './DataCard';

export default class GifPicture extends Component {
    static navigationOptions = {
      header: null
    };

    state = {
      images
    }

    render() {
      return (
        <ScrollView>
          <View style={{ backgroundColor: '#00CE9F', alignItems: 'stretch' }}>
            <Title>
              Select a picture
            </Title>
          </View>
          {this.state.images.map(image => (
            <DataCard
              key={image.id}
              wordsearchBookTags={this.props.navigation.getParam('bookTags')}
              picturePickerBookTag={image.word}
              image={image.image}
              style={{ height: 200, flex: 1 }}
              goToRecommendations={this.props.navigation.getParam('goToRecommendations')}
            />
          ))}
        </ScrollView>
      );
    }
}
