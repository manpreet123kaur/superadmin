import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, StyleSheet, Switch, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar, faCircle, faSquareCheck, faSquareXmark, faChevronRight, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list'

const Employeesprofile = ({ navigation }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleButtonClick = () => {
        setIsModalVisible(!isModalVisible);
        setTimeout(() => {
            setIsModalVisible(false);
        }, 1000);
    };

    const [isModalVisibletwo, setIsModalVisibletwo] = useState(false);
    const handleButtonClicktwo = () => {
        setIsModalVisibletwo(!isModalVisibletwo);
        setTimeout(() => {
            setIsModalVisibletwo(false);
        }, 1000);
    };

    const [trash, settrash] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

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
    return (
        <>
            <ScrollView style={{ backgroundColor: '#ccd6ff', paddingBottom: 40 }}>
                <View style={{ paddingLeft: 20, backgroundColor: '#233CBF', paddingTop: 40 }}>
                    <TouchableOpacity onPress={() => navigation.navigate("DrawernavigationH")}>
                        <FontAwesomeIcon style={{ width: '100%' }} color='white' size={22} icon={faArrowLeftLong} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', backgroundColor: '#233CBF', paddingBottom: 40 }}>
                    <View style={{ paddingTop: 20, alignSelf: 'center', paddingBottom: 30 }}>
                        <View style={{ width: 110, height: 110, padding: 5 }}>
                            <Image style={{ width: '100%', height: '100%', borderRadius: 100 }} source={require("../pages/assests/images/kaviya.png")} />
                        </View>
                        <Text style={{ color: 'white', fontFamily: 'mainFont', textAlign: 'center' }}>Jessica Jones</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', alignSelf: 'center', width: "90%", marginTop: -40, borderRadius: 15, marginBottom: 40 }}>
                    <View style={{ padding: 10, marginTop: 10, width: '100%' }}>
                        <View style={{ width: '98%', flexDirection: 'row', alignItems: 'center', marginLeft: 20 }}>
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

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginLeft: 20 }}>
                            <TouchableOpacity style={{ width: '30%', marginRight: 15 }} >
                                <TouchableOpacity style={{ width: '100%', backgroundColor: '#878bff', padding: 10, borderRadius: 5 }} onPress={handleButtonClick} >
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 11, width: '100%', textAlign: 'center', color: 'white' }}>Activate</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '30%' }}>
                                <TouchableOpacity style={{ width: '100%', backgroundColor: 'red', padding: 10, borderRadius: 5 }} onPress={handleButtonClicktwo}>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 11, width: '100%', textAlign: 'center', color: 'white' }}>Deactivate</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Modal */}
                <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: '#878bff', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5 }}>
                            <FontAwesomeIcon size={20} color='white' icon={faSquareCheck} />
                            <Text style={{ padding: 10, fontFamily: 'mainFont', fontSize: 17, width: '100%', textAlign: 'center', color: 'white' }}>Activated</Text>
                        </View>
                    </View>
                </Modal>
                <Modal animationType="slide" transparent={true} visible={isModalVisibletwo} onRequestClose={() => setIsModalVisibletwo(false)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5 }}>
                            <FontAwesomeIcon size={20} color='white' icon={faSquareXmark} />
                            <Text style={{ padding: 10, fontFamily: 'mainFont', fontSize: 17, width: '100%', textAlign: 'center', color: 'white' }}>Deactivated</Text>
                        </View>
                    </View>
                </Modal>
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

export default Employeesprofile;