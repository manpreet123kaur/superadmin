import React, { useState, useEffect } from 'react';
import { Image, View, Text ,TouchableOpacity,Modal} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseUser, faAddressCard, faCalendarDays, faChartColumn, faPersonThroughWindow ,faPowerOff} from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";

import Employeehome from './Employeehome';
import Profile from './Profile';
import AttendenceU from './AttendenceU';
import PerformanceU from './PerformanceU';
import Addleave from './Addleave';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    const [changepassword, setchangepassword] = useState(false);
    const { navigation } = props;
    const handlechanepassword = () => {
        setchangepassword(!changepassword);
    };
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={{ height: 170, justifyContent: "center", alignItems: "center", alignContent: "center", borderBottomColor: 'lightgrey', borderBottomWidth: 2, borderRadius: 10 }}>
                    <View style={{ width: 90, height: 90, backgroundColor: "#233CBF", borderRadius: 100, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <View style={{ width: 100, height: 100 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/logo.png")} />
                        </View>
                    </View>
                    <Text style={{ fontFamily: "mainFont", marginTop: 15, fontSize: 18, }}>Jaspreet Kaur</Text>
                    <Text style={{ fontFamily: "mainFont", fontSize: 13 }}>jaspreet12@gmail.com</Text>
                </View>
                <DrawerItemList {...props} />
                <TouchableOpacity style={{ marginTop: 251, padding: 15, backgroundColor: '#233CBF', flexDirection: 'row', alignItems: 'center' }} onPress={handlechanepassword}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 700, fontFamily: "mainFont", padding: 7, width: '80%' }}>Logout</Text>
                    <FontAwesomeIcon color='white' size={20} style={{ marginLeft: 20 }} icon={faPowerOff} />
                </TouchableOpacity>
            </DrawerContentScrollView>
            <Modal animationType="slide" transparent={true} visible={changepassword} onRequestClose={() => setchangepassword(false)}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', width: '60%', alignSelf: 'center', borderRadius: 10, padding: 0 }}>
                        <View style={{ borderTopRightRadius: 10, padding: 15, borderTopLeftRadius: 10 }}>
                            <Text style={{ fontSize: 17, width: '93%', fontFamily: 'mainFont', textAlign: 'center', fontWeight: 'bold' }}>Log out</Text>
                            <Text style={{ fontSize: 13, width: '93%', fontFamily: 'mainFont', textAlign: 'center' }}>You will be returned to the login screen.</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: "center", marginBottom: 10 }}>
                            <TouchableOpacity style={{ backgroundColor: "#233CBF", width: '30%', padding: 8, borderRadius: 6, margin: 5 }} onPress={() => navigation.navigate("Login")}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Log out</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'grey', width: '30%', padding: 8, borderRadius: 6, margin: 5 }} onPress={() => { handlechanepassword(false) }}>
                                <Text style={{ fontFamily: 'mainFont', fontSize: 14, color: 'white', textAlign: 'center' }}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

export default function App() {
    return (
        <>
            <Drawer.Navigator screenOptions={{ headerShown: true, activeTintColor: 'pink', drawerActiveBackgroundColor: "#233CBF", drawerActiveTintColor: "white" }} drawerContent={(props) => (<CustomDrawer {...props} />)}>
                <Drawer.Screen name="Home" component={Employeehome} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faHouseUser} size={20} color={color} />), }} />
                <Drawer.Screen name="Profile" component={Profile} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faAddressCard} size={20} color={color} />), }} />
                <Drawer.Screen name='Attendence' component={AttendenceU} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faCalendarDays} size={20} color={color} />), }} />
                <Drawer.Screen name="Performance" component={PerformanceU} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faChartColumn} size={20} color={color} />), }} />
                <Drawer.Screen name="Apply Leave" component={Addleave} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faPersonThroughWindow} size={20} color={color} />), }} />
            </Drawer.Navigator>
        </>
    );
}