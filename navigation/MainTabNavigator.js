import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyFavorites from '../screens/MyFavorites';
import BookDetail from '../screens/BookDetail';
import WordSearcher from "../screens/WordSearcher";
import WordRoulette from "../screens/WordRoulette";
import PicturePicker from "../screens/PicturePicker"

const HomeStack = createStackNavigator({
  Words: WordSearcher,
  Roulette: WordRoulette,
  Picture: PicturePicker,
  Home: HomeScreen,
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
  MyFavoritesStack
});
