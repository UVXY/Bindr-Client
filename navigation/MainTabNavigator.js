import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MyFavorites from '../screens/MyFavorites';
import RecommendationScreen from '../screens/Recommendations';
import Surveys from '../screens/Surveys';
import BookDetail from '../screens/BookDetail';
import PicturePicker from '../components/PicturePicker';
import Header from '../components/Header';
import Wordsearch from '../components/Wordsearch'

const SurveysStack = createStackNavigator({
  Surveys: {
    screen: Surveys,
    path: '/surveys'
  },
  Wordsearch: {
    screen: Wordsearch,
    path: '/wordsearch',
    navigationOptions: {
      header: Header
    }
  },
  // PicturePicker: {
  //   screen: PicturePicker,
  //   path: '/picturePicker',
  //   navigationOptions: {
  //     header: Header
  //   }
  // },
  Recommendations: {
    screen: RecommendationScreen,
    path: '/recommendations',
    BookDetail: {
      screen: BookDetail,
      path: '/detail'
    }
  }
});

SurveysStack.navigationOptions = {
  tabBarLabel: 'Recommendations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-book' : 'md-book'}
    />
  )
};

const MyFavoritesStack = createStackNavigator({
  Saved: MyFavorites,
  BookDetail: {
    screen: BookDetail,
    path: '/detail'
  }
});

MyFavoritesStack.navigationOptions = {
  tabBarLabel: 'Saved',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
    />
  )
};


export default createBottomTabNavigator({
  MyFavoritesStack,
  SurveysStack
});
