import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPowerOff, faAngleLeft, faPenToSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from "expo-image-picker";

const Profiledit = ({ navigation }) => {
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

    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <TouchableOpacity style={{ width: '90%', alignSelf: 'center', marginTop: 30 }} onPress={() => navigation.navigate("DrawernavigationS")}>
                    <FontAwesomeIcon color='#233CBF' size={20} icon={faAngleLeft} />
                </TouchableOpacity>
                <View style={{ alignSelf: 'center', marginTop: 10, backgroundColor: 'white', padding: 30 }}>
                    <>
                        <View style={{ justifyContent: 'center' }}>
                            <View style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }}>
                                {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%", borderRadius: 10 }} />}
                            </View>
                            <Text onPress={handleButtonClick} style={{textAlign:'center'}}>Change Profile</Text>
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
                <View style={{ borderTopWidth: 1, borderColor: 'lightgrey', width: '90%', alignSelf: 'center', padding: 10 }}>
                    <View style={{ borderBottomWidth: 2, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 10 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Full name</Text>
                        <TextInput style={{ fontSize: 13, fontFamily: 'mainFont' }} placeholder='jasmeet Kaur' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderBottomWidth: 2, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 10, width: '45%' }}>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Gender</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>Male</Text>
                        </View>
                        <View style={{ borderBottomWidth: 2, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 10, width: '43%' }}>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Birthday</Text>
                            <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>02-01-2000</Text>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 10 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Phone number</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>+91 6786789689</Text>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 10 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Email</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>abcdefgh@gmai.com</Text>
                    </View>
                    <View style={{ borderBottomWidth: 2, borderColor: 'lightgrey', borderRadius: 6, margin: 10, padding: 10 }}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>User name</Text>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont' }}>@jasmeetk</Text>
                    </View>
                    <TouchableOpacity style={{ backgroundColor: '#233CBF', padding: 10, width: "40%", alignSelf: 'center', borderRadius: 6, marginTop: 20 }} onPress={() => navigation.navigate("DrawernavigationS")}>
                        <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'mainFont' }}>Update</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default Profiledit;