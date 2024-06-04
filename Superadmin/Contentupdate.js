import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, faChevronRight, faMagnifyingGlass, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck, faLock, faPenToSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list'

const Contentupdate = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: 'white', width: '100%', height: 700 }}>
                    <View style={{ width: 380, height: 200, alignSelf: 'center' }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/aboutus.jpg")} />
                    </View>
                    <View style={{ width: '100%', alignSelf: 'center', padding: 14, paddingTop: 60 }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 10, fontWeight: "500", padding: 5 }}>Post Title : </Text>
                        <TextInput style={{ borderBottomWidth: 2, width: "95%", alignSelf: 'center', borderColor: 'lightgrey', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, padding: 8, borderWidth: 1, borderRadius: 12, borderTopLeftRadius: 12, }} placeholder='' />
                    </View>

                    <View style={{ width: '100%', alignSelf: 'center', padding: 14 }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 10, fontWeight: "500", padding: 5 }}>What’s in Tracking? : </Text>
                        <TextInput style={{ borderBottomWidth: 2, width: "95%", alignSelf: 'center', borderColor: 'lightgrey', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, padding: 10, borderWidth: 1, borderRadius: 12, borderTopLeftRadius: 12, fontSize: 10, height: 70 }} placeholder='Our dream' />
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 40, marginRight: 40, marginBottom: 20 }}>
                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '30%', padding: 12, borderRadius: 6, marginRight: 10 }} >
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Contentupdate;