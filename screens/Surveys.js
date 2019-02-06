
import React, { Component } from 'react';
import { View } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PicturePicker from '../components/PicturePicker';
import Wordsearch from '../components/WordsearchBoard';
import API from '../utils/API';
import Header from '../components/Header';

export default class CardShowcaseExample extends Component {
  static navigationOptions = {
    header: Header
  };

  state = {
    tags:[],
    user: null
  }

 
  handleGifPress = (search) => {
    this.setState({gifSearch: search})
  }
  picturePicker = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'PicturePicker'
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
          

      <View style={styles.container}>
        <Wordsearch
          picturePicker={this.picturePicker}
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
  },
});
