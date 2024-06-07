import Rect from 'react';
import { useFonts } from "expo-font";
import { Text, View, TextInput, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';

const Teamangemant = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")  
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <View style={{ backgroundColor: 'white' }}>
            <TouchableOpacity style={{ width: '90%', alignSelf: 'center', borderRadius: 10, padding: 20, borderWidth: 1, borderColor: 'lightgrey', borderBottomWidth: 3, marginBottom: 10, marginTop: 30 }} onPress={() => navigation.navigate("TeamdetailH")}>
                <Text style={{ fontFamily: 'mainFont', fontSize: 15 }}>SCO</Text>
                <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: "grey" }}>Google Search Console</Text>
                <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                    <View style={{ width: '93%' }}>
                        <Progress.Bar progress={0.3} width={200} />
                    </View>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 12, width: '10%', textAlign: 'right', fontWeight: '700' }}>73%</Text>
                </View>
                <View style={{ width: 80, height: 40 }}>
                    <Image style={{ width: "100%", height: "100%" }} source={require("../assets/images/users.png")} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '90%', alignSelf: 'center', borderRadius: 10, padding: 20, borderWidth: 1, borderColor: 'lightgrey', borderBottomWidth: 3, marginBottom: 10 }} onPress={() => navigation.navigate("TeamdetailH")}>
                <Text style={{ fontFamily: 'mainFont', fontSize: 15 }}>Frontend</Text>
                <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: "grey" }}>Responsive Design</Text>
                <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '93%' }}>
                            <Progress.Bar progress={0.3} width={200} />
                        </View>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 12, width: '10%', textAlign: 'right', fontWeight: '700' }}>73%</Text>
                    </View>
                </View>
                <View style={{ width: 80, height: 40 }}>
                    <Image style={{ width: "100%", height: "100%" }} source={require("../assets/images/users.png")} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ width: '90%', alignSelf: 'center', borderRadius: 10, padding: 20, borderWidth: 1, borderColor: 'lightgrey', borderBottomWidth: 3, marginBottom: 10 }} onPress={() => navigation.navigate("TeamdetailH")}>
                <Text style={{ fontFamily: 'mainFont', fontSize: 15 }}>backend</Text>
                <Text style={{ fontFamily: 'mainFont', fontSize: 13, color: "grey" }}>Build an API</Text>
                <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                        <View style={{ width: '93%' }}>
                            <Progress.Bar progress={0.3} width={200} />
                        </View>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 12, width: '10%', textAlign: 'right', fontWeight: '700' }}>73%</Text>
                    </View>
                </View>
                <View style={{ width: 80, height: 40 }}>
                    <Image style={{ width: "100%", height: "100%" }} source={require("../assets/images/users.png")} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Teamangemant;