import React from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquarePlus, faTrashCan, faLock, faArrowLeft, faEye, faArrowLeftLong, faPlus } from '@fortawesome/free-solid-svg-icons';
import * as Progress from 'react-native-progress';

const Projectpersons = ({ navigation }) => {
    const data = [
        { email: 'abc@gmail.com' },
        { email: 'abc@gmail.com' },
        { email: 'abc@gmail.com' },
        { email: 'abc@gmail.com' },
        { email: 'abc@gmail.com' },
        { email: 'abc@gmail.com' },
        { email: 'abc@gmail.com' },
        { email: 'abc@gmail.com' },
    ]
    const teamNames = ['Mehak', 'Manpreet', 'kuldeep', "Anurag", "Harman", 'kuldeep', "Anurag", "Harman"];
    const Position = ['web desinger', 'front end developer', 'back-End Developer', "full stack", "Web Developer", 'back-End Developer', "full stack", "Web Developer"];

    const renderRows = () => {
        return data.map((item, index) => (

            <TouchableOpacity key={index} style={{ flexDirection: 'row', width: '100%', padding: 4, alignSelf: 'center', margin: 6, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }} onPress={() => navigation.navigate("Employeeprogessfortl")}>
                <TouchableOpacity style={{ width: '30%' }} >
                    <Text style={{ fontFamily: 'mainFont', padding: 8, fontSize: 13 }}>{teamNames[index]}</Text>
                </TouchableOpacity>
                <View style={{ width: '37%' }}>
                    <Text style={{ fontFamily: 'mainFont', padding: 8, fontSize: 13, color: 'grey', textAlign: 'center' }}>{item.email}</Text>
                </View>
                <View style={{ width: '30%' }}>
                    <Text style={{ fontFamily: 'mainFont', padding: 8, fontSize: 13, color: 'grey', textAlign: 'right' }}>{Position[index]}</Text>
                </View>
            </TouchableOpacity>
        ));
    };
    return (
        <>
            <ScrollView>
                <View style={{ marginBottom: 25 }}>
                    <View style={{ width: '95%', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ alignSelf: 'center', width: '70%' }}>
                            <TouchableOpacity style={{ paddingLeft: 20, marginTop: 45 }} onPress={() => navigation.navigate("DrawernavigationT")}>
                                <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                            </TouchableOpacity>
                            <View style={{ width: '100%', padding: 17 }}>
                                <Text style={{ color: "#233CBF", fontSize: 24, fontFamily: 'mainFont' }}>Team Details</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: 'lightgrey', width: "90", alignSelf: 'center', padding: 10, borderRadius: 10, margin: 10, borderBottomWidth: 3 }}>
                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                            <View style={{ flexDirection: 'row', width: '70%' }}>
                                <Text style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'pink', margin: 5 }}></Text>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14 }}>Spending Time</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'grey' }}>72h 30m</Text>
                            </View>
                        </View>

                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                            <View style={{ flexDirection: 'row', width: '70%' }}>
                                <Text style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'skyblue', margin: 5 }}></Text>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14 }}>Pending Time</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'grey' }}>13h 20m</Text>
                            </View>
                        </View>

                        <View style={{ width: '90%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                            <View style={{ flexDirection: 'row', width: '70%' }}>
                                <Text style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#008000', margin: 5 }}></Text>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14 }}>Total estimated time</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'grey' }}>86h</Text>
                            </View>
                        </View>
                        <View style={{ alignSelf: 'center', padding: 15 }}>
                            <Progress.Bar progress={0.3} width={280} />
                        </View>
                    </View>

                    <View style={{ padding: 10, width: '93%', alignSelf: 'center', flexDirection: 'row', backgroundColor: 'pink' }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 12, width: '33%', fontWeight: '700' }}>Name</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 12, width: '30%', textAlign: 'center', fontWeight: '700' }}>Position</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 12, width: '37%', textAlign: "right", fontWeight: '700' }}>E-mail</Text>
                    </View>

                    <ScrollView>
                        <View style={{ width: '98%', alignSelf: 'center', padding: 5 }}>
                            {renderRows()}
                        </View>
                    </ScrollView>

                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }} >
                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '30%', padding: 12, borderRadius: 6, marginRight: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Add Member</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default Projectpersons;