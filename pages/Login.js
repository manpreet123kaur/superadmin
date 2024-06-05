import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, Alert, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEnvelope, faLock, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pass, setPass] = useState(false);

    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const handleLogin = async () => {
        let token;

        try {
            const response = await fetch('https://trackingtime-c5jw.onrender.com/api/user/loginApp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error('Response Error:', errorText);
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Response Data:', data);

            if (data.data && data.data.user && data.data.accessToken) {
                console.warn('Access Token:', data.data.accessToken);
                token = data.data.accessToken;
                console.warn("Token exists");

                if (data.data.user.role) {
                    console.log('User Role:', data.data.user.role);
                    switch (data.data.user.role) {
                        case 'superadmin':
                            console.log("SuperAdmin");
                            navigation.navigate("DrawernavigationS");
                            break;
                        case 'admin':
                            console.log("admin");
                            navigation.navigate("Adrawernavigation");
                            break;
                        case 'Hr':
                            console.log("Hr");
                            navigation.navigate("DrawernavigationH");
                            break;
                        case 'TL':
                            console.log("TL");
                            navigation.navigate("DrawernavigationT");
                            break;
                        case 'user':
                            console.log("user");
                            navigation.navigate("DrawernavigationU");
                            break;
                        default:
                            console.warn('Unknown user role:', data.data.user.role);
                            navigation.navigate("Splashscreen");
                            break;
                    }
                } else {
                    console.warn('User role not found in response');
                    navigation.navigate("Splashscreen");
                }
            } else {
                throw new Error('Access token not found in response');
            }

        } catch (error) {
            console.error('Error occurred:', error);
            Alert.alert("Login failed, please try again.");
        }
    };

    return (
        <>
            <ScrollView>
                <View style={{ width: '100%', height: '100%', paddingTop: 10, backgroundColor: 'white', paddingBottom: 30 }}>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity style={{ paddingLeft: 20, marginTop: 20 }} onPress={() => navigation.navigate("Signup")}>
                            <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                        </TouchableOpacity>
                        <View style={{ width: 240, height: 220, alignSelf: 'center', marginTop: 40 }}>
                            <Image style={{ width: "100%", height: "100%", borderRadius: 20 }} source={require("../pages/assests/images/login.jpg")} />
                        </View>
                        <View style={{ width: '100%', padding: 15 }}>
                            <Text style={{ color: '#233CBF', fontSize: 25, fontFamily: 'mainFont', fontWeight: 700, textAlign: 'center' }}>Welcome back!</Text>
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'mainFont', textAlign: 'center' }}>Create an account to Q Allure to get all features</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 9, borderRadius: 12, margin: 12 }}>
                                <FontAwesomeIcon color={'grey'} icon={faEnvelope} />
                                <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont', padding: 3 }} placeholder="E-mail" value={email} onChangeText={text => setEmail(text)} />
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 9, borderRadius: 12, margin: 12 }}>
                                <FontAwesomeIcon color={'grey'} icon={faLock} />
                                <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont', padding: 3 }} placeholder="Password" value={password} onChangeText={text => setPassword(text)} autoCapitalize="none" secureTextEntry={pass} spellCheck={false} />
                                <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setPass(!pass)}>
                                    <FontAwesomeIcon color="#A9A9A9" icon={faEye} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '90%' }}>
                                <Text style={{ color: 'black', fontSize: 15, fontFamily: 'mainFont', textAlign: 'right' }} onPress={() => navigation.navigate("Forgotpassword")}>Forgot Password?</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'center', padding: 20, marginTop: 15 }} onPress={handleLogin}>
                            <Text style={{ color: 'white', fontSize: 15, fontFamily: 'mainFont', backgroundColor: '#233CBF', width: 130, textAlign: 'center', padding: 13, borderRadius: 12 }} >LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'center', paddingBottom: 70 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontFamily: 'mainFont', textAlign: 'center' }}>Don't have an account?</Text>
                            <Text style={{ color: '#233CBF', fontFamily: 'mainFont', textAlign: 'center' }} onPress={() => navigation.navigate("Signup")}> Signup</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Login;
