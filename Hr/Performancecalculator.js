import React from 'react';
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faEnvelope, faLock, faArrowLeft, faEye, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Performancecalculator = ({ navigation }) => {

    const data = [
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
        { email: 'abc@gmail.com', backgroundColor: 'white' },
        { email: 'abc@gmail.com', backgroundColor: '#e1e6f7' },
    ];

    const renderRows = () => {
        return data.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', width: '100%', backgroundColor: item.backgroundColor, padding: 4 }}>
                <View style={{ width: '30%' }}>
                    <Text style={{ fontFamily: 'mainFont', padding: 10, fontSize: 15 }}>Jenis</Text>
                </View>
                <View style={{ width: '53%' }}>
                    <Text style={{ fontFamily: 'mainFont', textAlign: 'center', padding: 10, fontSize: 15, width: '100%' }}>{item.email}</Text>
                </View>
                <TouchableOpacity style={{ width: '17%', alignItems: 'flex-end' }} onPress={() => navigation.navigate("PerformanceH")}>
                    <FontAwesomeIcon size={18} style={{ marginTop: 10 }} icon={faEllipsis} />
                </TouchableOpacity>
            </View>
        ));
    };
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={{ height: '100%', backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#e1e6f7', padding: 6, borderTopWidth: 1 }}>
                <View style={{ width: '30%' }}>
                    <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, fontWeight: 700 }}>Employee</Text>
                </View>
                <View style={{ width: '53%' }}>
                    <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'center', fontWeight: 700 }}>Email Address</Text>
                </View>
                <View style={{ width: '20%' }}>
                    <Text style={{ fontFamily: 'mainFont', padding: 6, borderRadius: 6, textAlign: 'center', fontWeight: 700 }}>Detail</Text>
                </View>
            </View>

            <ScrollView style={{ borderWidth: 1, borderColor: 'black' }}>
                <View style={{ width: '98%', alignSelf: 'center', padding: 5 }}>
                    {renderRows()}
                </View>
            </ScrollView>

        </View>
    );
};

export default Performancecalculator;