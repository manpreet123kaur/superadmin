import React from 'react';
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View, Image, TextInput, ScrollView, SafeAreaView, StyleSheet, Dimensions, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faPlus, faLock, faArrowLeft, faEye, faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Project = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View >
                    <TouchableOpacity style={{ flexDirection: 'row', width: '93%', alignSelf: "center", padding: 15, alignItems: 'center', borderWidth: 1, borderRadius: 10, marginTop: 40, borderColor: 'lightgrey', borderBottomWidth: 3, marginBottom: 4 }}>
                        <View>
                            <View style={{ width: 85, height: 60 }}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 8 }} source={require("../pages/assests/images/vector.jpg")} />
                            </View>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 15, textAlign: 'center' }}>Weather forecasting</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13, }}>9 Members</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', width: '93%', alignSelf: "center", padding: 15, alignItems: "flex-end", borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, margin: 6 }}>
                        <View>
                            <View style={{ width: 85, height: 60 }}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 8 }} source={require("../pages/assests/images/attendence.jpg")} />
                            </View>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 15, textAlign: 'center' }}>Responsive Design</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13 }}>9 Members</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', width: '93%', alignSelf: "center", padding: 15, alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, margin: 5 }}>
                        <View>
                            <View style={{ width: 85, height: 60 }}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 8 }} source={require("../pages/assests/images/vector.jpg")} />
                            </View>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 15, textAlign: 'center' }}>Weather forecasting</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13 }}>9 Members</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', width: '93%', alignSelf: "center", padding: 15, alignItems: 'center', borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey', borderBottomWidth: 3, margin: 5 }}>
                        <View>
                            <View style={{ width: 85, height: 60 }}>
                                <Image style={{ width: '100%', height: '100%', borderRadius: 8 }} source={require("../pages/assests/images/attendence.jpg")} />
                            </View>
                        </View>
                        <View style={{ margin: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 15, textAlign: 'center' }}>Weather forecasting</Text>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 13 }}>9 Members</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: '40%', margin: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesomeIcon icon={faPlus} />
                        <Text style={{ color: "#233CBF", textAlign: 'center', fontSize: 17, fontFamily: 'mainFont', margin: 12 }}>Add Project</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default Project;