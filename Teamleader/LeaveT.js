import React, { useState, useEffect } from 'react';;
import { Button, View, Text, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faSquareCheck, faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";

const LeaveT = ({ navigation }) => {
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
        }, 1000);
    };

    const [Reject, setreject] = useState(false);
    const handlerejectbutton = () => {
        setreject(!Reject);
        setTimeout(() => {
            setreject(false);
        }, 1000);
    };

    const [Rejectreason, setrejectreason] = useState(false);
    const handlerejectreasonbutton = () => {
        setrejectreason(!Rejectreason);
        setTimeout(() => {
            setrejectreason(false);
        }, 2000);
    };
    return (
        <>
            <ScrollView>
                <View style={{ width: '100%', paddingBottom: 20, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', marginTop: 35, width: '90%', marginBottom: 40, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ width: '5%' }} onPress={() => navigation.navigate("DrawernavigationT")}>
                            <FontAwesomeIcon style={{ width: '15%' }} color='#233CBF' size={22} icon={faAngleLeft} />
                        </TouchableOpacity>
                        <View style={{ width: '90%' }}>
                            <Text style={{ color: "#233CBF", textAlign: 'center', fontSize: 22, fontFamily: 'mainFont' }}>Applied Leave</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 12, textAlign: 'center' }}>You have been requested to review the following:</Text>
                        </View>
                    </View>

                    <View style={{ padding: 8, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 10 }}>Name</Text>
                        <TextInput style={{ padding: 8, backgroundColor: 'white', borderBottomWidth: 2, borderColor: "grey", borderRadius: 12 }} placeholder='Manisha sehgal' />
                    </View>

                    <View style={{ padding: 8, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 10 }}>Phone no.</Text>
                        <TextInput style={{ padding: 8, backgroundColor: 'white', borderBottomWidth: 2, borderColor: "grey", borderRadius: 12 }} placeholder='9867986754' />
                    </View>

                    <View style={{ padding: 8, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 10 }}>Department</Text>
                        <TextInput style={{ padding: 8, backgroundColor: 'white', borderBottomWidth: 2, borderColor: "grey", borderRadius: 12 }} placeholder='Digital Marketing' />
                    </View>

                    <View style={{ padding: 8, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 10 }}>Type of Leave</Text>
                        <TextInput style={{ padding: 8, backgroundColor: 'white', borderBottomWidth: 2, borderColor: "grey", borderRadius: 12 }} placeholder='Marrige Leave' />
                    </View>

                    <View style={{ padding: 10, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 10 }}>Leave *</Text>
                        <Text>from :                                       To :</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TextInput style={{ padding: 8, backgroundColor: 'white', borderBottomWidth: 2, borderColor: "grey", borderRadius: 12, width: '50%', margin: 4 }} placeholder='10/2/22' />
                            <TextInput style={{ padding: 8, backgroundColor: 'white', borderBottomWidth: 2, borderColor: "grey", borderRadius: 12, width: '50%', margin: 4 }} placeholder='12/2/22' />
                        </View>
                    </View>
                    <View style={{ padding: 8, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', padding: 10 }}>Total number of leave day</Text>
                        <TextInput style={{ padding: 8, backgroundColor: 'white', borderBottomWidth: 2, borderColor: "grey", borderRadius: 12 }} placeholder='3' />
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', alignItems: 'flex-end', justifyContent: "center", paddingTop: 40 }}>
                        <TouchableOpacity style={{ backgroundColor: "green", width: '40%', padding: 12, borderRadius: 6, marginRight: 10 }} onPress={handleButtonClick}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Approve</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '40%', padding: 11, borderRadius: 6, marginRight: 10, borderWidth: 1, borderColor: "red" }}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'red', textAlign: 'center' }} onPress={handlerejectbutton}>Reject</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
            <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'green', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5 }}>
                        <FontAwesomeIcon size={20} color='white' icon={faSquareCheck} />
                        <Text style={{ padding: 10, fontFamily: 'mainFont', fontSize: 17, width: '100%', textAlign: 'center', color: 'white' }}>Approved</Text>
                    </View>
                </View>
            </Modal>
            <Modal animationType="slide" transparent={true} visible={Reject} onRequestClose={() => setreject(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5 }}>
                        <FontAwesomeIcon size={20} color='white' icon={faSquareXmark} />
                        <Text style={{ padding: 10, fontFamily: 'mainFont', fontSize: 17, width: '100%', textAlign: 'center', color: 'white' }}>Rejected</Text>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default LeaveT;