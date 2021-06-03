import React, { Component } from 'react'
import {View ,Text , StyleSheet,TouchableOpacity,LayoutAnimation} from 'react-native'

export class NotificationScreen extends Component {
    render() {
        return (
            <View style ={styles.container}>
            <Text>notifications </Text>
           </View>
        )
    }
}

export default NotificationScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})
