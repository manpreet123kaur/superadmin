import React from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'

const Teaminfo = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <ScrollView>
                <View style={{ backgroundColor: 'white', height: 700 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, width: "45%", margin: 8 }}>
                            <View style={{ width: '90%', padding: 5, marginTop: 5 }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8, marginLeft: 12 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Kake Midleton</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Sydney,Australia</Text>
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>POSITION</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Strategy Director</Text>
                                </View>
                                <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', width: "100%", marginLeft: 10 }}>
                                    <Text style={{ height: 3, width: 30, backgroundColor: '#F39200' }}></Text>
                                </View>
                                <View style={{ width: 75, height: 38, marginLeft: 10, marginTop: 10 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/users.png")} />
                                </View>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, width: "50%", margin: 8 }}>
                            <View style={{ width: '90%', padding: 5, marginTop: 5 }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8, marginLeft: 12 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Kake Midleton</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Sydney,Australia</Text>
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>POSITION</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Strategy Director</Text>
                                </View>
                                <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', width: "100%", marginLeft: 10 }}>
                                    <Text style={{ height: 3, width: 30, backgroundColor: '#F39200' }}></Text>
                                </View>
                                <View style={{ width: 75, height: 38, marginLeft: 10, marginTop: 10 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/users.png")} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, width: "45%", margin: 8 }}>
                            <View style={{ width: '90%', padding: 5, marginTop: 5 }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8, marginLeft: 12 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Kake Midleton</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Sydney,Australia</Text>
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>POSITION</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Strategy Director</Text>
                                </View>
                                <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', width: "100%", marginLeft: 10 }}>
                                    <Text style={{ height: 3, width: 30, backgroundColor: '#F39200' }}></Text>
                                </View>
                                <View style={{ width: 75, height: 38, marginLeft: 10, marginTop: 10 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/users.png")} />
                                </View>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, width: "50%", margin: 8 }}>
                            <View style={{ width: '90%', padding: 5, marginTop: 5 }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8, marginLeft: 12 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Kake Midleton</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Sydney,Australia</Text>
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>POSITION</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Strategy Director</Text>
                                </View>
                                <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', width: "100%", marginLeft: 10 }}>
                                    <Text style={{ height: 3, width: 30, backgroundColor: '#F39200' }}></Text>
                                </View>
                                <View style={{ width: 75, height: 38, marginLeft: 10, marginTop: 10 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/users.png")} />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, width: "45%", margin: 8 }}>
                            <View style={{ width: '90%', padding: 5, marginTop: 5 }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8, marginLeft: 12 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Kake Midleton</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Sydney,Australia</Text>
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>POSITION</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Strategy Director</Text>
                                </View>
                                <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', width: "100%", marginLeft: 10 }}>
                                    <Text style={{ height: 3, width: 30, backgroundColor: '#F39200' }}></Text>
                                </View>
                                <View style={{ width: 75, height: 38, marginLeft: 10, marginTop: 10 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/users.png")} />
                                </View>
                            </View>
                        </View>
                        <View style={{ borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, width: "50%", margin: 8 }}>
                            <View style={{ width: '90%', padding: 5, marginTop: 5 }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8, marginLeft: 12 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Kake Midleton</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Sydney,Australia</Text>
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>POSITION</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Strategy Director</Text>
                                </View>
                                <View style={{ borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', width: "100%", marginLeft: 10 }}>
                                    <Text style={{ height: 3, width: 30, backgroundColor: '#F39200' }}></Text>
                                </View>
                                <View style={{ width: 75, height: 38, marginLeft: 10, marginTop: 10 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/users.png")} />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Teaminfo;