import React from 'react';
import { useFonts } from "expo-font";
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faUserGroup, faClock, faUserXmark, faExclamation, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { LineChart } from 'react-native-chart-kit';

const Expense = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <ScrollView>
            <View style={{ backgroundColor: 'white' }}>
                <View style={{ backgroundColor: '#e2ffd7', padding: 10, width: '90%', alignSelf: 'center', margin: 10, borderRadius: 8, marginTop: 20 }}>
                    <Text style={{ color: 'grey', fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', padding: 5 }}>Current Balance</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, width: '100%' }}>
                        <Text style={{ fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', width: '80%' }}>$56500</Text>
                        <View style={{ width: 70, height: 32 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/greenbar.png")} />
                        </View>
                    </View>
                    <Text style={{ color: 'grey', fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', color: '#34801A', padding: 5 }}>+19%</Text>
                </View>

                <View style={{ backgroundColor: '#d7e2ff', padding: 10, width: '90%', alignSelf: 'center', margin: 10, borderRadius: 8 }}>
                    <Text style={{ color: 'grey', fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', padding: 5 }}>Total Income</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, width: '100%' }}>
                        <Text style={{ fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', width: '80%' }}>$56500</Text>
                        <View style={{ width: 70, height: 32 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/purplebar.png")} />
                        </View>
                    </View>
                    <Text style={{ color: 'grey', fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', color: '#34801A', padding: 5 }}>+19%</Text>
                </View>

                <View style={{ backgroundColor: '#ffe4fc', padding: 10, width: '90%', alignSelf: 'center', margin: 10, borderRadius: 8 }}>
                    <Text style={{ color: 'grey', fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', padding: 5 }}>Current Balance</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 5, width: '100%' }}>
                        <Text style={{ fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', width: '80%' }}>$56500</Text>
                        <View style={{ width: 70, height: 32 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/pinkbar.png")} />
                        </View>
                    </View>
                    <Text style={{ color: 'grey', fontWeight: 700, fontSize: 18, fontFamily: 'mainFont', color: '#34801A', padding: 5 }}>+19%</Text>
                </View>
                <View style={{ width: "90%", alignSelf: 'center' }}>
                    <View style={{ width: '99%', alignSelf: 'center', borderTopWidth: 1, borderColor: 'lightgrey', backgroundColor: 'white', borderRadius: 12, margin: 10 }}>
                        <Text style={{ marginLeft: 5, fontSize: 15, padding: 5, marginTop: 16, fontFamily: 'mainFont', paddingBottom: 15, fontWeight: 700 }}>Latest Transaction</Text>
                        <LineChart data={{ labels: ['J', 'F', 'M', 'A', 'M', 'J', 'j', 'A', 'S', 'O', 'N', 'D'], datasets: [{ data: [4, 88, 90, 100, 10, 27, 50, 60, 10, 120, 30, 40], strokeWidth: 2, },], }} width={Dimensions.get('window').width = 340} height={230} chartConfig={{ backgroundColor: '#1cc910', backgroundGradientFrom: '#ffe4fc', backgroundGradientTo: '#efefef', decimalPlaces: 2, color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, style: { borderRadius: 16, }, }} style={{ marginVertical: 0, borderRadius: 16, }} />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Expense;