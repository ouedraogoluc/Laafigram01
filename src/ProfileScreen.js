import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { auth } from '../Firebase'
const ProfileScreen = ({ navigation }) => {
    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("SignInScreen");
        });
    }
    return (
        <View>
    
            <Button
                title="Logout"
                onPress={signOutUser}
            />
        </View>
    )
}
export default ProfileScreen
const styles = StyleSheet.create({})
