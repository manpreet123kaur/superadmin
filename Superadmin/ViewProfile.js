import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, faChevronRight, faMagnifyingGlass, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPowerOff, faLock, faPenToSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list'

const ViewProfile = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ alignSelf: 'center', marginTop: 30, backgroundColor: 'white' }}>
                    <View style={{ width: 100, height: 100, borderRadius: 100 }}>
                        <Image style={{ width: '100%', height: '100%', borderRadius: 100, borderWidth: 1, borderColor: 'black' }} source={require("../pages/assests/images/kaviya.png")} />
                    </View>
                    <Text style={{ fontSize: 20, fontFamily: 'mainFont', fontWeight: 700 }}>Jasmeet kaur</Text>
                    <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>jasmeet@gmail.com</Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#233CBF', padding: 8, width: '28%', borderRadius: 8, alignSelf: 'center', margin: 10 }}onPress={() => navigation.navigate("Profiledit")}>
                    <Text style={{ color: 'white', fontFamily: 'mainFont', textAlign: 'center' }}>Edit Profile</Text>
                </TouchableOpacity>
                <View style={{ borderTopWidth: 1, borderColor: 'lightgrey', width: '90%', alignSelf: 'center' }}>
                    <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 15 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Full name</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>jasmeet Kaur</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 15, width: '45%' }}>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Gender</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>Male</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 15, width: '43%' }}>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Birthday</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>02-01-2000</Text>
                        </View>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 15 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Phone number</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>+91 6786789689</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 15 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Email</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>abcdefgh@gmai.com</Text>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 15 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>User name</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>@jasmeetk</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default ViewProfile;