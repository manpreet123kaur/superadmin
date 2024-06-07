import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, faChevronRight, faMagnifyingGlass, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck, faLock, faPenToSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Subscription = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: 'white', height: '100%', width: '100%' }}>
                    <View style={{
                        width: "75%", alignSelf: 'center', borderColor: 'lightgrey', margin: 30, padding: 5, borderBottomWidth: 3, borderRadius: 8 ,backgroundColor:'#e1e6f7'
                    }}>
                        <View style={{ padding: 5 }}>
                            <Text style={{ color: '#233CBF', fontSize: 22, textAlign: 'center', fontWeight: '500', fontFamily: 'mainFont', paddingTop: 10, paddingBottom: 5 }}>BASIC</Text>
                            <Text style={{ width: 80, height: 3, borderRadius: 8, backgroundColor: '#233CBF', alignSelf: 'center' }}></Text>
                        </View>
                        <View style={{ alignSelf: 'center', padding: 20, borderBottomWidth: 1, borderColor: "grey", width: '70%' }}>
                            <Text style={{ color: 'black', fontSize: 24, textAlign: 'center', fontWeight: '900', fontFamily: 'mainFont' }}>$10</Text>
                            <Text style={{ color: 'grey', fontSize: 13, textAlign: 'center', fontFamily: 'mainFont' }}>Per Month</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>All Features</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>Chat Support</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>50 Audio & Video
                                    Calls Free
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '50%', padding: 12, borderRadius: 6, alignSelf: 'center', margin: 20 }} >
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Select Plan</Text>
                        </TouchableOpacity> 
                    </View>

                    <View style={{ width: "75%", alignSelf: 'center', borderColor: 'lightgrey', margin: 30, padding: 10, borderBottomWidth: 3, borderRadius: 8 ,backgroundColor:'#e1e6f7' }}>
                        <View style={{ padding: 5 }}>
                            <Text style={{ color: '#233CBF', fontSize: 22, textAlign: 'center', fontWeight: '500', fontFamily: 'mainFont', paddingTop: 10, paddingBottom: 5 }}>STANDARD</Text>
                            <Text style={{ width: 130, height: 3, borderRadius: 8, backgroundColor: '#233CBF', alignSelf: 'center' }}></Text>
                        </View>
                        <View style={{ alignSelf: 'center', padding: 20, borderBottomWidth: 1, borderColor: "grey", width: '70%' }}>
                            <Text style={{ color: 'black', fontSize: 24, textAlign: 'center', fontWeight: '900', fontFamily: 'mainFont' }}>$100</Text>
                            <Text style={{ color: 'grey', fontSize: 13, textAlign: 'center', fontFamily: 'mainFont' }}>Per Month</Text>
                        </View>
                        <View style={{ padding: 0 }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>Vat Features</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>Mailing Address</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>Mailing Scanning & Security
                                    Calls Free
                                </Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>HD Quality</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>150 Audio & Video Calls Free
                                    Calls Free
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '50%', padding: 12, borderRadius: 6, alignSelf: 'center', margin: 20 }} >
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Select Plan</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: "75%", alignSelf: 'center', borderColor: 'lightgrey', margin: 30, padding: 5, borderBottomWidth: 3, borderRadius: 8 ,backgroundColor:'#e1e6f7'
                    }}>
                        <View style={{ padding: 5 }}>
                            <Text style={{ color: '#233CBF', fontSize: 22, textAlign: 'center', fontWeight: '500', fontFamily: 'mainFont', paddingTop: 10, paddingBottom: 5 }}>PREMIUM</Text>
                            <Text style={{ width: 110, height: 3, borderRadius: 8, backgroundColor: '#233CBF', alignSelf: 'center' }}></Text>
                        </View>
                        <View style={{ alignSelf: 'center', padding: 20, borderBottomWidth: 1, borderColor: "grey", width: '70%' }}>
                            <Text style={{ color: 'black', fontSize: 24, textAlign: 'center', fontWeight: '900', fontFamily: 'mainFont' }}>$140</Text>
                            <Text style={{ color: 'grey', fontSize: 13, textAlign: 'center', fontFamily: 'mainFont' }}>Per Month</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>All Features</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>Vat Features</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>Mailing Scanning & Security
                                    Calls Free
                                </Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>Ultra HD Quality</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>Unlimited Users</Text>
                            </View>
                            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                                <View style={{ alignSelf: 'center', margin: 8 }}>
                                    <FontAwesomeIcon color='#233CBF' size={20} icon={faCircleCheck} />
                                </View>
                                <Text style={{ color: 'black', fontSize: 12, textAlign: 'center', fontFamily: 'mainFont' }}>150 Audio & Video Calls Free
                                    Calls Free
                                </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '50%', padding: 12, borderRadius: 6, alignSelf: 'center', margin: 20 }} >
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Select Plan</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default Subscription;