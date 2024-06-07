import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, faChevronRight, faMagnifyingGlass, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faUserGear, faBookmark, faEllipsis, faEarthAmericas, faMobileScreenButton, faBell, faLocationCrosshairs, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list'

const Recentvacany = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <ScrollView>
                <View style={{ width: '100%', paddingBottom: 60, backgroundColor: "white" }}>
                    <View style={{ width: '95%', alignSelf: 'center' }}>
                        <TouchableOpacity style={{ paddingLeft: 20, marginTop: 45 }} onPress={() => navigation.navigate("DrawernavigationH")}>
                            <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                        </TouchableOpacity>
                        <View style={{ width: '100%' }}>
                            <Text style={{ color: "#233CBF", textAlign: 'center', fontSize: 20, fontFamily: 'mainFont' }}>Recent Vacancies</Text>
                            <Text style={{ textAlign: 'center', fontSize: 14, fontFamily: 'mainFont', lineHeight: 19, padding: 6 }}>Subscribe to my newsletter for a monthly round-up of new blog posts and projects I’m working on!</Text>
                        </View>
                    </View>

                    <View style={{ width: '98%', padding: 10, marginTop: 40 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '97%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, padding: 6, margin: 5 }} onPress={() => navigation.navigate("Frontendvacanies")}>
                            <View style={{ backgroundColor: '#233CBF', padding: 6, width: 50, borderRadius: 10, margin: 5 }}>
                                <FontAwesomeIcon color="white" style={{ backgroundColor: '#233CBF', padding: 20 }} size={25} icon={faUserGear} />
                            </View>
                            <View style={{ margin: 10, width: "65%" }}>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Frontend Developer</Text>
                                <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Briosoft solution</Text>
                            </View>
                            <View >
                                <FontAwesomeIcon color="#233CBF" size={20} icon={faBookmark} />
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '97%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, padding: 6, margin: 5 }} onPress={() => navigation.navigate("SCOvacancy")}>
                            <View style={{ backgroundColor: '#ee9800', padding: 6, width: 50, borderRadius: 10, margin: 5 }}>
                                <FontAwesomeIcon color="white" style={{ backgroundColor: '#ee9800', padding: 20 }} size={25} icon={faUserGear} />
                            </View>
                            <View style={{ margin: 10, width: "65%" }}>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>SEO</Text>
                                <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Briosoft solution</Text>
                            </View>
                            <View >
                                <FontAwesomeIcon color="#ee9800" size={20} icon={faBookmark} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '97%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, padding: 6, margin: 5 }} onPress={() => navigation.navigate("Digitalmarket")}>
                            <View style={{ backgroundColor: '#ffc2e0', padding: 6, width: 50, borderRadius: 10, margin: 5 }}>
                                <FontAwesomeIcon color="white" style={{ backgroundColor: '#ffc2e0', padding: 20 }} size={25} icon={faUserGear} />
                            </View>
                            <View style={{ margin: 10, width: "65%" }}>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Digital Marketer</Text>
                                <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Briosoft solution</Text>
                            </View>
                            <View >
                                <FontAwesomeIcon color="#ffc2e0" size={20} icon={faBookmark} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '97%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, padding: 6, margin: 5 }} onPress={() => navigation.navigate("Graphicdsign")}>
                            <View style={{ backgroundColor: '#23d100', padding: 6, width: 50, borderRadius: 10, margin: 5 }}>
                                <FontAwesomeIcon color="white" style={{ backgroundColor: '#23d100', padding: 20 }} size={25} icon={faUserGear} />
                            </View>
                            <View style={{ margin: 10, width: "65%" }}>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Graphic Designer</Text>
                                <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Briosoft solution</Text>
                            </View>
                            <View >
                                <FontAwesomeIcon color="#23d100" size={20} icon={faBookmark} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '97%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, padding: 6, margin: 5 }} onPress={() => navigation.navigate("Backend")}>
                            <View style={{ backgroundColor: '#ff6271', padding: 6, width: 50, borderRadius: 10, margin: 5 }}>
                                <FontAwesomeIcon color="white" style={{ backgroundColor: '#ff6271', padding: 20 }} size={25} icon={faUserGear} />
                            </View>
                            <View style={{ margin: 10, width: "65%" }}>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Backend Developer</Text>
                                <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Briosoft solution</Text>
                            </View>
                            <View >
                                <FontAwesomeIcon color="#ff6271" size={20} icon={faBookmark} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '97%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, padding: 6, margin: 5 }} onPress={() => navigation.navigate("Software")}>
                            <View style={{ backgroundColor: '#ffcaba', padding: 6, width: 50, borderRadius: 10, margin: 5 }}>
                                <FontAwesomeIcon color="white" style={{ backgroundColor: '#ffcaba', padding: 20 }} size={25} icon={faUserGear} />
                            </View>
                            <View style={{ margin: 10, width: "65%" }}>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Software Engineer</Text>
                                <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Briosoft solution</Text>
                            </View>
                            <View >
                                <FontAwesomeIcon color="#ffcaba" size={20} icon={faBookmark} />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', width: '97%', alignSelf: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, padding: 6, margin: 5 }} onPress={() => navigation.navigate("Videoediting")}>
                            <View style={{ backgroundColor: '#9ff9ff', padding: 6, width: 50, borderRadius: 10, margin: 5 }}>
                                <FontAwesomeIcon color="white" style={{ backgroundColor: '#9ff9ff', padding: 20 }} size={25} icon={faUserGear} />
                            </View>
                            <View style={{ margin: 10, width: "65%" }}>
                                <Text style={{ color: 'black', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Video Editing</Text>
                                <Text style={{ color: 'grey', fontWeight: '500', fontSize: 15, fontFamily: 'mainFont' }}>Briosoft solution</Text>
                            </View>
                            <View >
                                <FontAwesomeIcon color="#9ff9ff" size={20} icon={faBookmark} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 40 }}>

                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '30%', padding: 12, borderRadius: 6, marginRight: 10 }} >
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Add more</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

export default Recentvacany;