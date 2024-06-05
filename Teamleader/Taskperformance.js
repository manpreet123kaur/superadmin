import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View, Image, ScrollView ,TextInput,Modal} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faEnvelope, faLock, faArrowLeft, faEye, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Taskperformance = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    const [isModalVisibletwo, setIsModalVisibletwo] = useState(false);
    const handleButtonClicktwo = () => {
        setIsModalVisibletwo(!isModalVisibletwo);
    };

    const data = [
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
    ];

    const renderRows = () => {
        return data.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', width: '100%', backgroundColor: item.backgroundColor, padding: 4 }}>
                <View style={{ width: '30%' }}>
                    <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 15 }}>Jenis</Text>
                </View>
                <View style={{ width: '50%' }}>
                    <Text style={{ fontFamily: 'mainFont', textAlign: 'center', padding: 10, fontSize: 15, width: '100%' }}>{item.email}</Text>
                </View>
                <TouchableOpacity style={{ width: '20%', alignItems: 'flex-end' }} onPress={() => navigation.navigate("Performancefortl")}>
                    <FontAwesomeIcon size={18} style={{ marginTop: 10 }} icon={faEllipsis} />
                </TouchableOpacity>
            </View>
        ));
    };

    return (
        <>
            <View style={{ height: '100%', backgroundColor: 'white' }}>
                <TouchableOpacity style={{ width: '30%', backgroundColor: '#233CBF', borderRadius: 6, alignSelf: 'flex-end', marginRight: 20, margin: 10 }} onPress={handleButtonClicktwo}>
                    <Text style={{ fontFamily: 'mainFont', color: 'white', padding: 8, borderRadius: 6, textAlign: 'center' }}>Add New User</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', backgroundColor: '#e1e6f7', padding: 6, borderWidth: 1, width: "100%", alignSelf: 'center' }}>
                    <View style={{ width: '30%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: 700, paddingLeft: 16 }}>Name</Text>
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'center', fontWeight: 700 }}>Email Address</Text>
                    </View>
                    <View style={{ width: '20%' }}>
                        <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'right', fontWeight: 700 }}>Detail</Text>
                    </View>
                </View>

                <ScrollView>
                    <View style={{ width: '98%', alignSelf: 'center', padding: 5, borderWidth: 1, height: 700 }}>
                        {renderRows()}
                    </View>
                </ScrollView>
            </View>
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
        </>
    );
};

export default Taskperformance;