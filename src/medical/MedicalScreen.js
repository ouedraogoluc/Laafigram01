import React, { Component } from 'react'
import {View ,Text , StyleSheet,TouchableOpacity,LayoutAnimation} from 'react-native'

export class MedicalScreen extends Component {
    render() {
        return (
            <View style ={styles.container}>
            <Text>Medical </Text>
          </View>
        )
    }
}

export default MedicalScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})