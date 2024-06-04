import React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseUser, faPeopleGroup, faCalendarCheck, faClipboardUser, faCoins, faPowerOff, faAddressBook, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { useFonts } from "expo-font";

import Leaves from './Leaves';
import Holidayschedule from './Holidayschedule';
import Attendence from './Attendence';

const Drawer = createDrawerNavigator();
const CustomDrawer = (props) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ height: 170, justifyContent: "center", alignItems: "center", alignContent: "center", borderBottomColor: 'lightgrey', borderBottomWidth: 2, borderRadius: 10 }}>
                <View style={{ width: 100, height: 100, backgroundColor: '#233CBF', borderRadius: 50 }}>
                    <Image style={{ width: '100%', height: '100%' }} source={require("../pages/assests/images/logo.png")} />
                </View>
                <Text style={{ fontFamily: "mainFont", marginTop: 15, fontSize: 18, }}>Administrator</Text>
                <Text style={{ fontFamily: "mainFont", marginTop: 0, fontSize: 14, }}>Jessica12@gmail.com</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

export default function App() {
    return (
        <>
            <Drawer.Navigator screenOptions={{ headerShown: true, activeTintColor: 'pink', drawerActiveBackgroundColor: "#233CBF", drawerActiveTintColor: "white" }} drawerContent={(props) => (<CustomDrawer {...props} />)}>
                <Drawer.Screen name="Performance" component={Performanceforadmin} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faChartLine} size={20} color={color} />), }} />
            </Drawer.Navigator>
        </>
    );
}





