import React from 'react';
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faEnvelope, faLock, faArrowLeft, faEye, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Projectfortl = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={{ backgroundColor: 'white', height: 1000 }}>
            <TouchableOpacity style={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 30, padding: 15, margin: 10, marginTop: 30, borderBottomWidth: 4 }} onPress={() => navigation.navigate("Projectpersons")}>
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderRadius: 20, marginLeft: 12 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                    </View>
                    <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderRadius: 20, marginLeft: -15 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                    </View>
                    <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderRadius: 20, marginLeft: -15 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 22, color: "grey", padding: 6 }}>IOS Project</Text>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: "grey", padding: 6 }}>11 Members</Text>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: "grey", padding: 6 }}>32 tasks</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: 'lightgrey', borderRadius: 30, padding: 15, margin: 10, borderBottomWidth: 4 }} onPress={() => navigation.navigate("Projectpersons")}>
                <View style={{ flexDirection: 'row' }} >
                    <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderRadius: 20, marginLeft: 12 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                    </View>
                    <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderRadius: 20, marginLeft: -15 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                    </View>
                    <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderRadius: 20, marginLeft: -15 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                    </View>
                </View>
                <View>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 22, color: "grey", padding: 6 }}>Web Project</Text>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: "grey", padding: 6 }}>11 Members</Text>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: "grey", padding: 6 }}>32 tasks</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Projectfortl;