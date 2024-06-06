import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'

const AllExpense = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>

            <ScrollView>
                <View>
                    <Text>expense screen</Text>
                </View>

            </ScrollView>


        </>
    )
}

export default AllExpense;