import React,{useLayoutEffect } from 'react'
import { StyleSheet, Button ,Text, View } from 'react-native';

const  HomeScreen=({navigation})=> {
  useLayoutEffect(() => {
    navigation.setOptions({
        title:"LaafiGram",
        headerStyle:{backgroundColor:"#fff"},
        headerTitleStyle:{color:"black"},
        hearderTintColor:"black",
      
    });
}, [])
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
           title="go to detail"
           onPress={()=>navigation.navigate("Detail")}
        />
      </View>
    );
  }
export default HomeScreen
