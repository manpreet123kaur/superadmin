import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';

const PerformanceU = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const name = ["Manisha"]
    const email = ["abc123@gmail.com"]
    const Teamm = ["Web designing"]
    const Position = ["Senior web designer"]

    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={{ padding: 10, marginTop: 10, width: '90%', alignSelf: 'center' }}>
                        <Text style={{ fontSize: 18, color: '#233CBF', fontFamily: 'mainFont' }}>Detail : </Text>
                        <View style={{ width: 80, height: 80, margin: 10, borderWidth: 1, padding: 10, borderColor: "lightgrey" }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require("../assets/images/kaviya.png")} />
                        </View>
                    </View>
                    <View style={{ width: '90%', padding: 10, alignSelf: 'center', borderWidth: 1, borderColor: "lightgrey", borderRadius: 12 }}>
                        <View>
                            <Text style={{ fontSize: 16, color: 'black', fontFamily: 'mainFont', padding: 7 }}>Name : <Text style={{ color: 'grey' }}>{name}</Text></Text>
                            <Text style={{ fontSize: 16, color: 'black', fontFamily: 'mainFont', padding: 7 }}>E-mail : <Text style={{ color: 'grey' }}>{email}</Text></Text>
                            <Text style={{ fontSize: 16, color: 'black', fontFamily: 'mainFont', padding: 7 }}>Team : <Text style={{ color: 'grey' }}>{Teamm}</Text></Text>
                            <Text style={{ fontSize: 16, color: 'black', fontFamily: 'mainFont', padding: 7 }}>Position : <Text style={{ color: 'grey' }}>{Position}</Text></Text>
                        </View>
                    </View>

                    <View>
                        <View style={{ padding: 10, marginTop: 10, width: '90%', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: '#233CBF', fontFamily: 'mainFont' }}>Progress : </Text>
                            <View style={{ flexDirection: "row", width: '90%', marginTop: 10, alignItems: 'center' }}>
                            </View>
                        </View>
                        <View style={{ width: '85%', margin: 20, alignItems: 'center' }}>
                            <Progress.Pie progress={0.7} size={80} />
                            <Text style={{ fontFamily: 'mainFont', fontSize: 12, textAlign: 'center', color: 'grey', padding: 15 }}>Overall progess in the <Text style={{ color: 'black', fontWeight: 700 }}>IBaad Project</Text>.</Text>
                        </View>

                        <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', alignItems: 'center' }}>
                            <View style={{ width: '40%', padding: 10, margin: 18, flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                                <Text style={{ height: 50, backgroundColor: '#50C878', width: 6, borderRadius: 3, margin: 7 }}></Text>
                                <View>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>In Office</Text>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>52%</Text>
                                </View>
                            </View>
                            <View style={{ width: '40%', padding: 10, margin: 18, flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                                <Text style={{ height: 50, backgroundColor: '#E4D00A', width: 6, borderRadius: 3, margin: 7 }}></Text>
                                <View>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>Half Day</Text>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>9%</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', alignItems: 'center' }}>
                            <View style={{ width: '40%', padding: 10, margin: 18, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ height: 50, backgroundColor: '#40E0D0', width: 6, borderRadius: 3, margin: 7 }}></Text>
                                <View>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>Work from Home</Text>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>5%</Text>
                                </View>
                            </View>
                            <View style={{ width: '40%', padding: 10, margin: 18, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ height: 50, backgroundColor: '#FF5733', width: 6, borderRadius: 3, margin: 7 }}></Text>
                                <View>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>on leave</Text>
                                    <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>3%</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView >
        </>
    )
}

export default PerformanceU;