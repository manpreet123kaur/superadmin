import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { worklet, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

const Worklet = () => {

    const myWorklet = worklet((value) => {
        console.log('Value:', value);
    });

    const position = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: position.value }],
        };
    });

    const onPressHandler = () => {
        myWorklet(position.value);
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={onPressHandler}>
                <Text>Trigger Worklet</Text>
            </TouchableOpacity>
            <View style={[{ width: 100, height: 100, backgroundColor: 'red' }, animatedStyle]} />
        </View>
    );
};

export default Worklet;
