import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, StyleSheet, Switch, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faCircle, faTrashCan, faCircleCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list'
import * as ImagePicker from "expo-image-picker";

const Editprofile = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [selected, setSelected] = useState("");

    const data = [
        { value: 'Admin' },
        { value: 'user' },
        { value: 'Employee' },
        { value: 'TL' },
    ];

    const [Team, seteam] = useState("");

    const team = [
        { value: 'HR' },
        { value: 'Manager' },
        { value: 'Lead' },
    ];

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
            <ScrollView>
                <View style={{ backgroundColor: '#fdfeff' }}>

                    <View style={{ backgroundColor: '#233CBF' }}>
                        <View style={{ backgroundColor: 'white' }}>
                            <View style={{ width: "100%", backgroundColor: '#233CBF', paddingTop: 35, borderBottomRightRadius: 0, marginTop: 0, alignSelf: 'center', position: 'fixed', height: 90 }}>
                                <Text style={{ fontFamily: 'mainFont', color: 'white', textAlign: 'center', fontSize: 18, padding: 10 }}>EDIT YOUR PROFILE</Text>
                            </View>

                        </View>
                        <View style={{ padding: 10, marginTop: 0, width: '100%', borderTopRightRadius: 50, backgroundColor: 'white' }}>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                                <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                                <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>PROFILE IMAGE</Text>

                            </View>
                            <View style={{ marginLeft: 20, padding: 10 }}>
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
                        </View>
                    </View>

                    <View style={{ padding: 10, marginTop: 0, width: '100%' }}>
                        <View style={{ width: '95%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>TEAM MEMBER DETAILS</Text>
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: 'lightgrey' }}>
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>Username</Text>
                            <TextInput placeholderTextColor={"black"} style={{ fontSize: 13, fontFamily: 'mainFont', marginLeft: 10 }} placeholder="name..." />
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: 'lightgrey' }}>
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>Email Address</Text>
                            <TextInput placeholderTextColor={"black"} style={{ fontSize: 13, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }} placeholder="....@gmail.com" />
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: 'lightgrey' }}>
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>position</Text>
                            <TextInput placeholderTextColor={"black"} style={{ fontSize: 13, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }} placeholder="SCO..." />
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: 'lightgrey' }}>
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>Phone number</Text>
                            <TextInput placeholderTextColor={"black"} style={{ fontSize: 13, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }} placeholder="4569....." />
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: 'lightgrey' }}>
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>Location</Text>
                            <TextInput placeholderTextColor={"black"} style={{ fontSize: 13, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }} placeholder="Mohali, sector 74 8b, F-250" />
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: 'lightgrey' }}>
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>Bio</Text>
                            <TextInput placeholderTextColor={"black"} style={{ fontSize: 13, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }} placeholder="Introduce yourself" />
                        </View>
                    </View>

                    <View style={{ padding: 10, marginTop: 10, width: '100%' }}>
                        <View style={{ width: '98%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>ROLE</Text>
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: 'lightgrey' }}>
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>Role</Text>
                            <SelectList setSelected={setSelected} fontFamily='mainFont' data={data} icon={<FontAwesomeIcon size={12} color='black' icon={faChevronRight} />} search={false} boxStyles={{ borderRadius: 0, borderWidth: 0, borderColor: 'transparent', paddingBottom: 0 }} />
                        </View>
                    </View>

                    <View style={{ padding: 10, marginTop: 10, width: '100%' }}>
                        <View style={{ width: '98%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>TEAM</Text>
                        </View>
                        <View style={{ width: '95%', padding: 6, borderBottomWidth: 1, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, alignSelf: 'center', marginTop: 10, borderColor: 'lightgrey' }}>
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>Team</Text>
                            <SelectList setSelected={seteam} fontFamily='mainFont' data={team} icon={<FontAwesomeIcon size={12} color='black' icon={faChevronRight} />} search={false} boxStyles={{ borderRadius: 0, borderWidth: 0, borderColor: 'transparent', paddingBottom: 0 }} />
                        </View>
                    </View>

                    <View style={{ padding: 10, marginTop: 10, width: '100%' }}>
                        <View style={{ width: '98%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
                            <FontAwesomeIcon size={8} color='#233CBF' icon={faCircle} />
                            <Text style={{ fontSize: 16, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>ONBOARDING</Text>
                        </View>
                        <View style={{ width: '95%', padding: 6, alignSelf: 'center', marginTop: 10, }}>
                            <Text style={{ fontSize: 14, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>Starts On</Text>
                            <Text style={{ fontSize: 14, color: 'grey', fontFamily: 'mainFont', marginLeft: 10 }}>22.05.2023</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.container}>
                                <Switch trackColor={{ false: 'grey', true: '#233CBF' }} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} ios_backgroundColor="pink" onValueChange={toggleSwitch} value={isEnabled} />
                            </View>
                            <Text style={{ fontSize: 13, color: 'grey', fontFamily: 'mainFont' }}>Onboarding required</Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 40, marginRight: 15, marginBottom: 15 }}>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '40%', padding: 11, borderRadius: 6, marginRight: 10, borderWidth: 1, borderColor: "#233CBF", flexDirection: 'row', alignItems: 'center' }} >
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: '#233CBF', textAlign: 'center', width: "100%" }}>Discard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '40%', padding: 12, borderRadius: 6, marginRight: 10 }} onPress={() => navigation.navigate("DrawernavigationU")}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Save Changes</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Editprofile;