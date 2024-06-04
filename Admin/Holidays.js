import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faCalendarPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '@react-native-community/datetimepicker';

const Holidays = ({ navigation }) => {
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
        </>
    )
}

export default Holidays;