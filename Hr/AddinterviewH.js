import React, { useState } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView ,TextInput} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faCircleXmark, faUsers, faAddressBook, faChalkboardUser, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const AddinterviewH = ({ navigation }) => {
    return (
        <View style={{ flex: 1, width: '98%', alignSelf: 'center' }}>
            <TouchableOpacity style={{ paddingLeft: 20, marginTop: 45 }} onPress={() => navigation.navigate("DrawernavigationH")}>
                <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
            </TouchableOpacity>
            <View style={{ width: '100%' }}>
                <Text style={{ color: "#233CBF", textAlign: 'center', fontSize: 24, fontWeight: 700, fontFamily: 'mainFont' }}>Add new Interview</Text>
            </View>

            <View style={{ width: '95%', alignSelf: 'center' }}>
                <Text style={{ fontSize: 14, fontFamily: 'mainFont', textAlign: 'center', padding: 10, paddingTop: 30, paddingBottom: 30 }}>face-to-face meeting or two-way communication between the recruiter and the candidate.</Text>
            </View>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <View style={{ width: '100%', alignSelf: 'center', padding: 13, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont' }}>Candidate : </Text>
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', color: 'grey' }}>Jenis Rozenfeld
                        </Text>
                        <Text style={{ fontSize: 12, fontFamily: 'mainFont', color: 'grey' }}>SEO
                            Engineering</Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignSelf: 'center', padding: 13, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont' }}>Experience </Text>
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', color: 'grey' }}>6 months</Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignSelf: 'center', padding: 13, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont' }}>Job Title</Text>
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', color: 'grey' }}>abcde</Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignSelf: 'center', padding: 13, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont' }}>Date & Place : </Text>
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', color: 'grey' }}>Feb 04,2024</Text>
                        <Text style={{ fontSize: 12, fontFamily: 'mainFont', color: 'grey' }}>
                            14:00 - 15:00
                        </Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignSelf: 'center', padding: 13, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 12, borderBottomLeftRadius: 12 }}>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont' }}>Source : </Text>
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', color: 'grey' }}>LinkedIn</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', margin: 15, justifyContent: 'center' }}>
                <TouchableOpacity style={{ width: '30%', backgroundColor: '#233CBF', borderRadius: 6, margin: 8 }} onPress={() => navigation.navigate("Interviewschedule")}>
                    <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'white', textAlign: 'center', padding: 10 }}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '30%', backgroundColor: '#233CBF', borderRadius: 6, margin: 8 }} onPress={() => navigation.navigate("Interviewschedule")}>
                    <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'white', textAlign: 'center', padding: 10 }}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddinterviewH;