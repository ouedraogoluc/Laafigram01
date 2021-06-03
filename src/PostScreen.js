import React, { Component } from 'react'
import {View ,Text , StyleSheet,TouchableOpacity,LayoutAnimation} from 'react-native'

export class PostScreen extends Component {
    render() {
        return (
            <View style ={styles.container}>
            <Text>Post</Text>
          </View>
        )
    }
}

export default PostScreen
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    }
})