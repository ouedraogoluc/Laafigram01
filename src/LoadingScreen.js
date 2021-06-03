import React, { Component } from 'react'
import {View ,Text , StyleSheet ,ActivityIndicator} from 'react-native'

import  firebase from 'firebase';


export class LoadingScreen extends Component {
      //si les information sont correct
      componentDidMount (){
        firebase.auth().onAuthStateChanged(user =>{
            this.props.navigation.navigate(user ? "App":"Auth")
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Wellcome to LaafiGram...</Text>
                <ActivityIndicator size="large">

                </ActivityIndicator>
            </View>
        )
    }
}

export default LoadingScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
