import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View, Image, TextInput, ScrollView, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faSquareXmark, faQuestion, faArrowLeft, faEye, faSquareCheck } from '@fortawesome/free-solid-svg-icons';

const Appliedleave = ({ navigation }) => {
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
                    <View style={{ flexDirection: 'row', marginTop: 55, width: '100%', marginBottom: 40 }}>
                        <TouchableOpacity style={{ paddingLeft: 20, width: '10%' }} onPress={() => navigation.navigate("DrawernavigationH")}>
                            <FontAwesomeIcon style={{ width: '15%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                        </TouchableOpacity>
                        <View style={{ width: '85%' }}>
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
                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '40%', padding: 12, borderRadius: 6, marginRight: 10 }} onPress={handleButtonClick}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Approve</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '40%', padding: 11, borderRadius: 6, marginRight: 10, borderWidth: 1, borderColor: "#ff6a71" }}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: '#ff6a71', textAlign: 'center' }} onPress={handlerejectbutton}>Reject</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={handlerejectreasonbutton}>
                        <Text style={{ width: "100%", flex: 1, textAlign: 'right', padding: 10, fontFamily: 'mainFont' }}>Reason for rejection..?</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: '#233CBF', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5 }}>
                        <FontAwesomeIcon size={20} color='white' icon={faSquareCheck} />
                        <Text style={{ padding: 10, fontFamily: 'mainFont', fontSize: 17, width: '100%', textAlign: 'center', color: 'white' }}>Approved</Text>
                    </View>
                </View>
            </Modal>
            <Modal animationType="slide" transparent={true} visible={Reject} onRequestClose={() => setreject(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: '#ff6a71', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5 }}>
                        <FontAwesomeIcon size={20} color='white' icon={faSquareXmark} />
                        <Text style={{ padding: 10, fontFamily: 'mainFont', fontSize: 17, width: '100%', textAlign: 'center', color: 'white' }}>Rejected</Text>
                    </View>
                </View>
            </Modal>
            <Modal animationType="slide" transparent={true} visible={Rejectreason} onRequestClose={() => setrejectreason(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: '#233CBF', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5, width: '70%' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <FontAwesomeIcon size={20} color='white' icon={faQuestion} />
                            <Text style={{ padding: 0, fontFamily: 'mainFont', fontSize: 20, width: '100%', textAlign: 'center', color: 'white' }}>Reason for rejection</Text>
                        </View>
                        <Text style={{ padding: 10, fontSize: 12, width: '100%', textAlign: 'center', color: 'white' }}>I regret to inform you that I cannot approve your leave of absence at this time.</Text>
                    </View>

                </View>
            </Modal>
        </>
    )
}

export default Appliedleave;