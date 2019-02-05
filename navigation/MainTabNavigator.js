import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MyFavorites from '../screens/MyFavorites';
import RecommendationScreen from '../screens/Recommendations';
import Surveys from '../screens/Surveys';
import BookDetail from '../screens/BookDetail';
import PicturePicker from '../components/PicturePicker';

const RecommendationStack = createStackNavigator({
  Recommendation: RecommendationScreen
});

RecommendationStack.navigationOptions = {
  tabBarLabel: 'Recommendations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  )
};

const SurveysStack = createStackNavigator({
  Survey: Surveys,
  PicturePicker: {
    screen: PicturePicker,
    path: '/picturePicker'
  }
});

SurveysStack.navigationOptions = {
  tabBarLabel: 'Survey',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
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
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
};


export default createBottomTabNavigator({
  MyFavoritesStack,
  SurveysStack,
  RecommendationStack
});