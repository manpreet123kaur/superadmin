import React from 'react';
import { useFonts } from "expo-font";
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouseUser, faUsersBetweenLines, faEllipsisVertical, faLaptopFile, faChartColumn, faListCheck, faLayerGroup, faToggleOff } from '@fortawesome/free-solid-svg-icons';

import Homehr from './Homehr';
import UsersH from './UsersH';
import Workmanagment from './Workmanagment';
import Performancecalculator from './Performancecalculator';
import Recruitment from './Recruitment';
import Reports from './Reports';
import Leaveshr from './Leaveshr';

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
                <View style={{ width: 90, height: 90, backgroundColor: "#233CBF", borderRadius: 100, justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "#fff", fontFamily: "mainFont", fontSize: 30 }}>HR</Text>
                </View>
                <Text style={{ fontFamily: "mainFont", marginTop: 15, fontSize: 18, }}>Jessica Jones</Text>
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
                <Drawer.Screen name="HR" component={Homehr} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faHouseUser} size={20} color={color} />), }} />
                <Drawer.Screen name="Employees Detail" component={UsersH} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faUsersBetweenLines} size={20} color={color} />), }} />
                <Drawer.Screen name="Work Management" component={Workmanagment} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faLaptopFile} size={20} color={color} />), }} />
                <Drawer.Screen name="Performance Calculator" component={Performancecalculator} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faChartColumn} size={20} color={color} />), }} />
                <Drawer.Screen name="Recruitment" component={Recruitment} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faListCheck} size={20} color={color} />), }} />
                <Drawer.Screen name="Reports" component={Reports} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faLayerGroup} size={20} color={color} />), }} />
                <Drawer.Screen name="Leave" component={Leaveshr} options={{ drawerIcon: ({ color }) => (<FontAwesomeIcon icon={faToggleOff} size={20} color={color} />), }} />
            </Drawer.Navigator>
        </>
    );
}