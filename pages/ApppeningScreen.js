import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, View, ScrollView, Image } from 'react-native';

const ApppeningScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        mainFont: require("../assets/fonts/Metropolis-Medium.otf")
    });

    const [navigateToNextScreen, setNavigateToNextScreen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setNavigateToNextScreen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (navigateToNextScreen) {
            console.log("Calling navigation.navigate()");
            navigation.navigate('Chooseplan');
        }
    }, [navigateToNextScreen, navigation]);

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#233CBF', height: '100%' }}>
            <View style={{ width: 200, height: 200, justifyContent: 'space-between' }}>
                <Image style={{ width: '100%', height: '100%' }} source={require("../assets/images/logo.png")} />
            </View>
        </ScrollView>
    );
};

export default ApppeningScreen;
