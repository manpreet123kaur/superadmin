import React from 'react';
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import * as Progress from 'react-native-progress';

const PerformanceH = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    
    return (
        <>
            <View>
                <View style={{ flexDirection: 'row', paddingTop: 20, width: '95%', alignSelf: 'center' }}>
                    <TouchableOpacity style={{ paddingLeft: 20, marginTop: 20 }} onPress={() => navigation.navigate("DrawernavigationH")}>
                        <FontAwesomeIcon style={{ width: '22%' }} color='#233CBF' size={22} icon={faArrowLeftLong} />
                    </TouchableOpacity>
                    <View style={{ width: '78%', padding: 10, paddingTop: 40 }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 22, color: '#233CBF', textAlign: 'center' }}>Performance</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 16, textAlign: 'center' }}>Progress of employee</Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", width: '90%', marginTop: 10, alignItems: 'center' }}>
                    <View style={{ width: '45%', padding: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, margin: 20 }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>Team Name</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 12, textAlign: 'center', color: 'grey' }}>Front End Developer</Text>
                    </View>
                    <View style={{ width: '45%', padding: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 12, margin: 20 }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>Total Days</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 12, textAlign: 'center', color: 'grey' }}>23 Days</Text>
                    </View>
                </View>
            </View>
            <View style={{ margin: 20, alignItems: 'center' }}>
                <Progress.Pie progress={0.4} size={80} />
                <Text style={{ fontFamily: 'mainFont', fontSize: 12, textAlign: 'center', color: 'grey', padding: 15 }}>The overall progess of this month 63%</Text>
            </View>

            <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', alignItems: 'center' }}>
                <View style={{ width: '40%', padding: 10, margin: 18, flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                    <Text style={{ height: 50, backgroundColor: '#50C878', width: 6, borderRadius: 3, margin: 7 }}></Text>
                    <View>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>In Office</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>63%</Text>
                    </View>
                </View>
                <View style={{ width: '40%', padding: 10, margin: 18, flexDirection: 'row', alignItems: 'center', marginBottom: 0 }}>
                    <Text style={{ height: 50, backgroundColor: '#E4D00A', width: 6, borderRadius: 3, margin: 7 }}></Text>
                    <View>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>Half Day</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>6%</Text>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '80%', alignSelf: 'center', alignItems: 'center' }}>
                <View style={{ width: '40%', padding: 10, margin: 18, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ height: 50, backgroundColor: '#40E0D0', width: 6, borderRadius: 3, margin: 7 }}></Text>
                    <View>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>In Office</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>22%</Text>
                    </View>
                </View>
                <View style={{ width: '40%', padding: 10, margin: 18, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ height: 50, backgroundColor: '#FF5733', width: 6, borderRadius: 3, margin: 7 }}></Text>
                    <View>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: 'grey' }}>Half Day</Text>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 17 }}>9%</Text>
                    </View>
                </View>
            </View>
        </>

    )
}

export default PerformanceH;