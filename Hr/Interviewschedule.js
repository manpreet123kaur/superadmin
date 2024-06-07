import React, { useState } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView ,TextInput} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faCircleXmark, faUsers, faAddressBook, faChalkboardUser, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const Interviewschedule = ({navigation}) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <ScrollView>
                <View style={{ paddingBottom: 20 ,backgroundColor:'white'}}>
                    <View style={{ padding: 20, width: '100%' }}>
                        <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate("DrawernavigationH")}>
                            <FontAwesomeIcon style={{ width: '10%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                        </TouchableOpacity>
                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontSize: 22, fontFamily: 'mainFont', padding: 10, color: '#233CBF' }}>Interview Scheduling</Text>
                            </View>
                            <TouchableOpacity style={{ width: '30%', backgroundColor: '#233CBF', borderRadius: 6 }} onPress={() => navigation.navigate("AddinterviewH")}>
                                <Text style={{ fontSize: 13, fontFamily: 'mainFont', padding: 6, color: "white", textAlign: 'center' }}>Add Interview</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={{ width: '95%', alignSelf: 'center', padding: 10, borderWidth: 1, borderColor: 'darkgrey', borderRadius: 12, margin: 10 }}>
                        <View style={{ width: '100%', flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <View style={{ width: "40%" }}>
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont' }}>Job Title : </Text>
                            </View>
                            <View style={{ width: "60%" }}>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>SEO</Text>
                                <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>Job ID: #JOB100057</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <View style={{ width: "40%" }}>
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont' }}>Candidate : </Text>
                            </View>
                            <View style={{ width: "60%" }}>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Jenis Rozenfeld</Text>
                                <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>SEO Engineering</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <View style={{ width: "40%" }}>
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont' }}>Date & Place : </Text>
                            </View>
                            <View style={{ width: "60%" }}>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Feb 04,2024</Text>
                                <Text style={{ fontSize: 13, fontFamily: 'mainFont', color: 'grey' }}>14:00 - 15:00</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <View style={{ width: "40%" }}>
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont' }}>Scheduled By : </Text>
                            </View>
                            <View style={{ width: "60%" }}>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Aastha Palit</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgrey', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>
                            <View style={{ width: "40%" }}>
                                <Text style={{ fontSize: 16, fontFamily: 'mainFont' }}>Source : </Text>
                            </View>
                            <View style={{ width: "60%" }}>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>LinkedIn</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{ width: '20%', backgroundColor: '#233CBF', borderRadius: 6, alignSelf: 'flex-end', margin:10}} onPress={() => navigation.navigate("DrawernavigationH")}>
                        <Text style={{ fontSize: 13, fontFamily: 'mainFont', padding: 6, color: "white", textAlign: 'center' }}>Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default Interviewschedule;