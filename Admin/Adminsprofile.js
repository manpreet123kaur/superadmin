import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Modal } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle, faBriefcase, faFileLines, faBrain, faArrowLeftLong, faStar } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-paper';
import * as ImagePicker from "expo-image-picker";

const Adminsprofile = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleButtonClick = () => {
        setIsModalVisible(!isModalVisible);
        setTimeout(() => {
            setIsModalVisible(false);
        }, 2000);
    };
    const [image, setImage] = useState(null);
    const pickImageLibrary = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const pickImageCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const [isModalVisibletwo, setIsModalVisibletwo] = useState(false);
    const handleButtonClicktwo = () => {
        setIsModalVisibletwo(!isModalVisibletwo);
    };

    const [changepassword, setchangepassword] = useState(false);
    const handlechanepassword = () => {
        setchangepassword(!changepassword);
    };
    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ width: '80%', alignSelf: 'center', padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesomeIcon color='#233cbf' size={10} icon={faCircle} />
                        <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'mainFont', padding: 10 }}>Profile</Text>
                    </View>
                    <>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }}>
                                {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%", borderRadius: 10 }} />}
                            </View>
                            <Text onPress={handleButtonClick}>Change Profile</Text>
                            <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{ backgroundColor: 'pink', padding: 5, borderRadius: 10 }}>
                                        <TouchableOpacity onPress={pickImageLibrary} style={{ padding: 8, borderBottomWidth: 2 }}>
                                            <Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>Select from gallery</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={pickImageCamera} style={{ padding: 8 }}>
                                            <Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>Select from Camera</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </>
                </View>

                <View style={{ width: '80%', alignSelf: 'center', padding: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesomeIcon color='#233cbf' size={10} icon={faCircle} />
                        <Text style={{ fontSize: 16, fontWeight: 700, fontFamily: 'mainFont', padding: 10 }}>Personal Detail</Text>
                    </View>
                    <View style={{ padding: 10 }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'mainFont' }}>First Name</Text>
                            <TextInput style={{ backgroundColor: 'white' }} placeholder='name....' />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'mainFont' }}>Last Name</Text>
                            <TextInput style={{ backgroundColor: 'white' }} placeholder='lastname....' />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'mainFont' }}>E - Mail</Text>
                            <TextInput style={{ backgroundColor: 'white' }} placeholder='abc@gmail.com' />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'mainFont' }}>Phone No.</Text>
                            <TextInput style={{ backgroundColor: 'white' }} placeholder='0987654321' />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#233cbf', borderRadius: 8, margin: 5 }} onPress={handleButtonClicktwo}>
                        <Text style={{ fontFamily: 'mainFont', textAlign: 'center', color: 'white', padding: 10 }}>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#233cbf', borderRadius: 8, margin: 5 }} onPress={handlechanepassword}>
                        <Text style={{ fontFamily: 'mainFont', textAlign: 'center', color: 'white', padding: 10 }}>Change Password</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            <Modal animationType="slide" transparent={true} visible={isModalVisibletwo} onRequestClose={() => setIsModalVisibletwo(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', width: '80%', alignSelf: 'center', borderRadius: 10, padding: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#233CBF', borderTopRightRadius: 10, padding: 15, borderTopLeftRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 16, width: '93%', fontFamily: 'mainFont' }}>Edit Your Details</Text>
                            {/* <FontAwesomeIcon color='white' icon={faXmark} /> */}
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>First Name:   </Text>
                            <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4, backgroundColor: 'white' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Last Name :   </Text>
                            <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4, backgroundColor: 'white' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>E -Mail :   </Text>
                            <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4, backgroundColor: 'white' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Phone no :   </Text>
                            <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4, backgroundColor: 'white' }} />
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "flex-end", marginBottom: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: "green", width: '30%', padding: 8, borderRadius: 6, marginRight: 10 }} onPress={() => { handleButtonClicktwo(false) }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'grey', width: '30%', padding: 8, borderRadius: 6, marginRight: 10 }} onPress={() => { handleButtonClicktwo(false) }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal animationType="slide" transparent={true} visible={changepassword} onRequestClose={() => setchangepassword(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', width: '80%', alignSelf: 'center', borderRadius: 10, padding: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#233CBF', borderTopRightRadius: 10, padding: 15, borderTopLeftRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 16, width: '93%', fontFamily: 'mainFont' }}>Change Password</Text>
                            {/* <FontAwesomeIcon color='white' icon={faXmark} /> */}
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '35%', fontSize: 13 }}>Old Password :</Text>
                            <TextInput style={{ borderWidth: 1, width: '65%', borderColor: 'darkgrey', borderRadius: 4, backgroundColor: 'white' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '35%', fontSize: 13 }}>New Password :</Text>
                            <TextInput style={{ borderWidth: 1, width: '65%', borderColor: 'darkgrey', borderRadius: 4, backgroundColor: 'white' }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '35%', fontSize: 13 }}>Confirm Password :</Text>
                            <TextInput style={{ borderWidth: 1, width: '65%', borderColor: 'darkgrey', borderRadius: 4, backgroundColor: 'white' }} />
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "flex-end", marginBottom: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: "green", width: '30%', padding: 8, borderRadius: 6, marginRight: 10 }} onPress={() => { handlechanepassword(false) }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'grey', width: '30%', padding: 8, borderRadius: 6, marginRight: 10 }} onPress={() => { handlechanepassword(false) }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Adminsprofile;