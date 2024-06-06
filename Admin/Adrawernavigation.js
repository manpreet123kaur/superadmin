import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, TouchableOpacity, Modal, TextInput } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseUser, faCalendarDays, faUsersBetweenLines, faClipboardUser, faPeopleGroup, faChartLine, faCalendarCheck, faCoins, faAddressCard, faBraille, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";

import HomeAdmin from './HomeAdmin';
import Users from './Users';
import Appliedleaves from './Appliedleaves';
import Holidays from './Holidays';
import AAtendence from './AAtendence';
import Expense from './Expense';
import Teammanage from './Teammanage';
import Project from './Project';
import Performance from './Performance'
import Adminsprofile from './Adminsprofile';

const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {
    const [changepassword, setchangepassword] = useState(false);
    const { navigation } = props;
    const handlechanepassword = () => {
        setchangepassword(!changepassword);
    };

    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")   
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <>
            <DrawerContentScrollView {...props}>
                <View style={{ height: 165, justifyContent: "center", alignItems: "center", alignContent: "center", borderBottomColor: 'lightgrey', borderBottomWidth: 2, borderRadius: 10 }}>
                    <View style={{ width: 100, height: 100, backgroundColor: '#233CBF', borderRadius: 50 }}>
                        <Image style={{ width: '100%', height: '100%' }} source={require("../assets/images/logo.png")} />
                    </View>
                    <Text style={{ fontFamily: "mainFont", marginTop: 15, fontSize: 18, }}>Administrator</Text>
                    <Text style={{ fontFamily: "mainFont", marginTop: 0, fontSize: 14, }}>Jessica12@gmail.com</Text>
                </View>
                <DrawerItemList {...props} />
                <TouchableOpacity style={{ padding: 10, backgroundColor: '#233CBF', flexDirection: 'row', alignItems: 'center' }} onPress={handlechanepassword}>
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
                <Drawer.Screen name="Home" options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faHouseUser} size={20} color={color} />), }} component={HomeAdmin} />
                <Drawer.Screen name="Users" options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faPeopleGroup} size={20} color={color} />), }} component={Users} />
                <Drawer.Screen name="Leave Status" options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faCalendarDays} size={20} color={color} />), }} component={Appliedleaves} />
                <Drawer.Screen name="Holiday Schedule" component={Holidays} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faCalendarCheck} size={20} color={color} />), }} />
                <Drawer.Screen name="Attendence" component={AAtendence} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faClipboardUser} size={20} color={color} />), }} />
                <Drawer.Screen name="Expense" component={Expense} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faCoins} size={20} color={color} />), }} />
                <Drawer.Screen name="Team Management" component={Teammanage} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faUsersBetweenLines} size={20} color={color} />), }} />
                <Drawer.Screen name="Project" component={Project} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faBraille} size={20} color={color} />), }} />
                <Drawer.Screen name="Performance" component={Performance} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faChartLine} size={20} color={color} />), }} />
                <Drawer.Screen name="View Profile" component={Adminsprofile} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faAddressCard} size={20} color={color} />), }} />
            </Drawer.Navigator>
        </>
    );
}