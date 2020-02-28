import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Header from './components/Header'
import itemsScreen from './screens/Items';
import productScreen from './screens/Product';
import homeScreen from './screens/Home';
import { createStackNavigator } from 'react-navigation-stack';



const AppNavigator = createStackNavigator({
  Home: homeScreen,
  Items: itemsScreen,
  Product: productScreen
},{
  initialRouteName : 'Home',
   defaultNavigationOptions: {
    header: (props, navigation) => <Header {...props} />,
  }
})

export default createAppContainer(AppNavigator)


 