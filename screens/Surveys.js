
import React, { Component } from 'react';
import { View } from 'native-base';
import { StyleSheet, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PicturePicker from '../components/PicturePicker';
import Wordsearch from '../components/Wordsearch';
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

    picturePicker = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'PicturePicker'
    });
    this.props.navigation.dispatch(navigateAction);
  }

<<<<<<< HEAD
  recommendations = () => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Saved'
    });
    this.props.navigation.dispatch(navigateAction);
=======
  goToRecommendations = (bookTags) => {
    this.props.navigation.navigate(
      'Recommendations',
      { bookTags }
    );
>>>>>>> f5b805fced87b6191d13df4885854948d8eaa18d
  }

  render() {
    return (
          

      <View style={styles.container}>
<<<<<<< HEAD
        <PicturePicker/>
        {/* <Wordsearch
          recommendations={this.recommendations}
        /> */}
=======
        <Wordsearch 
          goToRecommendations={this.goToRecommendations}
        />
>>>>>>> f5b805fced87b6191d13df4885854948d8eaa18d
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
