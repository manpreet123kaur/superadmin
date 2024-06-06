import React from 'react';
import { useFonts } from "expo-font";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Addnewuser = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={{ width: '100%' }}>
            <View style={{ backgroundColor: '#233CBF', flexDirection: "row", alignItems: 'center', width: '100%', paddingTop: 40 }}>
                <TouchableOpacity style={{ paddingLeft: 20, width: '30%' }} onPress={() => navigation.navigate("DrawernavigationH")}>
                    <FontAwesomeIcon style={{ width: '10%' }} color='white' size={20} icon={faXmark} />
                </TouchableOpacity>
                <View style={{ padding: 10, paddingBottom: 20, width: '70%' }}>
                    <Text style={{ fontFamily: 'mainFont', color: 'white', fontSize: 20, fontWeight: 600 }}>Add New User</Text>
                </View>
            </View>
            <View style={{ padding: 10, marginLeft: 0, width: "100%", backgroundColor: 'white', paddingTop: 0, height: '100%' }}>
                <View style={{ width: '100%', padding: 6, marginBottom: 10, marginTop: 20 }}>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginTop: 5, width: '100%', marginLeft: 10, padding: 10 }}>Name :</Text>
                    <TextInput style={{ fontFamily: 'mainFont', width: '90%', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 6, alignSelf: 'center' }} placeholder='' />
                </View>
                <View style={{ width: '100%', padding: 6, marginBottom: 10 }}>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginTop: 5, width: '100%', marginLeft: 10, padding: 10 }}>Email :</Text>
                    <TextInput style={{ fontFamily: 'mainFont', width: '90%', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 6, alignSelf: 'center' }} placeholder='' />
                </View>
                <View style={{ width: '100%', padding: 6, marginBottom: 10 }}>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 15, marginTop: 5, width: '100%', marginLeft: 10, padding: 10 }}>Password :</Text>
                    <TextInput style={{ fontFamily: 'mainFont', width: '90%', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 6, alignSelf: 'center' }} placeholder='' />
                </View>
                <View style={{ width: '100%', padding: 6, marginBottom: 20 }}>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 16, marginTop: 5, width: '100%', marginLeft: 10, padding: 10 }}>Company :</Text>
                    <TextInput style={{ fontFamily: 'mainFont', width: '90%', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 6, alignSelf: 'center' }} placeholder='' />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 40 }}>
                    <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '35%', padding: 12, borderRadius: 6, marginRight: 10 }} >
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Add</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: '35%', padding: 11, borderRadius: 6, marginRight: 10, borderWidth: 1, borderColor: "#233CBF" }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: '#233CBF', textAlign: 'center' }} onPress={() => navigation.navigate("DrawernavigationH")}>Discard</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

export default Addnewuser;