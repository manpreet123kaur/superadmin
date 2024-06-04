import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, Modal, Button, StyleSheet, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsis, faSquareXmark, faEllipsisVertical, faFaceSmile, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

const UsersH = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <View style={{ width: "100%", padding: 20 }}>
                    <TouchableOpacity style={{ width: '40%', alignSelf: 'flex-end' }} onPress={() => navigation.navigate("Addnewhr")}>
                        <Text style={{ fontFamily: 'mainFont', color: 'white', backgroundColor: '#233CBF', padding: 8, borderRadius: 6, textAlign: 'center', fontSize: 12 }}>Add New Employee</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#e1e6f7', alignSelf: 'center', padding: 10, borderBottomWidth: 1 }}>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: 700 }}>Username</Text>
                    </View>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: 700, textAlign: 'center' }}>Email</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'right', fontWeight: 700 }}>Detail</Text>
                    </View>
                </View>

                <ScrollView style={{ borderWidth: 1, width: "98%", alignSelf: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', width: '100%', backgroundColor: "white", padding: 4, alignItems: 'center' }} >
                        <View style={{ width: '25%', }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, fontWeight: '700' }}>Jenis</Text>
                        </View>
                        <View style={{ width: '45%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, width: '100%', textAlign: 'center', fontWeight: "700" }}>abc@example.com</Text>
                        </View>
                        <TouchableOpacity style={{ width: '30%' }} onPress={() => navigation.navigate("Employeesprofile")}>
                            <FontAwesomeIcon style={{ alignSelf: 'flex-end', marginRight: 20 }} icon={faEllipsis} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', width: '100%', backgroundColor: "#e1e6f7", padding: 4, alignItems: 'center' }} >
                        <View style={{ width: '25%', }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, fontWeight: '700' }}>Jenis</Text>
                        </View>
                        <View style={{ width: '45%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, width: '100%', textAlign: 'center', fontWeight: "700" }}>abc@example.com</Text>
                        </View>
                        <TouchableOpacity style={{ width: '30%' }} onPress={() => navigation.navigate("Employeesprofile")}>
                            <FontAwesomeIcon style={{ alignSelf: 'flex-end', marginRight: 20 }} icon={faEllipsis} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
};
export default UsersH;
