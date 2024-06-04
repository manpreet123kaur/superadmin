import React from 'react';
import { useFonts } from "expo-font";
import { Text, TouchableOpacity, View, Image, TextInput ,ScrollView} from 'react-native';

const Leaveshr = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <View style={{backgroundColor:'white'}}>
            
                    <View style={{ width: '96%', alignSelf: 'center', padding: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', padding: 10, backgroundColor: 'white', borderWidth: 1, margin: 8, borderColor: 'lightgrey', borderRadius: 12 }} onPress={() => navigation.navigate("Appliedleaves")}>
                            <View style={{ width: '72%' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Manisha</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Sick Leave</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>10/1/22 - 12/1/22</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', padding: 10, backgroundColor: 'white', borderWidth: 1, margin: 8, borderColor: 'lightgrey', borderRadius: 12 }} onPress={() => navigation.navigate("Appliedleaves")}>
                            <View style={{ width: '72%' }}>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>jashan</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Sick Leave</Text>
                                <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>11/1/22 - 12/1/22</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Leaveshr;