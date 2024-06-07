import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, TouchableOpacity ,Modal} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseUser, faShopLock, faPenToSquare, faIdBadge, faUsersGear, faPowerOff, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";

import Home from './Home';
import Admindetail from './Admindetail';
import Subscription from './Subscription';
import Contentupdate from './Contentupdate';
import ViewProfile from './ViewProfile';

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
                <View style={{ height: 170, justifyContent: "center", alignItems: "center", alignContent: "center", borderBottomColor: 'lightgrey', borderBottomWidth: 2, borderRadius: 10 }}>
                    <View style={{ width: 90, height: 90, backgroundColor: "#233CBF", borderRadius: 100, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                        <View style={{ width: 100, height: 100 }}>
                            <Image style={{ width: '100%', height: '100%' }} source={require("../assets/images/logo.png")} />
                        </View>
                    </View>
                    <Text style={{ fontFamily: "mainFont", marginTop: 15, fontSize: 18, }}>Super Admin</Text>
                    <Text style={{ fontFamily: "mainFont", fontSize: 13 }}>Super Admin@2gmail.com</Text>
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
                <Drawer.Screen name="Home" component={Home} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faHouseUser} size={20} color={color} />), }} />
                <Drawer.Screen name="Admins" component={Admindetail} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faUsersGear} size={20} color={color} />), }} />
                <Drawer.Screen name="Subscription" component={Subscription} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faShopLock} size={20} color={color} />), }} />
                <Drawer.Screen name="View Profile" component={ViewProfile} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faPenToSquare} size={20} color={color} />), }} />
                <Drawer.Screen name="About Us" component={Contentupdate} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faAddressBook} size={20} color={color} />), }} />
            </Drawer.Navigator>
        </>
    );
}
