import React, { useState } from 'react'
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
   
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { Input,Image } from 'react-native-elements'
import { useTheme } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import { auth } from '../Firebase'

const SignInScreen = ({navigation}) => {
    const [name ,setName]= useState("");
    const [email ,setEmal]= useState("");
    const [password ,setPassword]= useState("");
    const [profile ,setProfile]= useState("Patient","Docteur","Medical");
    const signUp =()=>{
      auth
      .createUserWithEmailAndPassword(email,password)
      .then((authUser)=>{
          authUser.user.updateProfile({
              displayName:name,
              DisplayProfile:profile
          })
      })
      .catch((error)=>alert(error));
    };
    const { colors } = useTheme();
    return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle="light-content"/>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Register Now!</Text>
                </View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <ScrollView>
                    <Text style={styles.text_footer}>name</Text>
                    <View style={styles.action}>
                    <Input placeholder=" name"
                    style={styles.textInput}
                    type="name"
                    value={name}
                    onChangeText={(text)=>setName(text)}
                    />
                    </View>
                    <Text style={styles.text_footer}>email</Text>
                <View style={styles.action}>
                <Input placeholder=" email"
                    style={styles.textInput}
                    type="email"
                    value={email}
                    onChangeText={(text)=>setEmal(text)}
                />
                </View>
               
                <Text style={[styles.text_footer, {
                    color: colors.text,
                    marginTop: 21
                }]}>Profile</Text>
                 <View style={styles.piker}>
                <Picker
                
                style={styles.textPicker}
                selectedValue={profile}
                onValueChange={(itemValue) => setProfile(itemValue)}
                >
                <Picker.Item label="Patient" value="Patient" />
                <Picker.Item label="Docteur" value="Docteur" />
                <Picker.Item label="Medical" value="Medical" />
            </Picker>
            </View>
            <Text style={styles.text_footer}>password</Text>
            <View style={styles.action}>
                <Input placeholder=" password" secureTextEntry type="password"
               style={{ height: 50, width: 150 }}
                value={password}
                 onChangeText={(text)=>setPassword(text)}
                 onSubmitEditing={signUp}/>
             </View>
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                   En vous inscrivant, vous acceptez notre
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Conditions d'utilisation </Text>
                <Text style={styles.color_textPrivate}>{" "}et</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Politique de confidentialité</Text>
            </View>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={signUp}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign Up</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    piker:{
        flexDirection: 'row',
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 10
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    textPicker:{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -40,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });
