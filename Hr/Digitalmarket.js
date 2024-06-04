import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, faChevronRight, faMagnifyingGlass, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faBookmark, faShareNodes, faUserGear, faLocationDot, faMobileRetro, faMoneyBill1Wave, faAddressCard, faSignal, faCircle } from '@fortawesome/free-solid-svg-icons';

const Digitalmarket = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ width: '98%', alignSelf: 'center', height: '100%', backgroundColor: "white" }}>

                <View style={{ width: '98%', alignSelf: 'center', flexDirection: 'row', marginTop: 35, alignItems: 'center' }}>
                    <TouchableOpacity style={{ paddingLeft: 20, width: "70%" }} onPress={() => navigation.navigate("Recentvacany")}>
                        <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <FontAwesomeIcon size={20} color='#233CBF' style={{ margin: 10 }} icon={faBookmark} />
                        <FontAwesomeIcon size={20} color='#233CBF' style={{ margin: 10 }} icon={faShareNodes} />
                    </View>
                </View>

                <View style={{ alignSelf: 'center', paddingTop: 20 }}>
                    <View style={{ backgroundColor: '#233CBF', padding: 6, width: 50, borderRadius: 10, margin: 5 }}>
                        <FontAwesomeIcon color="white" style={{ backgroundColor: '#233CBF', padding: 20 }} size={25} icon={faUserGear} />
                    </View>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont', textAlign: 'center' }}>Digital Markketing</Text>
                    <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont', textAlign: 'center' }}>Briosoft solution</Text>
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row', padding: 8 }}>
                    <FontAwesomeIcon size={18} color='#233CBF' icon={faLocationDot} />
                    <Text style={{ color: 'grey', fontSize: 15, fontFamily: 'mainFont', textAlign: 'center', marginLeft: 6, marginRight: 6 }}>Mohali</Text>
                    <Text style={{ color: 'grey', fontSize: 15, fontFamily: 'mainFont', textAlign: 'center' }}>India</Text>
                </View>

                <View style={{ flexDirection: 'row', width: "98%", paddingTop: 40 }}>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', padding: 8, width: "48%", borderWidth: 1, borderColor: "lightgrey", borderRadius: 10, padding: 10, alignItems: 'center', marginLeft: 6, marginRight: 6, borderBottomWidth: 3 }}>
                        <View>
                            <FontAwesomeIcon size={25} color='#233CBF' icon={faMoneyBill1Wave} />
                        </View>
                        <View style={{ margin: 5 }}>
                            <View>
                                <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', marginLeft: 6, marginRight: 6 }}>Salary (Monthly)</Text>
                                <Text style={{ color: '#233CBF', fontSize: 13, fontFamily: 'mainFont', marginLeft: 6, marginRight: 6 }}>15,000 - 25,000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', flexDirection: 'row', padding: 8, width: "48%", borderWidth: 1, borderColor: "lightgrey", borderRadius: 10, padding: 10, alignItems: 'center', marginLeft: 6, marginRight: 6, borderBottomWidth: 3 }}>
                        <View>
                            <FontAwesomeIcon size={25} color='#233CBF' icon={faAddressCard} />
                        </View>
                        <View style={{ margin: 5 }}>
                            <View>
                                <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', marginLeft: 6, marginRight: 6 }}>Job Type</Text>
                                <Text style={{ color: '#233CBF', fontSize: 13, fontFamily: 'mainFont', marginLeft: 6, marginRight: 6 }}>Full - Time</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: "98%", paddingTop: 10, paddingBottom: 40 }}>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', padding: 8, width: "48%", borderWidth: 1, borderColor: "lightgrey", borderRadius: 10, padding: 10, alignItems: 'center', marginLeft: 6, marginRight: 6, borderBottomWidth: 3 }}>
                        <View>
                            <FontAwesomeIcon size={25} color='#233CBF' icon={faMobileRetro} />
                        </View>
                        <View style={{ margin: 5 }}>
                            <View>
                                <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', marginLeft: 6, marginRight: 6 }}>Working Model</Text>
                                <Text style={{ color: '#233CBF', fontSize: 13, fontFamily: 'mainFont', marginLeft: 6, marginRight: 6 }}>Remote</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center', flexDirection: 'row', padding: 8, width: "48%", borderWidth: 1, borderColor: "lightgrey", borderRadius: 10, padding: 10, alignItems: 'center', marginLeft: 6, marginRight: 6, borderBottomWidth: 3 }}>
                        <View>
                            <FontAwesomeIcon size={25} color='#233CBF' icon={faSignal} />
                        </View>
                        <View style={{ margin: 5 }}>
                            <View>
                                <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', marginLeft: 6, marginRight: 6 }}>Level</Text>
                                <Text style={{ color: '#233CBF', fontSize: 13, fontFamily: 'mainFont', marginLeft: 6, marginRight: 6 }}>Internship</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <>
                    <View style={{ width: '95%', alignSelf: 'center', padding: 15, borderRadius: 12, margin: 0, paddingTop: 0 }}>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont', padding: 6 }}>Position</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <TextInput style={{ fontSize: 14, color: 'grey' }} placeholder='Digital Markketing' />
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont', padding: 6 }}>Skill</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 14, color: 'grey' }}>CSS. Skillcrush. ...</Text>
                                <Text style={{ fontSize: 14, color: 'grey' }}>JavaScript. ...</Text>
                                <Text style={{ fontSize: 14, color: 'grey' }}>jQuery. ...</Text>
                                <Text style={{ fontSize: 14, color: 'grey' }}>JavaScript Frameworks</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont', padding: 6 }}>Experience</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>6 months +</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont', padding: 6 }}>Description</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 14, color: 'grey', lineHeight: 18 }}>As a front-end developer you’re accustomed to presenting your work to the world. You have a head start in your job hunt because you know how to create excellent user experiences. This front-end developer resume example and guide offer ideas for translating that into a standout resume</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont', padding: 6 }}>Open/Closed</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <TextInput style={{ fontSize: 14, color: 'grey' }} placeholder="Open" />
                            </View>
                        </View>
                        <View style={{ width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont', padding: 6 }}>Mohali</Text>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 14, color: 'grey', lineHeight: 18 }}>Plot no - F250, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignSelf: "center", padding: 10, }}>
                        <TouchableOpacity style={{ backgroundColor: '#233CBF', width: "35%", alignSelf: 'center', marginTop: 20, borderRadius: 6, margin: 10, padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center', padding: 6 }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: '#233CBF', width: "35%", alignSelf: 'center', marginTop: 20, borderRadius: 6, margin: 10, padding: 10 }} onPress={() => navigation.navigate("Recentvacany")}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center', padding: 6 }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </>
            </View>
        </ScrollView>
    )
}

export default Digitalmarket;