import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope, faArrowLeftLong, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Forgotpassword = ({ navigation }) => {
    const [email, setEmail] = useState('');

    fetch('https://trackingtime-c5jw.onrender.com/api/user/forget-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    })
        .then(response => response.json())
        .then(data => {
            console.warn(data);
        })
        .catch(error => {
            console.warn('Error is :', error);
        });


        const [fontsLoaded] = useFonts({
            mainFont: require("../assets/fonts/Metropolis-Medium.otf")
        });
        if (!fontsLoaded) {
            return <Text>Loading...</Text>;
        }

    return (
        <>
            <View style={{ width: '100%', backgroundColor: 'white', paddingTop: 40, paddingBottom: 155 }}>
                <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => navigation.navigate("Signup")}>
                    <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                </TouchableOpacity>
                <View style={{ width: '90%', alignSelf: 'center' }}>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 20, textAlign: 'center', color: '#233CBF' }}>Forgotpassword</Text>
                </View>
                <View style={{ width: 200, height: 200, alignSelf: 'center', marginTop: 40 }}>
                    <Image style={{ width: "100%", height: "100%", borderRadius: 20 }} source={require('../assets/images/forgotpassword.png')} />
                </View>
                <View style={{ marginTop: 30, width: '90%', alignSelf: 'center', padding: 15 }}>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 18, color: '#233CBF' }}>Mail Address Here</Text>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 15 }}>Enter the email address associated with your account.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 9, borderRadius: 12, margin: 12 }}>
                    <FontAwesomeIcon color={'grey'} icon={faEnvelope} />
                    <TextInput
                        style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont', padding: 3 }}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <TouchableOpacity style={{ backgroundColor: '#233CBF', borderRadius: 12, width: "42%", alignSelf: 'center', padding: 15, marginTop: 40 }}>
                    <Text style={{ color: 'white', fontSize: 15, fontFamily: 'mainFont', textAlign: 'center', fontFamily: 'mainFont' }}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Forgotpassword;