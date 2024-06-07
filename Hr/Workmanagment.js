import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faA, faCircle, faLock, faArrowLeft, faEye, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Workmanagment = ({ navigation }) => {

    const [draft, setdraft] = useState(true)
    const [progress, setprogress] = useState(false)
    const [editing, setediting] = useState(false)
    const [done, setdone] = useState(false)

    const apple = () => {
        setdraft(true)
        setprogress(false)
        setediting(false)
        setdone(false)
    }

    const table = () => {
        setdraft(false)
        setprogress(true)
        setediting(false)
        setdone(false)
    }

    const chair = () => {
        setdraft(false)
        setprogress(false)
        setediting(true)
        setdone(false)
    }

    const cup = () => {
        setdraft(false)
        setprogress(false)
        setediting(false)
        setdone(true)
    }

    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    
    return (
        <ScrollView>
            <View style={{ width: '100%', height: '100%', marginBottom: 60, backgroundColor: "white" }}>
                <View style={{ width: "80%", alignSelf: 'center', padding: 15 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={apple}>
                        <FontAwesomeIcon color="#000ff8" size={10} icon={faCircle} />
                        <Text style={{ fontSize: 18, fontFamily: 'mainFont', padding: 4, margin: 6 }}>DRAFT</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={table}>
                        <FontAwesomeIcon color="#ff755e" size={10} icon={faCircle} />
                        <Text style={{ fontSize: 18, fontFamily: 'mainFont', padding: 4, margin: 6 }}>IN PROGRESS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={chair}>
                        <FontAwesomeIcon color="#00a518" size={10} icon={faCircle} />
                        <Text style={{ fontSize: 18, fontFamily: 'mainFont', padding: 4, margin: 6 }}>EDITING</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={cup}>
                        <FontAwesomeIcon color="#ee9800" size={10} icon={faCircle} />
                        <Text style={{ fontSize: 18, fontFamily: 'mainFont', padding: 4, margin: 6 }}>DONE</Text>
                    </TouchableOpacity>
                </View>

                {/* DRAFT */}

                {
                    draft && (
                        <View style={{ width: '90%', alignSelf: 'center', padding: 10, marginTop: 15, borderColor: 'lightgrey', borderWidth: 1, borderRadius: 12, height: 600 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                                <FontAwesomeIcon color="#000ff8" size={10} icon={faCircle} />
                                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontFamily: 'mainFont', marginBottom: 0, padding: 10 }}>DRAFT</Text>
                            </View>
                            <View style={{ width: '95%', alignSelf: 'center', elevation: 1, shadowColor: 'grey', margin: 8 }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Main Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 15 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#233CBF', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 3 }}>A</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#825EE4', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>B</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '95%', alignSelf: 'center', margin: 8 }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Secondary Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#825EE4', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>B</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '95%', alignSelf: 'center', margin: 8 }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Territory Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#F39200', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>D</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }

                {/* in progress */}

                {
                    progress && (
                        <View style={{ width: '90%', alignSelf: 'center', padding: 10, marginTop: 25, borderColor: 'lightgrey', borderWidth: 1, borderRadius: 12, height: 600 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                                <FontAwesomeIcon color="#ff755e" size={10} icon={faCircle} />
                                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontFamily: 'mainFont', marginBottom: 0, padding: 10 }}>IN PROGRESS</Text>
                            </View>
                            <View style={{ width: '95%', alignSelf: 'center', elevation: 1, shadowColor: 'grey', margin: 8, height: '45%' }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Main Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 15 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#E25858', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>C</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#F39200', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>D</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ width: '95%', alignSelf: 'center', elevation: 1, shadowColor: 'grey', margin: 8, height: '45%' }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Secondary Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 15 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#E25858', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>C</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#F39200', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>D</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    )
                }

                {/* editing  */}

                {
                    editing && (
                        <View style={{ width: '90%', alignSelf: 'center', padding: 10, marginTop: 25, borderColor: 'lightgrey', borderWidth: 1, borderRadius: 12, height: 650 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                                <FontAwesomeIcon color="#00a518" size={10} icon={faCircle} />
                                <Text style={{ color: 'black', fontSize: 20, textAlign: 'center', fontFamily: 'mainFont', marginBottom: 0, padding: 10 }}>EDITING</Text>
                            </View>
                            <View style={{ width: '95%', alignSelf: 'center', borderRadius: 2, margin: 8 }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Main Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 6 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#76CD58', borderRadius: 8, width: 16, height: 16 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 6 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#233CBF', borderRadius: 8, width: 16, height: 16 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 6 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#825EE4', borderRadius: 8, width: 16, height: 16 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={{ width: '95%', alignSelf: 'center', borderRadius: 2, margin: 8 }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Secondary Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 6 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#76CD58', borderRadius: 8, width: 16, height: 16 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 6 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#233CBF', borderRadius: 8, width: 16, height: 16 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 6 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#825EE4', borderRadius: 8, width: 16, height: 16 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}></Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    )

                }
                {/* done  */}


                {

                    done && (
                        <View style={{ width: '90%', alignSelf: 'center', padding: 10, marginTop: 25, borderColor: 'lightgrey', borderWidth: 1, borderRadius: 12, height: 750 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                                <FontAwesomeIcon color="#ee9800" size={10} icon={faCircle} />
                                <Text style={{color: 'black', fontSize: 20, textAlign: 'center', fontFamily: 'mainFont', marginBottom: 0, padding: 10 }}>DONE</Text>
                            </View>
                            <View style={{ width: '95%', alignSelf: 'center', borderRadius: 2, margin: 8 }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Main Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 15 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#233CBF', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>A</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#825EE4', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>B</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 15 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#E25858', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>C</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center' }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#F39200', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>D</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={{ width: '95%', alignSelf: 'center', borderRadius: 2, margin: 8 }}>
                                <Text style={{ fontSize: 18, padding: 20, fontFamily: 'mainFont' }}>Secondary Task</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 8 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#E25858', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>C</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 8 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#F39200', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>D</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#E6E6FA', padding: 10, width: '90%', alignSelf: 'center', margin: 8 }}>
                                    <View style={{ width: '20%' }}>
                                        <View style={{ backgroundColor: '#825EE4', borderRadius: 18, width: 34, height: 34 }}>
                                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, padding: 5 }}>B</Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '70%' }}>
                                        <Text style={{ fontSize: 14, padding: 10, fontFamily: 'mainFont' }}>Data Processing for IIM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }
            </View>
        </ScrollView>
    )
}

export default Workmanagment;