import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const Chooseplan = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>
            <ScrollView>
                <View style={{ width: "97%", alignSelf: 'center', backgroundColor: 'white', paddingBottom: 60 }}>
                    <View style={{ width: 370, height: 330, margin: 50, alignSelf: 'center' }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../assets/images/Chooseplan.jpg")} />
                    </View>
                    <View style={{ padding: 10, width: '100%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 26, fontFamily: 'mainFont', textAlign: 'center', padding: 10 }}>Choose Your Way</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'mainFont', lineHeight: 20, textAlign: 'center', color: 'grey', padding: 8 }}>Make your big goal as specific as you can. A good specific career goal is “I want to become an art director”, as opposed to the more general “I want to work in the media”.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 20, alignSelf: 'center' }}>
                        <FontAwesomeIcon size={10} color='#233CBF' style={{ margin: 10 }} icon={faCircle} />
                        <FontAwesomeIcon size={10} color='darkgrey' style={{ margin: 10 }} icon={faCircle} />
                        <FontAwesomeIcon size={10} color='darkgrey' style={{ margin: 10 }} icon={faCircle} />
                    </View>
                    <TouchableOpacity style={{ width: '30%', padding: 12, borderRadius: 6, margin: 15, alignSelf: 'center' }} onPress={() => navigation.navigate("Method")}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: '#233CBF', textAlign: 'center', fontWeight: '700' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default Chooseplan;
