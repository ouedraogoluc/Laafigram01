import React, { Component } from 'react'
import { StyleSheet, Button ,Text, View } from 'react-native';


const  DetailsScreen=({navigation})=> {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>DetailsScreen Screen</Text>
        <Button
           title="go to screen..."
           onPress={()=>navigation.push("Details")}
        />
             <Button
           title="go to home"
           onPress={()=>navigation.navigate("Home")}
        />
             <Button
           title="go  back"
           onPress={()=>navigation.goBack()}
        />
         <Button
           title="go  to first screen"
           onPress={()=>navigation.popToTop()}
        />
      </View>
    );
  }
  
export default DetailsScreen
