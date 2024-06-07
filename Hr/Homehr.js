import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Homehr = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>

            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: 'center', marginTop: 20 }}>
                    <View style={{ width: '45%', backgroundColor: '#d2ffdd', borderRadius: 8, margin: 8, padding: 8, borderWidth: 1, borderRightWidth: 2 }}>
                        <Text style={{ fontWeight: '700', fontFamily: 'mainFont' }}>Employees</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ width: '90%', fontSize: 13, fontFamily: 'mainFont' }}>Total Employees</Text>
                            <FontAwesomeIcon icon={faUsers} />
                        </View>
                        <Text>10</Text>
                    </View>
                    <View style={{ width: '45%', backgroundColor: '#e9e7ff', borderRadius: 8, margin: 8, padding: 8, borderWidth: 1, borderRightWidth: 2 }}>
                        <Text style={{ fontWeight: '700', fontFamily: 'mainFont' }}>Holiday</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ width: '90%', fontSize: 13, fontFamily: 'mainFont' }}>Total Holiday</Text>
                            <FontAwesomeIcon icon={faUsers} />
                        </View>
                        <Text>10</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center', alignSelf: 'center' }}>
                    <View style={{ width: '45%', backgroundColor: '#ffdff7', borderRadius: 8, margin: 8, padding: 8, borderWidth: 1, borderRightWidth: 2 }}>
                        <Text style={{ fontWeight: '700', fontFamily: 'mainFont' }}>Applicants</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ width: '90%', fontSize: 13, fontFamily: 'mainFont' }}>Total Applicants</Text>
                            <FontAwesomeIcon color='' icon={faUsers} />
                        </View>
                        <Text>10</Text>
                    </View>
                    <View style={{ width: '45%', borderRadius: 8, margin: 8, padding: 8 }}>

                    </View>
                </View>
                <Text style={{ color: 'grey', fontWeight: '700', fontSize: 18, padding: 5, paddingLeft: 20, borderBottomWidth: 3, width: "58%", alignSelf: 'center', borderRadius: 8, borderColor: 'grey', marginTop: 20, marginBottom: 10 }}>Employee of The Month</Text>
                <View style={{ width: '95%', alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, width: '90%', borderWidth: 1, borderColor: 'lightgrey', margin: 7, borderRadius: 8, borderBottomWidth: 3, alignSelf: 'center' }}>
                        <FontAwesomeIcon size={35} icon={faCircleUser} />
                        <View>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 20, fontWeight: '700' }}>Jaspreet Kaur</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13, marginLeft: 20 }}>Backend Developer</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, width: '90%', borderWidth: 1, borderColor: 'lightgrey', margin: 7, borderRadius: 8, borderBottomWidth: 3, alignSelf: 'center' }}>
                        <FontAwesomeIcon size={35} icon={faCircleUser} />
                        <View>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 20, fontWeight: '700' }}>Jaspreet Kaur</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13, marginLeft: 20 }}>Backend Developer</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, width: '90%', borderWidth: 1, borderColor: 'lightgrey', margin: 7, borderRadius: 8, borderBottomWidth: 3, alignSelf: 'center' }}>
                        <FontAwesomeIcon size={35} icon={faCircleUser} />
                        <View>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 20, fontWeight: '700' }}>Jaspreet Kaur</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13, marginLeft: 20 }}>Backend Developer</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, width: '90%', borderWidth: 1, borderColor: 'lightgrey', margin: 7, borderRadius: 8, borderBottomWidth: 3, alignSelf: 'center' }}>
                        <FontAwesomeIcon size={35} icon={faCircleUser} />
                        <View>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 20, fontWeight: '700' }}>Jaspreet Kaur</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13, marginLeft: 20 }}>Backend Developer</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8, width: '90%', borderWidth: 1, borderColor: 'lightgrey', margin: 7, borderRadius: 8, borderBottomWidth: 3, alignSelf: 'center' }}>
                        <FontAwesomeIcon size={35} icon={faCircleUser} />
                        <View>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 20, fontWeight: '700' }}>Jaspreet Kaur</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13, marginLeft: 20 }}>Backend Developer</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </>
    )
}

export default Homehr;