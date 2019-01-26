import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyFavorites from '../screens/MyFavorites';
import BookDetail from '../screens/BookDetail';
import TestScreen from "../screens/TestScreen";
import Surveys from "../screens/Surveys"
// recommendations currently breaks the app do to swipe
// import Recommendations from "../screens/Recommendations"

const HomeStack = createStackNavigator({
  Test: TestScreen,
  Home: HomeScreen,
  // Recommendations: Recommendations,
  BookDetail: {
    screen: BookDetail,
    //======================================================
    // where is it coming from
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
  ),
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
  MyFavorites: MyFavorites,
});

MyFavoritesStack.navigationOptions = {
  tabBarLabel: 'MyFavorites',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  MyFavoritesStack,
  SurveysStack
});
