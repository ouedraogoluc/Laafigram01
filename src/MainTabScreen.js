import React,{useLayoutEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons,Fontisto ,FontAwesome5 ,SimpleLineIcons,AntDesign} from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {  TouchableOpacity } from 'react-native';
import HomeScreen  from './HomeScreen';
import MessageScreen from './MessageScreen';
import SearchScreen from './SearchScreen';
import MenuScreen from './MenuScreen';
import NotificationScreen from './NotificationScreen';
import ProfileScreen from './ProfileScreen';
import DoctorScreen from './doctor/DoctorScreen';
import PatientScreen from './patient/PatientScreen';
import MedicalScreen from './medical/MedicalScreen';
import { View } from 'react-native';
const HomeStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen =({navigation})=>{
  
  useLayoutEffect(() => {
    navigation.setOptions({
        title:"LaafiGram",
        headerStyle:{backgroundColor:"#fff"},
        headerTitleStyle:{color:"black"},
        hearderTintColor:"black",
        headerLeft:()=>{
               
        },
        headerRight:()=>(
          <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            width:80,
            marginRight:20

          }}>
              <TouchableOpacity  activeOpacity={0.5}>
              <AntDesign name='camerao' size={24} color='black'/>
              </TouchableOpacity>
              <TouchableOpacity   onPress ={()=>navigation.navigate("AddChat")} activeOpacity={0.5}>
              <SimpleLineIcons name='pencil' size={24} color='black'/>
              </TouchableOpacity>
       </View>
      ),
    });
}, [])
  return (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: '#009387' }}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Search',
        tabBarIcon:({tintColor})  => (
          <Ionicons name="ios-search-circle-sharp" size={24} color={tintColor} />
        ),
      }}
    />
    <Tab.Screen
      name="Doctor"
      component={DoctorScreen}
      options={{
        tabBarLabel: 'Doctor',
        tabBarIcon:({tintColor})  => (
          <Fontisto name="doctor" size={24} color={tintColor} />
        ),
      }}
    />
       <Tab.Screen
      name="Patient"
      component={PatientScreen}
      options={{
        tabBarLabel: 'Patient',
        tabBarIcon:({tintColor})  => (
          <Fontisto name="bed-patient" size={24} color={tintColor} />
        ),
      }}
    />   
     <Tab.Screen
    name="Medical"
    component={MedicalScreen}
    options={{
      tabBarLabel: 'Medical',
      tabBarIcon:({tintColor})  => (
        <FontAwesome5 name="clinic-medical" size={24} color={tintColor} />
      ),
    }}
  />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="More"
      component={MenuScreen}
      options={{
        tabBarLabel: 'More',
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-menu" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  );
}
   


/* 
home
*/
export default MainTabScreen;
/* 
detail

*/

