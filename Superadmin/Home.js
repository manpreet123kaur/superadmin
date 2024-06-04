import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, TouchableOpacity, ScrollView ,Modal} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faUsers, faEye, faUserCheck, faTrash, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const API_URL = 'https://trackingtime-c5jw.onrender.com/api/user/getAll';

const Home = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisibletwo, setIsModalVisibletwo] = useState(false);

    const handleButtonClick = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleButtonClicktwo = () => {
        setIsModalVisibletwo(!isModalVisibletwo);
    };

    if (!fontsLoaded) {
        return <Text>Loading fonts...</Text>;
    }

    return (
        <>
            <ScrollView>
                <View style={{ justifyContent: 'center', padding: 15, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 20, fontWeight: '700', fontFamily: 'mainFont', width: '90%' }}>Hello, SuperAdmin</Text>
                        <TouchableOpacity style={{ padding: 5, alignSelf: 'flex-end' }}>
                            <FontAwesomeIcon size={20} color='#233CBF' icon={faBell} />
                        </TouchableOpacity>
                    </View>

                    {/* Admin counts and other stats */}
                    <View style={{ marginTop: 20, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e1e6f7', padding: 15, borderRadius: 10, elevation: 10, shadowColor: 'black', margin: 10, width: '45%' }}>
                            <Text style={{ fontSize: 18, paddingLeft: 4, fontFamily: 'mainFont' }}>All Admin</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, padding: 4, width: '80%', fontWeight: '700', fontFamily: 'mainFont' }}></Text>
                                <View style={{ backgroundColor: '#233CBF', borderRadius: 10, padding: 6 }}>
                                    <FontAwesomeIcon size={15} color='white' icon={faUsers} />
                                </View>
                            </View>
                        </View>

                        <View style={{ backgroundColor: '#e1e6f7', padding: 15, borderRadius: 10, elevation: 10, shadowColor: 'black', margin: 10, width: '45%' }}>
                            <Text style={{ fontSize: 18, paddingLeft: 4, fontFamily: 'mainFont' }}>Active Admin</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, padding: 4, width: '80%', fontWeight: '700', fontFamily: 'mainFont' }}></Text>
                                <View style={{ backgroundColor: '#233CBF', borderRadius: 10, padding: 6 }}>
                                    <FontAwesomeIcon size={15} color='white' icon={faUserCheck} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 0, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#e1e6f7', padding: 15, borderRadius: 10, elevation: 10, shadowColor: 'black', margin: 10, width: '45%' }}>
                            <Text style={{ fontSize: 18, paddingLeft: 4, fontFamily: 'mainFont' }}>Visitors</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, padding: 4, width: '80%', fontWeight: '700', fontFamily: 'mainFont' }}>310</Text>
                                <View style={{ backgroundColor: '#233CBF', borderRadius: 10, padding: 6 }}>
                                    <FontAwesomeIcon size={15} color='white' icon={faEye} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ backgroundColor: 'white', paddingBottom: 30 }}>
                    <View style={{ width: '100%', alignSelf: 'center', marginTop: 20, borderRadius: 10, padding: 15 }}>
                        <View>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 20 }}>Admin Details</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#e1e6f7', alignSelf: 'center', padding: 10, borderWidth: 1 }}>
                        <View style={{ width: '33%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: '700' }}>Username</Text>
                        </View>
                        <View style={{ width: '37%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: '700', textAlign: 'center' }}>E-mail</Text>
                        </View>
                        <View style={{ width: '30%' }}>
                            <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'right', fontWeight: '700' }}>Action</Text>
                        </View>
                    </View>
                    {/* "#e1e6f7" */}
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
                </View>
            </ScrollView>
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
        </>
    );
};

export default Home;
