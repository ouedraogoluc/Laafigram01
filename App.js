import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer, createAppContainer, createSwitchNavigator } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MainTabScreen from './src/MainTabScreen';
import SplashScreen from './src/SplashScreen';
import SignInScreen from './src/SignInScreen';
import SignUpScreen from './src/SignUpScreen';

import AddChatScreen from './src/AddChatScreen';

/* 
appel aux composant
*/
//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />   
      <Stack.Screen name="Home" component={MainTabScreen} />
      <Stack.Screen name="AddChat" component={AddChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;


/* 
le style
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
