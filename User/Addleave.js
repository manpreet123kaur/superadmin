import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Platform, DatePicker, Text, TextInput, TouchableOpacity, View, Image, Switch, StyleSheet, Button, SafeAreaView ,ScrollView} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Addleave = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisible(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisible(false);
    };
    const handleConfirm = (date) => {
        setSelectedDate(date);
        hideDatePicker();
    };
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };


    const [selectedDatetwo, setSelectedDatetwo] = useState(new Date());
    const [datePickerVisibletwo, setDatePickerVisibletwo] = useState(false);
    
    const showDatePickertwo = () => {
        setDatePickerVisibletwo(true);
    };
    
    const hideDatePickertwo = () => {
        setDatePickerVisibletwo(false);
    };
    
    const handleConfirmtwo = (date) => {
        setSelectedDatetwo(date);
        hideDatePickertwo(); 
    };

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '2', value: 'Gujrat' },
        { key: '3', value: 'punjab' },
        { key: '4', value: 'Goa' },
    ];

    const [dropdown, setdropdown] = React.useState("");

    let pink = [{
        value: "red",
    }, {
        value: "pink",
    }, {
        value: "pear"

    }]

    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };

    const [isEnabledtwo, setIsEnabledtwo] = useState(false);

    const toggleSwitchtwo = () => {
        setIsEnabledtwo(previousState => !previousState);
    };
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <>

            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={{ width: '90%', alignSelf: 'center', padding: 15, flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                    <View style={{ width: '75%' }}>
                        <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', backgroundColor: 'pink', width: 60, textAlign: 'center', fontWeight: "bold", borderRadius: 4, padding: 6 }} onPress={showDatePicker}>From</Text>
                        <View>
                            <Text style={{ fontSize: 15, padding: 5, color: 'grey', fontFamily: 'mainFont' }}> {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}</Text>
                            <DateTimePickerModal date={selectedDate} isVisible={datePickerVisible} mode="date" onConfirm={handleConfirm} onCancel={hideDatePicker} />
                        </View>
                    </View>
                    <View style={{ width: '100%', paddingTop: 0, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>All day:</Text>
                        <View>
                            <Switch trackColor={{ false: 'lightgrey', true: 'pink' }} thumbColor={isEnabled ? 'green' : 'red'} ios_backgroundColor="red" onValueChange={toggleSwitch} value={isEnabled} />
                        </View>
                    </View>
                </View>
                <View style={{ width: '90%', alignSelf: 'center', padding: 15, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: '75%' }}>
                        <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', backgroundColor: '#cce1ff', width: 60, textAlign: 'center', fontWeight: "bold", borderRadius: 4, padding: 6 }} onPress={showDatePickertwo}>To</Text>
                        <View>
                            <Text style={{ fontSize: 15, padding: 5, color: 'grey', fontFamily: 'mainFont' }}> {selectedDatetwo ? selectedDatetwo.toLocaleDateString() : 'No date selected'}</Text>
                            <DateTimePickerModal date={selectedDatetwo} isVisible={datePickerVisibletwo} mode="date" onConfirm={handleConfirmtwo} onCancel={hideDatePickertwo} />
                        </View>
                    </View>
                    <View style={{ width: '100%', paddingTop: 0, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>All day:</Text>
                        <View>
                            <Switch trackColor={{ false: 'lightgrey', true: '#cce1ff' }} thumbColor={isEnabledtwo ? 'green' : 'red'} ios_backgroundColor="red" onValueChange={toggleSwitchtwo} value={isEnabledtwo} />
                        </View>
                    </View>
                </View>

                <View style={{ width: '95%', padding: 20, alignSelf: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 14, fontFamily: 'mainFont', paddingTop: 5, paddingLeft: 4 }}>Total</Text>
                    <TextInput style={{ fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }} placeholder='5 days' />
                </View>

                <View style={{ width: '95%', padding: 20, alignSelf: 'center' }}>
                    <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', padding: 5 }}>comment</Text>
                    <Text style={{ color: 'black', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }}>My sister,s wedding!</Text>
                </View>

                <View style={{ width: '95%', padding: 20, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <View style={{ width: '60%' }}>
                            <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }}>Leave Type</Text>
                            <TextInput style={{ color: 'black', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }} placeholder="Annual Leave(Vacation)" />
                        </View>
                    </View>
                </View>

                <View style={{ width: '90%', padding: 15, alignSelf: 'center' }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <View style={{ width: '60%' }}>
                            <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }}>Notify to : </Text>
                            <TextInput style={{ color: 'black', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }} placeholder="Annual Leave(Vacation)" />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center', paddingTop: 40 }}>
                    <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '35%', padding: 12, borderRadius: 6, marginRight: 10 }} >
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Apply</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: 'white', width: '35%', padding: 11, borderRadius: 6, marginRight: 10, borderWidth: 1, borderColor: "#233CBF" }}>
                        <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: '#233CBF', textAlign: 'center' }} onPress={() => navigation.navigate("Drawernavigationforemployee")}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default Addleave;