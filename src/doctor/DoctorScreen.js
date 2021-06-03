import React, { Component } from 'react'
import {View ,Text , StyleSheet,TouchableOpacity,LayoutAnimation} from 'react-native'

export class DoctorScreen extends Component {
    render() {
        return (
            <View style ={styles.container}>
            <Text>doctor </Text>
          </View>
        )
    }
}

export default DoctorScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})