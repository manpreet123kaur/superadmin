import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsers, faBell, faHouseLock, faUserCheck, faUserXmark, faEye, faTrash, faTriangleExclamation, faDeaf } from '@fortawesome/free-solid-svg-icons';

const HomeAdmin = ({navigation}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleButtonClick = () => {
        setIsModalVisible(!isModalVisible);
    };

    const [isModalVisibletwo, setIsModalVisibletwo] = useState(false);
    const handleButtonClicktwo = () => {
        setIsModalVisibletwo(!isModalVisibletwo);
    };

    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <ScrollView>
            <View style={{ justifyContent: 'center', padding: 15, backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: '700', fontFamily: 'mainFont', width: '90%' }}>Hello, Adminame</Text>
                    <TouchableOpacity style={{ padding: 5, alignSelf: 'flex-end' }}>
                        <FontAwesomeIcon size={20} color='#233CBF' icon={faBell} />
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 20, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#e1e6f7', padding: 15, borderRadius: 10, elevation: 10, shadowColor: 'black', margin: 10, width: '45%' }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>Subscription Valid</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', fontWeight: 700 }}>$14</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', width: '85%' }}>30-05-2024 Valid</Text>
                            <FontAwesomeIcon size={20} color='#233CBF' icon={faHouseLock} />
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#e1e6f7', padding: 15, borderRadius: 10, elevation: 10, shadowColor: 'black', margin: 10, width: '45%' }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>All User</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', fontWeight: 700 }}>11</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', width: '85%' }}>Total Users</Text>
                            <FontAwesomeIcon size={20} color='#233CBF' icon={faUsers} />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 0, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#e1e6f7', padding: 15, borderRadius: 10, elevation: 10, shadowColor: 'black', margin: 10, width: '45%' }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>Active User</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', fontWeight: 700 }}>8</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', width: '85%' }}>Active User</Text>
                            <FontAwesomeIcon size={20} color='#233CBF' icon={faUserCheck} />
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#e1e6f7', padding: 15, borderRadius: 10, elevation: 10, shadowColor: 'black', margin: 10, width: '45%' }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>Inactive User</Text>
                        <Text style={{ fontSize: 15, fontFamily: 'mainFont', fontWeight: 700 }}>3</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', width: '85%' }}>Inactive User</Text>
                            <FontAwesomeIcon size={20} color='#233CBF' icon={faUserXmark} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ width: '98%', alignSelf: 'center', padding: 10, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 20, fontWeight: '700', fontFamily: 'mainFont', width: '90%' }}>Employee Detail</Text>
                <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#e1e6f7', alignSelf: 'center', padding: 10, borderTopWidth: 1 }}>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: 700 }}>Username</Text>
                    </View>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: 700, textAlign: 'center' }}>Department</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'right', fontWeight: 700 }}>Status</Text>
                    </View>
                </View>
                <ScrollView style={{ borderWidth: 1, width: "98%", alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: "white", padding: 4, alignItems: 'center' }} >
                        <View style={{ width: '25%', }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, fontWeight: '700' }}>Jenis</Text>
                        </View>
                        <View style={{ width: '56%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, width: '100%', textAlign: 'center', fontWeight: "700" }}>SEO</Text>
                        </View>
                        <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Userprofile")}>
                                <FontAwesomeIcon style={{ margin: 15 }} icon={faEye} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleButtonClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: "#e1e6f7", padding: 4, alignItems: 'center' }} >
                        <View style={{ width: '25%', }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, fontWeight: '700' }}>Jenis</Text>
                        </View>
                        <View style={{ width: '56%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, width: '100%', textAlign: 'center', fontWeight: "700" }}>SEO</Text>
                        </View>
                        <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Userprofile")}>
                                <FontAwesomeIcon style={{ margin: 15 }} icon={faEye} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleButtonClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: "white", padding: 4, alignItems: 'center' }} >
                        <View style={{ width: '25%', }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, fontWeight: '700' }}>Jenis</Text>
                        </View>
                        <View style={{ width: '56%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, width: '100%', textAlign: 'center', fontWeight: "700" }}>SEO</Text>
                        </View>
                        <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Userprofile")}>
                                <FontAwesomeIcon style={{ margin: 15 }} icon={faEye} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleButtonClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: "#e1e6f7", padding: 4, alignItems: 'center' }} >
                        <View style={{ width: '25%', }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, fontWeight: '700' }}>Jenis</Text>
                        </View>
                        <View style={{ width: '56%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, width: '100%', textAlign: 'center', fontWeight: "700" }}>SEO</Text>
                        </View>
                        <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Userprofile")}>
                                <FontAwesomeIcon style={{ margin: 15 }} icon={faEye} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleButtonClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: "white", padding: 4, alignItems: 'center' }} >
                        <View style={{ width: '25%', }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, fontWeight: '700' }}>Jenis</Text>
                        </View>
                        <View style={{ width: '56%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, width: '100%', textAlign: 'center', fontWeight: "700" }}>SEO</Text>
                        </View>
                        <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Userprofile")}>
                                <FontAwesomeIcon style={{ margin: 15 }} icon={faEye} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleButtonClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
                <TouchableOpacity style={{ alignSelf: 'flex-end', backgroundColor: '#233CBF', padding: 10, borderRadius: 8, margin: 10 }} onPress={() => navigation.navigate("Users")}>
                    <Text style={{ color: 'white', fontFamily: 'mainFont' }}>See more</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default HomeAdmin;