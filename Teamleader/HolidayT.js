import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, TouchableOpacity, ScrollView, Image, Modal, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faPlus, faTrashCan, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const HolidayT = ({ navigation }) => {
    const [date, setDate] = useState(new Date());
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
    };

    const [calendar, setCalendar] = useState(false);

    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    useEffect(() => {
        let timer;
        if (calendar) {
            timer = setTimeout(() => {
                setCalendar(false);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [calendar]);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
    const handleButtonClick = () => {
        setIsModalVisible(!isModalVisible);
    };

    const [isModalVisibletwo, setIsModalVisibletwo] = useState(false);
    const handleButtonClicktwo = () => {
        setIsModalVisibletwo(!isModalVisibletwo);
    };
    return (
        <>
            <ScrollView>
                <View style={{ height: '100%', backgroundColor: 'white' }}>
                    <View style={{ width: 373, height: 300, alignSelf: 'center' }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/holidaypichture.jpg")} />
                    </View>
                    <View style={{ backgroundColor: 'white', alignSelf: 'center', width: '92%', borderRadius: 20, padding: 20, marginTop: -20, borderWidth: 1, borderColor: '#1e49ca', borderBottomWidth: 4 }}>
                        <View>
                            <Text style={{ color: 'grey', fontWeight: 700, fontSize: 26 }}>Hello</Text>
                            <Text style={{ color: 'grey', fontWeight: 700, fontSize: 18 }}>What's Up Today?</Text>
                        </View>
                        <View style={{ width: '100%', margin: 15 }}>
                            <TouchableOpacity style={{ width: '47%', marginRight: 10, backgroundColor: '#f098de', padding: 30, borderRadius: 8 }} onPress={() => { setCalendar(true) }}>
                                <FontAwesomeIcon size={30} color='white' style={{ alignSelf: 'center' }} icon={faCalendar} />
                                <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'mainFont', paddingTop: 5 }}>Calendar</Text>
                            </TouchableOpacity>
                        </View>
                        {/* {
                            calendar && (
                                <DatePicker
                                    style={{ width: 200 }}
                                    value={date}
                                    mode="date"
                                    display="default"
                                    onChange={onChange}
                                />
                            )
                        } */}
                    </View>

                    <View style={{ alignSelf: "flex-end", padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: 'grey', padding: 6, borderRadius: 8, margin: 8 }} onPress={handleButtonClicktwo}>
                            <FontAwesomeIcon size={20} color='white' icon={faPlus} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'grey', padding: 9, borderRadius: 8 }} onPress={handleButtonClick}>
                            <FontAwesomeIcon size={15} color='white' icon={faTrashCan} />
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#5DEAFA', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, color: 'white' }}>JAN</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>16</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>


                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#C85DFA', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, color: 'white' }}>JAN</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>26</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Republic Day</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>trusday</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#FAEE5D', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>MAR</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>08</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Holi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Wednesday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#FA5D5D', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>MAR</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>22</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Ugadi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Wednesday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#F39898', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>MAR</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>30</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Rama Navami</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Tuesday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#F39898', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>MAR</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>30</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Rama Navami</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Tuesday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#C4F398', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>APR</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>07</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Good Friday</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Friday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#98B4F3', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>JUN</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>29</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#F398AF', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>AUG</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>15</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#8C7D81', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>SEP</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>29</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#CBB4BA', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>SEP</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>19</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View><View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#5DEAFA', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>OCT</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>28</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#F05DFA', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>OCT</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>02</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#5DFA8F', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>NOV</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>24</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#FAB55D', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>DEC</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>13</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Sankranthi</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, paddingLeft: 20 }}>
                                <View style={{ backgroundColor: '#5DCAFA', width: '18%', borderWidth: 1, borderColor: 'lightgrey', borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Text style={{ padding: 4, textAlign: 'center' }}>DEC</Text>
                                    <Text style={{ backgroundColor: 'white', fontSize: 20, textAlign: 'center' }}>25</Text>
                                </View>
                                <View style={{ width: 'auto', margin: 8 }}>
                                    <Text style={{ fontSize: 14, padding: 1, fontFamily: 'mainFont' }}>Christmas</Text>
                                    <Text style={{ fontSize: 14, color: 'grey', padding: 1, fontFamily: 'mainFont' }}>Monday</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, alignItems: 'center', elevation: 5, width: '60%' }}>
                        <FontAwesomeIcon color='red' size={30} icon={faTriangleExclamation} />
                        <Text style={{ color: 'grey', fontWeight: 700, fontSize: 22 }}>Are you sure?</Text>
                        <Text style={{ fontSize: 10, padding: 8, fontFamily: 'mainFont' }}>This action will delete holiday,
                            You won’t be able to revert this!</Text>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity style={{ backgroundColor: "red", width: '45%', padding: 5, borderRadius: 6, marginRight: 10 }} >
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Yes, delete it</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'white', width: '45%', padding: 5, borderRadius: 6, marginRight: 10, borderWidth: 1, borderColor: "red" }} onPress={() => { handleButtonClick(false) }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'red', textAlign: 'center' }} >Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal animationType="slide" transparent={true} visible={isModalVisibletwo} onRequestClose={() => setIsModalVisibletwo(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', width: '80%', alignSelf: 'center', borderRadius: 10, padding: 0 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#233CBF', borderTopRightRadius: 10, padding: 15, borderTopLeftRadius: 10 }}>
                            <Text style={{ color: 'white', fontSize: 16, width: '93%', fontFamily: 'mainFont' }}>Add Holiday</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Date :   </Text>
                            <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Month :   </Text>
                            <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Year :   </Text>
                            <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4 }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                            <Text style={{ fontFamily: 'mainFont', width: '25%', fontSize: 13 }}>Festival :   </Text>
                            <TextInput style={{ borderWidth: 1, width: '75%', borderColor: 'darkgrey', borderRadius: 4 }} />
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: "flex-end", marginBottom: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '30%', padding: 5, borderRadius: 6, marginRight: 10 }} >
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: 'white', textAlign: 'center' }}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#233CBF', width: '30%', padding: 5, borderRadius: 6, marginRight: 10 }} onPress={() => { handleButtonClicktwo(false) }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 12, color: '#233CBF', textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default HolidayT;