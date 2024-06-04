import React from 'react';
import { useFonts } from "expo-font";
import { Text, View, Image, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLightbulb, faBriefcase, faFileLines, faBrain, faArrowLeftLong, faStar } from '@fortawesome/free-solid-svg-icons';
import { TextInput } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

const Performance = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <View style={{ marginBottom: 20, backgroundColor: 'white', paddingTop: 20 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', padding: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, margin: 6 }}>
                        <View style={{ width: "12%", backgroundColor: '#E6E6FA', padding: 10, borderRadius: 50 }}>
                            <FontAwesomeIcon size={24} color='#233CBF' icon={faLightbulb} />
                        </View>
                        <View style={{ width: '80%', margin: 8 }}>
                            <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont' }}>Improve Corporate Performance</Text>
                            <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont' }}>72%<Text style={{ color: 'grey' }}> / month</Text></Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', padding: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, margin: 6 }}>
                        <View style={{ width: "12%", backgroundColor: '#E6E6FA', padding: 10, borderRadius: 50 }}>
                            <FontAwesomeIcon size={24} color='#233CBF' icon={faBriefcase} />
                        </View>
                        <View style={{ width: '80%', margin: 8 }}>
                            <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont' }}>Employee Productivity</Text>
                            <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont' }}>9%<Text style={{ color: 'grey' }}> / employee</Text></Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', padding: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, margin: 6 }}>
                        <View style={{ width: "12%", backgroundColor: '#E6E6FA', padding: 10, borderRadius: 50 }}>
                            <FontAwesomeIcon size={24} color='#233CBF' icon={faFileLines} />
                        </View>
                        <View style={{ width: '80%', margin: 8 }}>
                            <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont' }}>Project Achievement</Text>
                            <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont' }}>4%<Text style={{ color: 'grey' }}> Projects / Month</Text></Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', alignSelf: 'center', padding: 10, borderWidth: 1, borderColor: 'lightgrey', borderRadius: 10, margin: 6 }}>
                        <View style={{ width: "12%", backgroundColor: '#E6E6FA', padding: 10, borderRadius: 50 }}>
                            <FontAwesomeIcon size={24} color='#233CBF' icon={faBrain} />
                        </View>
                        <View style={{ width: '80%', margin: 8 }}>
                            <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont' }}>Key Performance Indicator</Text>
                            <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont' }}>5%<Text style={{ color: 'grey' }}> Team</Text></Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 20, marginBottom: 20 }}>
                        <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: 'lightgrey', backgroundColor: '#E6E6FA', borderRadius: 12, margin: 10 }}>
                            <Text style={styles.header}>Improve Corporate Performance</Text>
                            <LineChart data={{ labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], datasets: [{ data: [30, 6, 14, 19, 27, 26, 56, 34, 23, 35, 45, 34], strokeWidth: 2, },], }} width={Dimensions.get('window').width = 343} height={190} chartConfig={{ backgroundColor: '#1cc910', backgroundGradientFrom: '#eff3ff', backgroundGradientTo: '#efefef', decimalPlaces: 2, color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, style: { borderRadius: 16, }, }} style={{ marginVertical: 8, borderRadius: 16, }} />
                        </View>

                        <View style={{ width: '90%', alignSelf: 'center', borderWidth: 1, borderColor: 'lightgrey', backgroundColor: '#E6E6FA', borderRadius: 12, margin: 10 }}>
                            <Text style={styles.header}>Improve Employee Productivity</Text>
                            <LineChart data={{ labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'], datasets: [{ data: [19, 27, 26, 56, 34, 23, 30, 6, 14, 35, 45, 34], strokeWidth: 2, },], }} width={Dimensions.get('window').width = 343} height={190} chartConfig={{ backgroundColor: '#1cc910', backgroundGradientFrom: '#eff3ff', backgroundGradientTo: '#efefef', decimalPlaces: 2, color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, style: { borderRadius: 16, }, }} style={{ marginVertical: 8, borderRadius: 16, }} />
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: "#233CBF", fontSize: 13, fontFamily: 'mainFont', marginLeft: 30, }}>Employee of The Month</Text>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', alignSelf: 'center', marginLeft: 20 }}>
                        <View style={{ width: '45%', borderWidth: 1, borderColor: 'lightgrey', margin: 5, borderRadius: 12 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: 10, margin: 6, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Jessica Androso</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Marketing Manager</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 13, width: '100%', alignItems: 'center' }}>
                                <FontAwesomeIcon style={{ marginLeft: 20 }} size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='lightgrey' icon={faStar} />
                            </View>
                        </View>

                        <View style={{ width: '45%', borderWidth: 1, borderColor: 'lightgrey', margin: 5, borderRadius: 12 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: 10, margin: 6, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />
                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Jessica Androso</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Marketing Manager</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 13, width: '100%', alignItems: 'center' }}>
                                <FontAwesomeIcon style={{ marginLeft: 20 }} size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='lightgrey' icon={faStar} />
                                <FontAwesomeIcon size={24} color='lightgrey' icon={faStar} />
                                <FontAwesomeIcon size={24} color='lightgrey' icon={faStar} />
                            </View>
                        </View>
                    </View>

                    <View style={{ width: '100%', flexDirection: 'row', alignSelf: 'center', marginLeft: 20 }}>
                        <View style={{ width: '45%', borderWidth: 1, borderColor: 'lightgrey', margin: 5, borderRadius: 12 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: 10, margin: 6, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />

                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Jessica Androso</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Marketing Manager</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 13, width: '100%', alignItems: 'center' }}>
                                <FontAwesomeIcon style={{ marginLeft: 20 }} size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='lightgrey' icon={faStar} />
                            </View>
                        </View>

                        <View style={{ width: '45%', borderWidth: 1, borderColor: 'lightgrey', margin: 5, borderRadius: 12 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', padding: 10, margin: 6, borderBottomWidth: 1, borderBottomColor: 'lightgrey' }}>
                                <View style={{ width: 40, height: 40, borderWidth: 1, padding: 2, borderColor: "#233CBF", borderRadius: 8 }}>
                                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/kaviya.png")} />

                                </View>
                                <View style={{ width: '80%', margin: 8 }}>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Jessica Androso</Text>
                                    <Text style={{ color: "grey", fontSize: 11, fontFamily: 'mainFont' }}>Marketing Manager</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 20, marginTop: 13, width: '100%', alignItems: 'center' }}>
                                <FontAwesomeIcon style={{ marginLeft: 20 }} size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='#233CBF' icon={faStar} />
                                <FontAwesomeIcon size={24} color='lightgrey' icon={faStar} />
                                <FontAwesomeIcon size={24} color='lightgrey' icon={faStar} />
                                <FontAwesomeIcon size={24} color='lightgrey' icon={faStar} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 10,
    },
    header: {
        marginLeft: 15,
        fontSize: 13,
        padding: 5,
        marginTop: 16, color: "#233CBF"
    },
});
export default Performance;