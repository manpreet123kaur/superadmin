import React from 'react';
import { Button, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';


const Appliedleaves = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "#eaedff", width: '100%', alignSelf: "center" }}>
                <TouchableOpacity style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', padding: 10, backgroundColor: 'white', borderWidth: 1, margin: 8, borderColor: 'lightgrey', borderRadius: 12 }} onPress={() => navigation.navigate("Leaves")}>
                    <View style={{ width: '72%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Manisha</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Sick Leave</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>10/1/22 - 12/1/22</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', padding: 10, backgroundColor: 'white', borderWidth: 1, margin: 8, borderColor: 'lightgrey', borderRadius: 12 }} onPress={() => navigation.navigate("Leaves")}>
                    <View style={{ width: '72%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Manisha</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Sick Leave</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>10/1/22 - 12/1/22</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', padding: 10, backgroundColor: 'white', borderWidth: 1, margin: 8, borderColor: 'lightgrey', borderRadius: 12 }} onPress={() => navigation.navigate("Leaves")}>
                    <View style={{ width: '72%' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Manisha</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont', color: 'grey' }}>Sick Leave</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>10/1/22 - 12/1/22</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Appliedleaves;