import React, { Component } from 'react'
import {View ,Text , StyleSheet,TouchableOpacity,LayoutAnimation} from 'react-native'

export class PatientScreen extends Component {
    render() {
        return (
            <View style ={styles.container}>
            <Text>Patient </Text>
          </View>
        )
    }
}

export default PatientScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})