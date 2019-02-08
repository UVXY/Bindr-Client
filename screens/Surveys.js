
import React, { Component } from 'react';
import { View } from 'native-base';
import { StyleSheet } from 'react-native';
import Wordsearch from '../components/Wordsearch';
import Header from '../components/Header';

export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: Header
  };

  goToPicturePicker = (bookTags) => {
    this.props.navigation.navigate(
      'PicturePicker',
      {
        bookTags,
        goToRecommendations: this.goToRecommendations
      }
    );
  }

  goToRecommendations = (bookTags) => {
    this.props.navigation.navigate(
      'Recommendations',
      {
        bookTags
      }
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Wordsearch
          goToPicturePicker={this.goToPicturePicker}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62'
  }
});
