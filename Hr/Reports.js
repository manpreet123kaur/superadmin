import React from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView ,TextInput} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBuilding, faPersonThroughWindow, faUserPlus, faArrowLeft, faEye, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const Reports = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <ScrollView>
            <View style={{backgroundColor:'white'}}>
                <View style={{ borderWidth: 1, width: '94%', alignSelf: 'center', borderColor: 'lightgrey', borderRadius: 12, padding: 8, marginBottom: 30 }}>
                    <View style={{ width: '96%', alignSelf: 'center', flexDirection: 'row' }}>
                        <View style={{ width: '48%', padding: 20, borderRightWidth: 1, borderRightColor: 'lightgrey', alignSelf: 'center' }}>
                            <FontAwesomeIcon style={{ alignItems: 'center' }} color='#233CBF' size={30} icon={faBuilding} />
                            <Text style={{ paddingTop: 14, fontFamily: 'mainFont', color: '#233CBF' }}>1500 +</Text>
                            <Text style={{ paddingTop: 10, fontFamily: 'mainFont', color: 'grey', fontSize: 12 }}>Total Employees</Text>
                        </View>

                        <View style={{ width: '48%', padding: 20, borderBottomWidth: 1, borderBottomColor: 'lightgrey', alignSelf: 'center' }}>
                            <FontAwesomeIcon style={{ alignItems: 'center' }} color='#34801A' size={30} icon={faPersonThroughWindow} />
                            <Text style={{ paddingTop: 14, fontFamily: 'mainFont', color: '#34801A' }}>1500 +</Text>
                            <Text style={{ paddingTop: 10, fontFamily: 'mainFont', color: 'grey', fontSize: 12 }}>Total Employees</Text>
                        </View>
                    </View>

                    <View style={{ width: '96%', alignSelf: 'center', flexDirection: 'row' }}>
                        <View style={{ width: '48%', padding: 20, borderTopWidth: 1, borderTopColor: 'lightgrey', alignSelf: 'center' }}>
                            <FontAwesomeIcon style={{ alignItems: 'center' }} color='#E25858' size={30} icon={faUserPlus} />
                            <Text style={{ paddingTop: 14, fontFamily: 'mainFont', color: '#E25858' }}>1500 +</Text>
                            <Text style={{ paddingTop: 10, fontFamily: 'mainFont', color: 'grey', fontSize: 12 }}>Total Employees</Text>
                        </View>

                        <View style={{ width: '48%', padding: 20, borderLeftWidth: 1, borderLeftColor: 'lightgrey' }}>

                        </View>
                    </View>
                </View>

                <View style={{ borderWidth: 1, width: '94%', alignSelf: 'center', borderColor: 'lightgrey', borderRadius: 12, padding: 8, marginBottom: 30, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '60%' }}>
                        <Text style={{ paddingTop: 14, fontFamily: 'mainFont', color: 'grey', paddingLeft: 30 }}>Working Format</Text>
                        <View style={{ padding: 10, margin: 0, flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                            <Text style={{ height: 50, backgroundColor: '#4A9031', width: 6, borderRadius: 3, margin: 7 }}></Text>
                            <View>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>Working from home</Text>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>48%</Text>
                            </View>
                        </View>
                        <View style={{ padding: 10, margin: 0, flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                            <Text style={{ height: 50, backgroundColor: '#233CBF', width: 6, borderRadius: 3, margin: 7 }}></Text>
                            <View>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>Working from office</Text>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>22%</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '40%', alignSelf: 'center' }}>
                       
                    </View>
                </View>

                <View style={{ borderWidth: 1, width: '94%', alignSelf: 'center', borderColor: 'lightgrey', borderRadius: 12, padding: 8, marginBottom: 40, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '100%' }}>

                        <Text style={{ paddingTop: 14, fontFamily: 'mainFont', color: 'grey', paddingLeft: 10 }}>Things to do</Text>

                        <View style={{ flexDirection: 'row', width: '100%', padding: 13 }}>
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 15, }}>Time off request</Text>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'grey' }}>You have 4 off requests to review</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'grey' }}>Today</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', width: '100%', padding: 13 }}>
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 15, }}>Run Late Payroll</Text>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'grey' }}>Oops!, you missed the original deadline</Text>
                            </View>
                            <View style={{ width: '30%' }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'grey' }}>08 jan,2024</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Reports;