import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash, faEye, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Admindetail = ({ navigation }) => {

    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const getAPIData = async () => {
        const url = "https://trackingtime-c5jw.onrender.com/api/users/getAll";
        let result = await fetch(url);
        result = await result.json()
        setdata(result)
    }
    useEffect(() => {
        getAPIData();
    }, [])

    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleButtonClick = () => {
        setIsModalVisible(!isModalVisible);
    };

    const [isModalVisibletwo, setIsModalVisibletwo] = useState(false);
    const handleButtonClicktwo = () => {
        setIsModalVisibletwo(!isModalVisibletwo);
    };

    return (
        <>

            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <View style={{ width: '40%', alignSelf: "flex-end" }}>
                    <TouchableOpacity style={{ marginRight: 15, marginBottom: 15 }} onPress={handleButtonClicktwo}>
                        <Text style={{ fontFamily: 'mainFont', color: 'white', backgroundColor: '#233CBF', padding: 6, borderRadius: 6, textAlign: 'center', fontSize: 12 }}>Add New Users</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#e1e6f7', alignSelf: 'center', padding: 10, borderTopWidth: 1 }}>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: 700 }}>Username</Text>
                    </View>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: 700, textAlign: 'center' }}>E-mail</Text>
                    </View>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'right', fontWeight: 700 }}>Action</Text>
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
                            <TouchableOpacity onPress={() => navigation.navigate("Adminprofile")}>
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
                            <TouchableOpacity onPress={() => navigation.navigate("Adminprofile")}>
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
                            <TouchableOpacity onPress={() => navigation.navigate("Adminprofile")}>
                                <FontAwesomeIcon style={{ margin: 15 }} icon={faEye} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleButtonClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: "#e1e6f7", padding: 4, alignItems: 'center' }}>
                        <View style={{ width: '25%', }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, fontWeight: '700' }}>Jenis</Text>
                        </View>
                        <View style={{ width: '56%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 13, width: '100%', textAlign: 'center', fontWeight: "700" }}>SEO</Text>
                        </View>
                        <View style={{ width: '20%', flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Adminprofile")}>
                                <FontAwesomeIcon style={{ margin: 15 }} icon={faEye} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleButtonClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

                {/* Modal */}
                <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5, width: '60%' }}>
                            <FontAwesomeIcon color='red' size={30} icon={faTriangleExclamation} />
                            <Text style={{ color: 'grey', fontWeight: 700, fontSize: 22 }}>Are you sure?</Text>
                            <Text style={{ fontSize: 10, padding: 8, fontFamily: 'mainFont' }}>This action will delete all details about employee,
                                You won’t be able to revert this!</Text>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity style={{ backgroundColor: "red", width: '45%', padding: 5, borderRadius: 6, marginRight: 10 }} >
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Yes, delete it</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'white', width: '45%', padding: 5, borderRadius: 6, marginRight: 10, borderWidth: 1, borderColor: "red" }} onPress={() => { handleButtonClick(false) }}>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'red', textAlign: 'center' }} >Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal animationType="slide" transparent={true} visible={isModalVisibletwo} onRequestClose={() => setIsModalVisibletwo(false)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                        <View style={{ backgroundColor: 'white', width: '80%', alignSelf: 'center', borderRadius: 10, padding: 0 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#233CBF', borderTopRightRadius: 10, padding: 15, borderTopLeftRadius: 10 }}>
                                <Text style={{ color: 'white', fontSize: 16, width: '93%', fontFamily: 'mainFont' }}>Add New User</Text>
                                {/* <FontAwesomeIcon color='white' icon={faXmark} /> */}
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                                <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Name :   </Text>
                                <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                                <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Email :   </Text>
                                <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                                <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Password :   </Text>
                                <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                                <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Role :   </Text>
                                <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4 }} />
                            </View>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "flex-end", marginBottom: 10 }}>
                                <TouchableOpacity style={{ backgroundColor: "green", width: '30%', padding: 5, borderRadius: 6, marginRight: 10 }} >
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Create</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: 'grey', width: '30%', padding: 5, borderRadius: 6, marginRight: 10 }} onPress={() => { handleButtonClicktwo(false) }}>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>

            </View>
        </>
    );
};

export default Admindetail;