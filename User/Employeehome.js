
import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Employeehome = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    
    return (
        <>
             <ScrollView>
                <View style={{ height: 640 }}>
                    <View style={{ width: '88%', marginTop: 30, alignSelf: 'center', borderColor: 'lightgrey', borderRadius: 12, borderWidth: 1, padding: 10, marginBottom: 10 }}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'mainFont', marginLeft: 30, width: '60%', marginTop: 13, color: 'grey' }}>Today</Text>
                            <View style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', padding: 8, backgroundColor: 'white', borderWidth: 1, margin: 8, borderColor: 'lightgrey', borderRadius: 12 }}>
                                <View style={{ width: '80%', padding: 3 }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Web designing</Text>
                                    <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'black' }}>Onboarding</Text>
                                </View>
                                <View style={{ width: '80%' }}>
                                    <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>01 Mar</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ padding: 10, paddingTop: 0 }}>
                            <Text style={{ fontSize: 16, fontFamily: 'mainFont', marginLeft: 30, width: '60%', color: 'grey' }}>Upcoming</Text>
                            <View style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', padding: 8, backgroundColor: 'white', borderWidth: 1, margin: 8, borderColor: 'lightgrey', borderRadius: 12 }}>
                                <View style={{ width: '80%', padding: 3 }}>
                                    <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>SEO</Text>
                                    <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'black' }}>Onboarding</Text>
                                </View>
                                <View style={{ width: '80%' }}>
                                    <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>05 Mar</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Employeehome;