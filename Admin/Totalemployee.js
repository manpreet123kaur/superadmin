import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Totalemployee = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")
    });

    const data = [
        { email: '9 : 00', backgroundColor: 'white' },
        { email: '9 : 00', backgroundColor: '#e1e6f7' },
        { email: '9 : 00', backgroundColor: 'white' },
        { email: '9 : 00', backgroundColor: '#e1e6f7' },
        { email: '9 : 00', backgroundColor: 'white' },
        { email: '9 : 00', backgroundColor: '#e1e6f7' },
        { email: '9 : 00', backgroundColor: 'white' },
        { email: '9 : 00', backgroundColor: '#e1e6f7' },

    ];

    const teamNames = ['Mehak', 'Manpreet', 'kuldeep', "Anurag", "Harman", 'kuldeep', "Anurag", "Harman"];
    const Checkout = ['6 : 00', '6 : 30', '6 : 30', '6 : 50', '7 : 30', '7 : 00', '6 : 30', '6 : 30'];

    const renderRows = () => {
        return data.map((item, index) => (
            <TouchableOpacity key={index} style={{ flexDirection: 'row', width: '100%', backgroundColor: item.backgroundColor, padding: 4 }} onPress={() => navigation.navigate("Employeeattendenceforadmin")}>
                <TouchableOpacity style={{ width: '34%' }} >
                    <Text style={{ fontFamily: 'mainFont', padding: 8, fontSize: 13 }}>{teamNames[index]}</Text>
                </TouchableOpacity>
                <View style={{ width: '33%' }}>
                    <Text style={{ fontFamily: 'mainFont', textAlign: 'center', padding: 10, fontSize: 15 }}>{item.email}</Text>
                </View>
                <View style={{ width: '33%' }}>
                    <Text style={{ fontFamily: 'mainFont', textAlign: 'center', padding: 10, fontSize: 15 }}>{Checkout[index]}</Text>
                </View>
            </TouchableOpacity>
        ));
    };

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <View style={{ alignSelf: 'center', width: '100%', flexDirection: 'row', alignItems: 'center', paddingLeft: 20, marginTop: 35 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Adrawernavigation")}>
                        <FontAwesomeIcon style={{ width: '5%' }} color='#233CBF' size={22} icon={faAngleLeft} />
                    </TouchableOpacity>
                    <View style={{ width: '95%', padding: 17, paddingTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: "flex-end" }}>
                        <FontAwesomeIcon color='#233CBF' size={22} icon={faCaretLeft} />
                        <Text style={{ fontSize: 20, fontFamily: 'mainFont', color: '#233CBF', paddingLeft: 10, paddingRight: 10 }}>Today</Text>
                        <FontAwesomeIcon color='#233CBF' size={22} icon={faCaretRight} />
                    </View>
                </View>



                <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#CBC3E3', padding: 6, borderWidth: 1 }}>
                    <View style={{ width: '33%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'center', fontWeight: 700 }}>Employee Name</Text>
                    </View>
                    <View style={{ width: '33%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'center', fontWeight: 700 }}>Check-in</Text>
                    </View>
                    <View style={{ width: '33%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'center', fontWeight: 700 }}>Check-out</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ width: '98%', alignSelf: 'center', marginBottom: 20, padding: 5 }}>
                        {renderRows()}
                    </View>
                </ScrollView>

            </View>
        </>
    )
}

export default Totalemployee;