import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faEnvelope, faLock, faArrowLeft, faEye, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-paper';
import * as Progress from 'react-native-progress';

const Humanresource = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <ScrollView>
                <View style={{ justifyContent: 'center', padding: 15 }}>
                  
                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                            <Text style={{ fontSize: 14, paddingBottom: 10, fontFamily: 'mainFont', width: '88%' }}>Project workforce</Text>
                            <Text style={{ fontSize: 14, paddingBottom: 10, fontFamily: 'mainFont', color: '#ff7996' }}>32.21%</Text>
                        </View>
                        <Progress.Bar progress={0.3} width={200} />
                        <Text style={{ fontSize: 13, paddingBottom: 10, paddingTop: 10, fontFamily: 'mainFont', width: '88%', color: 'grey' }}>15% of required workforce needed.</Text>
                    </View>

                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                            <Text style={{ fontSize: 14, paddingBottom: 10, fontFamily: 'mainFont', width: '88%' }}>Project velocity</Text>
                            <Text style={{ fontSize: 14, paddingBottom: 10, fontFamily: 'mainFont', color: '#088100' }}>50.21%</Text>
                        </View>
                        <Progress.Bar progress={0.5} width={200} />
                        <Text style={{ fontSize: 13, paddingBottom: 10, paddingTop: 10, fontFamily: 'mainFont', width: '88%', color: 'grey' }}>30% of required velocity needed.</Text>
                    </View>

                    <View style={{ padding: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%" }}>
                            <Text style={{ fontSize: 14, paddingBottom: 10, fontFamily: 'mainFont', width: '88%' }}>Critical hours</Text>
                            <Text style={{ fontSize: 14, paddingBottom: 10, fontFamily: 'mainFont', color: '#088100' }}>80.21</Text>
                        </View>
                        <Progress.Bar progress={0.7} width={200} />
                        <Text style={{ fontSize: 13, paddingBottom: 10, paddingTop: 10, fontFamily: 'mainFont', width: '88%', color: 'grey' }}>80% of required workforce needed.</Text>
                    </View>
                  
                </View>
            </ScrollView>
        </>
    )
}

export default Humanresource;