import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, StyleSheet, Switch, ImageBackground } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faCircle, faTrashCan, faCircleCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list'

const Profile = ({ navigation }) => {
    const image = { uri: 'https://i.pinimg.com/564x/66/14/74/6614745c30fe90d3f6e1257614bf0678.jpg' };

    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView>
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <View style={{ padding: 10, marginTop: 0, width: '100%', borderTopLeftRadius: 50, marginTop: 20 }}>
                        <View style={{ width: '98%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>PROFILE</Text>
                        </View>
                        <View style={{ margin: 10 }}>
                            <View style={{ width: 100, height: 100, position: 'relative', marginLeft: 10, borderWidth: 1, borderColor: 'grey', padding: 5 }}>
                                <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: 10, marginTop: 10, width: '100%' }}>
                        <View style={{ width: '98%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>PERSONAL DETAILS</Text>
                        </View>
                        <View style={{ width: '95%', padding: 8, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: '#ecf3ff' }}>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Username</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', marginLeft: 10, color: 'white' }}>name..</Text>
                        </View>
                        <View style={{ width: '95%', padding: 8, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: '#ecf3ff' }}>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Email Address</Text>
                            <Text style={{ fontSize: 13, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>....@gmail.com</Text>
                        </View>
                        <View style={{ width: '95%', padding: 8, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: '#ecf3ff' }}>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>position</Text>
                            <Text style={{ fontSize: 13, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>SCO</Text>
                        </View>
                        <View style={{ width: '95%', padding: 8, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: '#ecf3ff' }}>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Phone number</Text>
                            <Text style={{ fontSize: 13, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>4569</Text>
                        </View>
                        <View style={{ width: '95%', padding: 8, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: '#ecf3ff' }}>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Location</Text>
                            <Text style={{ fontSize: 13, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Mohali, sector 74 8b, F-250</Text>
                        </View>
                        <View style={{ width: '95%', padding: 8, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: '#ecf3ff' }}>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Bio</Text>
                            <Text style={{ fontSize: 13, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Introduce yourself</Text>
                        </View>
                    </View>

                    <View style={{ padding: 10, marginTop: 10, width: '100%' }}>
                        <View style={{ width: '98%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>ROLE</Text>
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: '#ecf3ff' }}>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Role</Text>
                        </View>
                    </View>

                    <View style={{ padding: 10, marginTop: 10, width: '100%' }}>
                        <View style={{ width: '98%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>TEAM</Text>
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: '#ecf3ff' }}>
                            <Text style={{ fontSize: 13, color: 'white', fontFamily: 'mainFont', marginLeft: 10 }}>Front End</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', alignItems: 'flex-end', justifyContent: 'center', paddingTop: 40, marginRight: 15, marginBottom: 15 }}>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '30%', padding: 11, borderRadius: 6, marginRight: 10, borderWidth: 1, borderColor: "#233CBF" }} onPress={() => navigation.navigate("Editprofile")}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: '#233CBF', textAlign: 'center' }}>EDIT</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
});

export default Profile;