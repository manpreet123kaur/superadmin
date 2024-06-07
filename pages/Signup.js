import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope, faLock, faAngleDown, faEye, faAddressBook, faArrowLeftLong, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [toggleforrole, setToggleForRole] = useState(false);
    const [role, setRole] = useState('');

    const toggleRoleList = () => {
        setToggleForRole(!toggleforrole);
    };

    const handler = (selectedRole) => {
        setRole(selectedRole);
        setValue(selectedRole);
        setToggleForRole(false);
    };
    const [radio, setradio] = useState(false)
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pass, setpass] = useState(true)
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmpass, setconfirmpass] = useState(true)
    const [errors, setErrors] = useState({});

    const handleRoleChange = (selectedRole) => {
        setRole(selectedRole);
    };

    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf") 
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }


    const validateForm = () => {
        let errors = {};

        if (!userName.trim()) {
            errors.userName = "Username is required";
        }

        if (!email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = "Invalid email address";
        }

        if (!password) {
            errors.password = "Password is required";
        } else if (password.length < 6) {
            errors.password = "Password must be at least 6 characters long";
        }

        if (!confirmPassword.trim()) {
            errors.confirmPassword = "Please confirm your password";
        } else if (confirmPassword !== password) {
            errors.confirmPassword = "Passwords do not match";
        }

        if (!role.trim()) {
            errors.role = "Please add role";
        }
        const isValid = Object.keys(errors).length === 0;

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = async () => {

        if (validateForm()) {
            try {
                const response = await fetch("https://trackingtime-c5jw.onrender.com/api/admin/signup", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: userName,
                        email: email,
                        password: password,
                        role: role
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    console.warn("Response from server:", data);

                    await AsyncStorage.setItem('role', role.toLowerCase());

                    navigation.navigate("Login");
                } else {
                    const errorData = await response.json();
                    console.warn('Signup error:', errorData);
                    throw new Error('Signup failed');
                }
            } catch (error) {
                console.error('Signup error:', error);
                throw new Error('Signup failed');
            }
        }
    };

    return (
        <>
            <ScrollView>
                <View style={{ width: '100%', height: '100%', paddingBottom: 20 }}>
                    <View style={{ width: '100%' }}>
                        <TouchableOpacity style={{ paddingLeft: 20, marginTop: 30 }} onPress={() => navigation.navigate("Splashscreen")}>
                            <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                        </TouchableOpacity>
                        <View style={{ width: '100%', padding: 15 }}>
                            <Text style={{ color: '#233CBF', fontSize: 25, fontFamily: 'mainFont', fontWeight: 700, textAlign: 'center' }}>Let's Get Started!</Text>
                            <Text style={{ color: 'black', fontSize: 15, fontFamily: 'mainFont', textAlign: 'center', paddingLeft: 10, paddingRight: 10 }}>Create an account to Q Allure to get all features</Text>
                        </View>
                        <View style={{ width: 200, height: 200, alignSelf: 'center' }}>
                            <Image style={{ width: "100%", height: "100%", borderRadius: 20 }} source={require("../assets/images/vector2.png")} />
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 9, borderRadius: 12, marginTop: 12 }}>
                                <FontAwesomeIcon color={'grey'} icon={faUser} />
                                <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont', padding: 0 }} placeholder="Username" value={userName} onChangeText={setUserName} />
                            </View>
                            {errors.userName && <Text style={{ color: 'red', marginLeft: 40, fontFamily: 'mainFont' }}>{errors.userName}</Text>}

                            <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 9, borderRadius: 12, marginTop: 12 }}>
                                <FontAwesomeIcon color={'grey'} icon={faEnvelope} />
                                <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont', padding: 0 }} placeholder="Email" value={email} onChangeText={setEmail} />
                            </View>
                            {errors.email && <Text style={{ color: 'red', marginLeft: 40, fontFamily: 'mainFont' }}>{errors.email}</Text>}

                            <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 9, borderRadius: 12, marginTop: 12 }}>
                                <FontAwesomeIcon color={'grey'} icon={faLock} />
                                <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont', padding: 0 }} placeholder="Password" secureTextEntry={pass} value={password} onChangeText={val => setPassword(val)} />
                                <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setpass(!pass)}>
                                    <FontAwesomeIcon color="grey" icon={faEye} />
                                </TouchableOpacity>
                            </View>
                            {errors.password && <Text style={{ color: 'red', marginLeft: 40, fontFamily: 'mainFont' }}>{errors.password}</Text>}

                            <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 9, borderRadius: 12, marginTop: 12 }}>
                                <FontAwesomeIcon color={'grey'} icon={faLock} />
                                <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont', padding: 0 }} placeholder="Confirm Password" secureTextEntry={confirmpass} onChangeText={val => setConfirmPassword(val)} />
                                <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setconfirmpass(!confirmpass)}>
                                    <FontAwesomeIcon color="grey" icon={faEye} />
                                </TouchableOpacity>
                            </View>
                            {errors.confirmPassword && <Text style={{ color: 'red', marginLeft: 40, fontFamily: 'mainFont' }}>{errors.confirmPassword}</Text>}

                            <View>
                                <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 9, borderRadius: 12, marginTop: 12 }}>
                                    <FontAwesomeIcon color={'grey'} icon={faAddressBook} />
                                    <Text style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont', padding: 4, color: 'grey' }}>Role : {role}</Text>
                                    <TouchableOpacity onPress={toggleRoleList}>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: '80%', alignSelf: "center" }}>
                                    {toggleforrole && (
                                        <View style={{ borderWidth: 1, borderColor: '#5E73E4', width: '30%', alignSelf: "flex-end", padding: 3, margin: 2, borderRadius: 10 }}>
                                            <TouchableOpacity onPress={() => handler("user")}>
                                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 2 }}>user</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handler("admin")}>
                                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 2 }}>admin</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handler("Hr")}>
                                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 2 }}>Hr</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handler("TL")}>
                                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 2 }}>TL</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </View>
                            </View>
                            {errors.role && <Text style={{ color: 'red', marginLeft: 40, fontFamily: 'mainFont' }}>{errors.role}</Text>}
                        </View>
                        <TouchableOpacity style={{ alignSelf: 'center', padding: 20 }} onPress={handleSubmit}>
                            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'mainFont', backgroundColor: '#233CBF', width: 130, textAlign: 'center', padding: 13, borderRadius: 25 }}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 0, alignSelf: 'center' }}>
                        <Text style={{ fontFamily: 'mainFont', textAlign: 'center' }}>Already have an account?</Text>
                        <Text style={{ color: '#233CBF', fontFamily: 'mainFont', textAlign: 'center' }} onPress={() => navigation.navigate("Login")}> login here</Text>
                    </View>
                </View>
            </ScrollView >
        </>
    )
}

export default Signup;


