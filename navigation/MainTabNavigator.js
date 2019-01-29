import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyFavorites from '../screens/MyFavorites';
import BookDetail from '../screens/BookDetail';
import RecommendationScreen from '../screens/Recommendations';
import Surveys from "../screens/Surveys"

// FOR TESTING
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

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  // Recommendations: Recommendations,
  BookDetail: {
    screen: BookDetail,
    path: "/detail"
  }
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
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
});

SurveysStack.navigationOptions = {
  tabBarLabel: 'Survey',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const MyFavoritesStack = createStackNavigator({
  Saved: MyFavorites
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
  HomeStack,
  MyFavoritesStack,
  SurveysStack,
  RecommendationStack
});
