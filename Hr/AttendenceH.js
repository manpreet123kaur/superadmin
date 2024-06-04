import React, { useState, useEffect } from 'react';;
import { Button, View, Text, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";

const AttendenceH = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: 'white', height: 700 }}>
                    <View style={{ width: '90%', alignSelf: 'center', borderBottomWidth: 3, borderColor: "grey", borderBottomRightRadius: 12, borderBottomLeftRadius: 12, padding: 10 }}>
                        <Text style={{ fontFamily: 'mainFont', fontWeight: 500, fontSize: 22, paddingLeft: 15 }}>Monday</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 12, paddingLeft: 15 }}>12 January 2003</Text>
                    </View>

                    <View style={{ paddingTop: 20 }}>
                        <View style={{ width: 300, height: 300, alignSelf: 'center' }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/adminattenddence.png")} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                            <TouchableOpacity style={{ width: '40%', margin: 10, backgroundColor: '#ffbddd', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: 'lightgrey', borderBottomWidth: 3 }} onPress={() => navigation.navigate("Overallattendence")}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'mainFont', width: '90%', fontWeight: 700 }}>227</Text>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'mainFont' }}>Total Employees</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '40%', margin: 10, backgroundColor: '#adffcf', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: 'lightgrey', borderBottomWidth: 3 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'mainFont', width: '90%', fontWeight: 700 }}>138</Text>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'mainFont' }}>on Time</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                            <TouchableOpacity style={{ width: '40%', margin: 10, backgroundColor: '#cbacff', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: 'lightgrey', borderBottomWidth: 3 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'mainFont', width: '80%', fontWeight: 700 }}>62</Text>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'mainFont' }}>Late Arrival</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '40%', margin: 10, backgroundColor: '#ffc395', padding: 20, borderRadius: 12, borderWidth: 1, borderColor: 'lightgrey', borderBottomWidth: 3 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 20, fontFamily: 'mainFont', width: '90%', fontWeight: 700 }}>27</Text>
                                </View>
                                <Text style={{ fontSize: 12, fontFamily: 'mainFont' }}>Absent</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default AttendenceH;