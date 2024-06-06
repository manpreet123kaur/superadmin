import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, ScrollView, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope, faXmark, faPenToSquare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list'

const Contentupdate = ({ navigation }) => {
    const [isemail, setemail] = useState(false);
    const handlebuttonforemail = () => {
        setemail(!isemail);
    };

    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf") 
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: 'white', width: '100%', height: 700 }}>
                    <View style={{ width: 380, height: 200, alignSelf: 'center' }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../assets/images/aboutus.jpg")} />
                    </View>
                    <View style={{ width: '100%', alignSelf: 'center', padding: 14, paddingTop: 60 }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 10, fontWeight: "500", padding: 5 }}>Post Title : </Text>
                        <TextInput style={{ borderBottomWidth: 2, width: "95%", alignSelf: 'center', borderColor: 'lightgrey', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, padding: 8, borderWidth: 1, borderRadius: 12, borderTopLeftRadius: 12, }} placeholder='' />
                    </View>

                    <View style={{ width: '100%', alignSelf: 'center', padding: 14 }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginLeft: 10, fontWeight: "500", padding: 5 }}>What’s in Tracking? : </Text>
                        <TextInput style={{ borderBottomWidth: 2, width: "95%", alignSelf: 'center', borderColor: 'lightgrey', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, padding: 10, borderWidth: 1, borderRadius: 12, borderTopLeftRadius: 12, fontSize: 10, height: 70 }} placeholder='Our dream' />
                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 40, marginRight: 40, marginBottom: 20 }}>
                        <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '30%', padding: 11, borderRadius: 6, marginRight: 10 }} onPress={handlebuttonforemail}>
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: "white", width: '30%', padding: 10, borderRadius: 6, marginRight: 10, borderColor: '#233CBF', borderWidth: 1 }} >
                            <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: '#233CBF', textAlign: 'center' }}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Modal animationType="slide" transparent={true} visible={isemail} onRequestClose={() => setemail(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 10, alignItems: 'center', elevation: 5, width: '70%' }}>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => { handlebuttonforemail(false) }}>
                            <FontAwesomeIcon color='#233CBF' size={20} icon={faXmark} />
                        </TouchableOpacity>
                        <Text style={{ color: '#233CBF', fontWeight: 700, fontSize: 20 }}>Edit Content</Text>
                        <View>
                            <View style={{ margin: 10, alignSelf: 'center' }}>
                                <Text style={{ color: 'black', fontFamily: 'mainFont', marginLeft: 6 }}>Title</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey', margin: 5, padding: 6, borderRadius: 4, width: '100%' }}>
                                    <TextInput placeholderTextColor="grey" placeholder='Message' width="100%" />
                                </View>
                            </View>
                            <View style={{ margin: 10, marginTop: 0, alignSelf: 'center' }}>
                                <Text style={{ color: 'black', fontFamily: 'mainFont', marginLeft: 6 }}>Description</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'grey', margin: 5, padding: 10, borderRadius: 4, width: '100%' }}>
                                    <TextInput placeholderTextColor="grey" placeholder='Message' width="100%" />
                                </View>
                            </View>
                        </View>

                        <TouchableOpacity style={{ backgroundColor: '#233CBF', width: '35%', alignSelf: 'center', padding: 8, borderRadius: 8, marginBottom: 15 }}>
                            <Text style={{ color: 'white', fontFamily: 'mainFont', textAlign: 'center' }}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default Contentupdate;