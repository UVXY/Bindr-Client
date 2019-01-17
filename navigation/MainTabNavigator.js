import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyFavorites from '../screens/MyFavorites';
import BookDetail from '../screens/BookDetail';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
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
