import React, { useState } from 'react';
import { useFonts } from "expo-font";
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import * as Progress from 'react-native-progress';

const TeamdetailH = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView>
            <View style={{ width: '95%', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', paddingTop: 20 }}>
                <TouchableOpacity style={{ width: '5%' }} onPress={() => navigation.navigate("DrawernavigationH")}>
                    <FontAwesomeIcon color='#233CBF' size={22} icon={faAngleLeft} />
                </TouchableOpacity>
                <View style={{ width: '90%', padding: 17 }}>
                    <Text style={{ color: "#233CBF", fontSize: 24, fontFamily: 'mainFont', textAlign: 'center' }}>Team Details</Text>
                </View>
            </View>

            <View style={{ alignSelf: 'center', padding: 15, width: '90%' }}>
                <View style={{ width: '100%', flexDirection: "row", alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'mainFont', width: '30%', fontWeight: 700 }}>TL Name :</Text>
                    <TextInput style={{ fontFamily: 'mainFont', width: '70%' }} placeholder='kuldeep' />
                </View>
                <View style={{ width: '100%', flexDirection: "row", alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'mainFont', width: '30%', fontWeight: 700 }}>Start Date :</Text>
                    <TextInput style={{ fontFamily: 'mainFont', width: '70%' }} placeholder='29/05/2024' />
                </View>
                <View style={{ width: '100%', flexDirection: "row", alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'mainFont', width: '30%', fontWeight: 700 }}>End Date :</Text>
                    <TextInput style={{ fontFamily: 'mainFont', width: '70%' }} placeholder='29/05/2024' />
                </View>
            </View>

            <View style={{ alignSelf: 'center', padding: 15, width: '90%' }}>
                <TouchableOpacity style={{ backgroundColor: '#e7ddff', width: '40%', borderRadius: 8, margin: 10 }} >
                    <Text style={{ fontFamily: 'mainFont', textAlign: 'center', padding: 8 }}>Team members</Text>
                </TouchableOpacity>
                <>
                    <View>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', width: '100%', padding: 10, borderWidth: 1, borderRadius: 8, borderColor: 'lightgrey', marginTop: 8 }} onPress={() => navigation.navigate("UserprofileH")}>
                            <View style={{ width: '20%' }}>
                                <View style={{ width: 45, height: 45 }}>
                                    <Image style={{ width: "100%", height: "100%", borderRadius: 45 }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontWeight: 'bold' }}>Name : mohan ksp</Text>
                                <Text style={{ fontFamily: 'mainFont' }}>Position : nodejs</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', width: '100%', padding: 10, borderWidth: 1, borderRadius: 8, borderColor: 'lightgrey', marginTop: 8 }} onPress={() => navigation.navigate("UserprofileH")}>
                            <View style={{ width: '20%' }}>
                                <View style={{ width: 45, height: 45 }}>
                                    <Image style={{ width: "100%", height: "100%", borderRadius: 45 }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontWeight: 'bold' }}>Name : mohan ksp</Text>
                                <Text style={{ fontFamily: 'mainFont' }}>Position : nodejs</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', width: '100%', padding: 10, borderWidth: 1, borderRadius: 8, borderColor: 'lightgrey', marginTop: 8 }} onPress={() => navigation.navigate("UserprofileH")}>
                            <View style={{ width: '20%' }}>
                                <View style={{ width: 45, height: 45 }}>
                                    <Image style={{ width: "100%", height: "100%", borderRadius: 45 }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontWeight: 'bold' }}>Name : mohan ksp</Text>
                                <Text style={{ fontFamily: 'mainFont' }}>Position : nodejs</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </>

            </View>

            <View style={{ alignSelf: 'center', padding: 10 }}>
                <View style={{alignSelf:'center'}}>
                    <Progress.Pie progress={0.4} size={100} />
                </View>
                <Text style={{ fontFamily: 'mainFont' }}>The progress of <Text style={{ fontWeight: '500' }}>IBaad Acadamy</Text></Text>
            </View>
            <View style={{ borderWidth: 1, borderColor: 'lightgrey', width: "90%", borderRadius: 8, alignSelf: 'center', padding: 10 }}>
                <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                    <View style={{ flexDirection: 'row', width: '70%' }}>
                        <Text style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'pink', margin: 5 }}></Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14 }}>Spending Time</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'grey' }}>72h 30m</Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                    <View style={{ flexDirection: 'row', width: '70%' }}>
                        <Text style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: 'skyblue', margin: 5 }}></Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14 }}>Pending Time</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'grey' }}>13h 20m</Text>
                    </View>
                </View>
                <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', alignItems: 'center', padding: 4 }}>
                    <View style={{ flexDirection: 'row', width: '70%' }}>
                        <Text style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#008000', margin: 5 }}></Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14 }}>Total estimated time</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'grey' }}>86h</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default TeamdetailH;

