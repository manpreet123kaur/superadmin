import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faCalendarPlus, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const Splashscreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const [signupButtonStyles, setSignupButtonStyles] = useState({
        backgroundColor: 'white',
        borderColor: '#233CBF',
        textColor: 'black'
    });

    useEffect(() => {
        if (fontsLoaded) {
            setSignupButtonStyles({
                backgroundColor: 'white',
                borderColor: '#233CBF',
                textColor: 'black'
            });
        }
    }, [fontsLoaded]);

    const handleSignupPress = () => {
        navigation.navigate("Signup");
        setSignupButtonStyles({
            backgroundColor: '#233CBF',
            borderColor: 'transparent',
            textColor: 'white'
        });
    };

    return (
        <View style={{ backgroundColor: "white", height: 840 }}>
             <TouchableOpacity style={{ width: '90%', alignSelf: 'center', marginTop: 30 }} onPress={() => navigation.navigate("Getstarted")}>
                        <FontAwesomeIcon style={{ width: '100%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                    </TouchableOpacity>
            <View style={{ width: 300, height: 300, alignSelf: 'center', marginTop: 30 }}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 200 }} source={require("../assets/images/vector.jpg")} />
            </View>
            <View>
                <View style={{ padding: 15, width: "100%", marginTop: 10 }}>
                    <Text style={{ fontSize: 25, fontFamily: 'mainFont', color: 'black' }}>Discover the Highest projects around the world.</Text>
                    <Text style={{ fontSize: 15, fontFamily: 'mainFont', color: 'grey', lineHeight: 20, marginTop: 8 }}>Lorem Unlock this file and get unlimited access to over 142,746,000 Premium assetsUnlock this file and get unlimited access to over 142,746,000 Premium assets.</Text>
                </View>
            </View>
            <TouchableOpacity style={[styles.button2, { backgroundColor: '#233CBF' }]} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.buttonText2}>Login</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', alignSelf: 'center', alignItems: 'center', margin: 4 }}>
                <Text style={{ fontFamily: 'mainFont' }}>or</Text>
            </View>

            <TouchableOpacity style={[styles.button, { backgroundColor: signupButtonStyles.backgroundColor, borderColor: signupButtonStyles.borderColor }]} onPress={handleSignupPress} >
                <Text style={[styles.buttonText, { color: signupButtonStyles.textColor }]}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button2: {
        width: '80%',
        alignSelf: 'center',
        borderRadius: 25,
        margin: 10,
        padding: 15,
        alignItems: 'center',
    },
    button: {
        width: '80%',
        alignSelf: 'center',
        borderRadius: 25,
        margin: 10,
        padding: 15,
        alignItems: 'center',
        borderWidth: 1
    },
    buttonText: {
        fontFamily: 'mainFont',
        textAlign: 'center'
    },
    buttonText2: {
        color: 'white',
        fontFamily: 'mainFont',
        textAlign: 'center'
    }
});

export default Splashscreen;