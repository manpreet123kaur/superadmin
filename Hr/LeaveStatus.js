import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Platform, DatePicker, Text, TextInput, TouchableOpacity, View, Image, Switch, StyleSheet, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronRight, faMagnifyingGlass, faLock } from '@fortawesome/free-solid-svg-icons';
import { SelectList } from 'react-native-dropdown-select-list'

const LeaveStatus = ({ navigation }) => {
    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '2', value: 'Gujrat' },
        { key: '3', value: 'punjab' },
        { key: '4', value: 'Goa' },
    ];

    const [dropdown, setdropdown] = React.useState("");

    const apple = [
        { value: 'john' },
        { value: 'Don' },
        { value: 'smith' },
    ];

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    const [chosenDate, setChosenDate] = useState(new Date());
    const [isEnabled, setIsEnabled] = useState(false);
    const showDatePicker = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: chosenDate,
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                const selectedDate = new Date(year, month, day);
                setChosenDate(selectedDate);
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    };
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
    };
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <View>
                <View style={{ flexDirection: 'row', alignItems: "center", width: "100%", marginTop: 50 }}>
                    <TouchableOpacity style={{ width: '33%' }} onPress={() => navigation.navigate("Homehr")}>
                        <Text style={{ color: '#233CBF', fontSize: 16, fontFamily: 'mainFont', textAlign: 'center' }}>Cancel</Text>
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 16, fontFamily: 'mainFont', width: '40%', textAlign: 'center', fontWeight: 700 }}>Add Leave</Text>
                    <TouchableOpacity style={{ width: '33%' }} onPress={() => navigation.navigate("Homehr")}>
                        <Text style={{ color: '#233CBF', fontSize: 16, fontFamily: 'mainFont', textAlign: 'center' }}>Done</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", width: '100%', marginTop: 20 }}>
                    <View style={{ width: '60%', paddingLeft: 30, paddingTop: 25 }}>
                        <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont' }} onPress={showDatePicker}>From</Text>
                        <View style={styles.containerone}>
                            <Text style={{ color: '#233CBF', fontSize: 14, fontFamily: 'mainFont', width: 100, padding: 2, textAlign: 'center' }}>{chosenDate.toLocaleDateString()}</Text>
                        </View>
                    </View>
                    <View style={{ width: '40%', paddingTop: 25, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>All day:</Text>
                        <View style={styles.container}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#233CBF' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: "center", width: '100%', marginTop: 0 }}>
                    <View style={{ width: '60%', paddingLeft: 30, paddingTop: 25 }}>
                        <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont' }} onPress={showDatePicker}>To</Text>
                        <View style={styles.containerone}>
                            <Text style={{ color: '#233CBF', fontSize: 14, fontFamily: 'mainFont', width: 100, padding: 2, textAlign: 'center' }}>{chosenDate.toLocaleDateString()}</Text>
                        </View>
                    </View>
                    <View style={{ width: '40%', paddingTop: 25, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, fontFamily: 'mainFont' }}>All day:</Text>
                        <View style={styles.container}>
                            <Switch
                                trackColor={{ false: '#767577', true: '#233CBF' }}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', paddingTop: 25, paddingLeft: 25, marginBottom: 15 }}>
                    <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', padding: 5 }}>Total</Text>
                    <Text style={{ color: 'black', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }}>5 days</Text>
                </View>

                <View style={{ width: '100%', paddingLeft: 25, paddingTop: 12, marginBottom: 10 }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <View style={{ width: '60%' }}>
                            <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', padding: 5 }}>Leave Type</Text>
                            <Text style={{ color: 'black', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }}>Annual Leave(Vacation)</Text>
                        </View>
                        <View style={{ paddingRight: 10, width: '40%', position: 'relative' }}>
                            <View style={{ position: 'absolute', top: '0%', alignSelf: 'flex-end' }}>
                                <SelectList
                                    setSelected={setSelected}
                                    fontFamily='mainFont'
                                    data={data}
                                    arrowicon={<FontAwesomeIcon size={12} color='black' icon={faChevronRight} />}
                                    searchicon={<FontAwesomeIcon size={12} color='black' icon={faMagnifyingGlass} />}
                                    search={false}
                                    boxStyles={{ borderRadius: 0, borderWidth: 0, borderColor: 'transparent' }}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ width: '100%', paddingTop: 25, paddingLeft: 25, marginBottom: 10 }}>
                    <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', padding: 5 }}>comment</Text>
                    <Text style={{ color: 'black', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }}>My sister,s wedding!</Text>
                </View>

                <View style={{ width: '100%', paddingLeft: 25, paddingTop: 25 }}>
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
                        <View style={{ width: '60%' }}>
                            <Text style={{ color: 'grey', fontSize: 14, fontFamily: 'mainFont', padding: 5 }}>Notify Managers</Text>
                            <Text style={{ color: 'black', fontSize: 14, fontFamily: 'mainFont', paddingLeft: 5 }}>Annual Leave(Vacation)</Text>
                        </View>
                        <View style={{ paddingRight: 10, width: '40%' }}>
                            <View style={{ position: 'absolute', top: '0%', alignSelf: 'flex-end' }}>
                                <SelectList
                                    setSelected={setdropdown}
                                    fontFamily='mainFont'
                                    data={apple}
                                    arrowicon={<FontAwesomeIcon size={12} color='black' icon={faChevronRight} />}
                                    searchicon={<FontAwesomeIcon size={12} color='black' icon={faMagnifyingGlass} />}
                                    search={false}
                                    boxStyles={{ borderRadius: 0, borderWidth: 0, borderColor: 'transparent' }} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', width: "70%", alignSelf: "flex-end", padding: 10, marginTop: 40, justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ width: '35%', margin: 10, backgroundColor: '#34801A', borderRadius: 5 }}>
                        <Text style={{ color: 'white', padding: 8, textAlign: 'center', fontFamily: 'mainFont' }}>Approve</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '35%', margin: 10, backgroundColor: '#E01414', borderRadius: 5 }}>
                        <Text style={{ color: 'white', padding: 8, textAlign: 'center', fontFamily: 'mainFont' }}>Reject</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ width: '100%', alignSelf: 'flex-end' }}>
                    <Text style={{ color: 'grey', padding: 8, textAlign: 'right', fontFamily: 'mainFont' }}>Reason for rejection..?</Text>
                </TouchableOpacity>
    
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerone: {
        height: 50, width: 100, textAlign: "justify",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0,
        paddingLeft: 0
    }, container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0,
        paddingLeft: 0
    }
});

export default LeaveStatus;