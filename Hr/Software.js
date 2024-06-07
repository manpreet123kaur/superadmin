import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, faChevronRight, faMagnifyingGlass, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faCircleXmark, faPenToSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Software = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <View style={{ width: '100%', height: '100%' }}>
                <View style={{ width: '95%', alignSelf: 'center', height: '8%' }}>
                    <TouchableOpacity style={{ paddingLeft: 20, marginTop: 45 }} onPress={() => navigation.navigate("Recentvacany")}>
                        <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                    </TouchableOpacity>
                    <View style={{ width: '100%' }}>
                        <Text style={{ color: "#233CBF", textAlign: 'center', fontSize: 24, fontFamily: 'mainFont' }}>Software Engineer</Text>
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', height: '66%' }}>
                    <FontAwesomeIcon style={{ alignSelf: 'center', margin: 20 }} color='red' size={22} icon={faCircleXmark} />
                    <TextInput style={{ fontSize: 20, fontFamily: 'mainFont', textAlign: 'center' }} placeholder='Closed' />

                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', textAlign: 'center', lineHeight: 19, padding: 15 }}>we won't be offering you a position, as there were candidates whose skills and experience better suit what we're looking for.</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: "100%", alignSelf: "flex-end", padding: 10, marginTop: 20, justifyContent: 'flex-end', height: '26%' }}>
                    <TouchableOpacity style={{ backgroundColor: '#233CBF', width: "30%", alignSelf: 'center', marginTop: 20, borderRadius: 6, margin: 10 }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center', padding: 6 }}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#233CBF', width: "30%", alignSelf: 'center', marginTop: 20, borderRadius: 6, margin: 10 }} onPress={() => navigation.navigate("Recentvacany")}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center', padding: 6 }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Software;