
import React, { useState } from 'react';
import { useFonts } from "expo-font";
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import * as Progress from 'react-native-progress';

const AttendenceU = ({ navigation }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf") 
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <ScrollView>
            <View style={{ width: '100%', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', padding: 15, borderWidth: 1, borderRadius: 10, borderColor: 'lightgrey' }}>
                    <View style={{ width: '10%' }}>
                        <FontAwesomeIcon color='grey' icon={faAngleLeft} />
                    </View>
                    <View style={{ width: '80%' }}>
                        <Text style={{ textAlign: "center", fontFamily: 'mainFont', color: '#1716ff', fontSize: 17 }}>March 2024</Text>
                    </View>
                    <View style={{ width: '10%' }}>
                        <FontAwesomeIcon color='grey' icon={faChevronRight} />
                    </View>
                </View>

                <View style={{ alignSelf: 'center', padding: 15 }}>
                <Progress.Bar progress={0.8} width={200} />
                </View>
                <Text style={{ fontFamily: 'mainFont', textAlign: 'center' }}>Attendence progress of this month</Text>

                <View style={{ width: '98%', padding: 20, flexDirection: 'row', alignItems: 'center', alignSelf: "center", flexWrap: 'wrap' }}>
                    <View style={{ width: '30%', backgroundColor: '#ffe2dc', borderRadius: 10, padding: 15, marginRight: 15 }}>
                        <Text style={{ color: 'grey', fontFamily: 'mainFont', fontSize: 13 }}>Total Days</Text>
                        <Text style={{ color: 'grey', fontWeight: 700, fontSize: 22 }}>30</Text>
                    </View>
                    <View style={{ width: '30%', backgroundColor: '#d2bfff', borderRadius: 10, padding: 15, marginRight: 15 }}>
                        <Text style={{ color: 'grey', fontFamily: 'mainFont', fontSize: 13 }}>Leave</Text>
                        <Text style={{ color: 'grey', fontWeight: 700, fontSize: 22 }}>1</Text>
                    </View>
                    <View style={{ width: '30%', backgroundColor: '#b2ffce', borderRadius: 10, padding: 10 }}>
                        <Text style={{ color: 'grey', fontFamily: 'mainFont', fontSize: 13 }}>Working Days</Text>
                        <Text style={{ color: 'grey', fontWeight: 700, fontSize: 22 }}>23</Text>
                    </View>
                    <View style={{ width: '30%', backgroundColor: '#f5ffd5', borderRadius: 10, padding: 15, marginRight: 15, marginTop: 15 }}>
                        <Text style={{ color: 'grey', fontFamily: 'mainFont', fontSize: 13 }}>Weekend</Text>
                        <Text style={{ color: 'grey', fontWeight: 700, fontSize: 22 }}>6</Text>
                    </View>
                    <TouchableOpacity onPressIn={handleMouseEnter} onPressOut={handleMouseLeave} activeOpacity={1}>
                        <View style={[styles.container, isHovered && styles.hoverContainer]}>
                            <Text style={{ color: 'grey', fontFamily: 'mainFont', fontSize: 13 }}>work from home</Text>
                            <Text style={{ color: 'grey', fontWeight: 700, fontSize: 22 }}>1</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', alignSelf: 'center', alignSelf: 'center', padding: 15, backgroundColor: '#fff3cc', marginTop: 15 }}>
                    <Text style={{ width: '20%', color: 'black', fontFamily: 'mainFont', fontSize: 15, }}>Date</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 15, textAlign: 'center' }}>Check in</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 15, textAlign: 'center' }}>check out</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 15, textAlign: 'right' }}>working hrs</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>11</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Mon</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right' }}>9 : 19 </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>12</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Tue</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right' }}>9 : 19 </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>13</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Wed</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right' }}>9 : 19 </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>14</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Thu</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right' }}>9 : 19 </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>15</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Fri</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center', }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right', }}>9 : 19 </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: '#ff575f', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>16</Text>
                        <Text style={{ color: '#ff575f', fontFamily: 'mainFont', fontSize: 10 }}>Sat</Text>
                    </View>
                    <View style={{ backgroundColor: 'pink', width: '80%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'center', padding: 10 }}>Weekend 16-March-2024 Saturday</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: '#ff575f', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>17</Text>
                        <Text style={{ color: '#ff575f', fontFamily: 'mainFont', fontSize: 10 }}>Sun</Text>
                    </View>
                    <View style={{ backgroundColor: 'pink', width: '80%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'center', padding: 10 }}>Weekend 17-March-2024 Sunday</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>18</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Mon</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right' }}>9 : 19 </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>19</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Tue</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right' }}>9 : 19 </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: '#ff575f', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>20</Text>
                        <Text style={{ color: '#ff575f', fontFamily: 'mainFont', fontSize: 10 }}>Wed</Text>
                    </View>
                    <View style={{ backgroundColor: 'pink', width: '80%', padding: 10 }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'center' }}>20-March-2024 Wednesday</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'center' }}>Sick leave</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>21</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Thu</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right' }}>9 : 19 </Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', alignSelf: 'center', padding: 4 }}>
                    <View style={{ width: '20%' }}>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 15, fontWeight: 700 }}>22</Text>
                        <Text style={{ color: 'black', fontFamily: 'mainFont', fontSize: 10 }}>Fri</Text>
                    </View>
                    <Text style={{ width: '25%', color: '#329300', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center' }}>09 : 10am</Text>
                    <Text style={{ width: '25%', color: 'black', fontFamily: 'mainFont', fontSize: 13, textAlign: 'center', }}>07 : 19pm</Text>
                    <Text style={{ width: '30%', color: 'black', fontFamily: 'mainFont', fontSize: 12, textAlign: 'right', }}>9 : 19 </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = {
    container: {
        width: '100%',
        backgroundColor: '#ffd4fa',
        borderRadius: 10,
        padding: 10,
        marginRight: 15,
        marginTop: 0,
    },
    hoverContainer: {
        backgroundColor: '#ffc0cb',
    }
};

export default AttendenceU;