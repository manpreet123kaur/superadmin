import React, { useState } from "react";
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeftLong, faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';

const Resetpassword = ({ navigation }) => {

    const [currentpassword, setcurrentpassword] = useState("")
    const [currentpass, setcurrentpass] = useState(true)

    const [newpassword, setnewpassword] = useState("")
    const [newpass, setnewpass] = useState(true)

    const [confirmpassword, setconfirmpassword] = useState("")
    const [confirmpass, setconfirmpass] = useState(true)


    const [fontsLoaded] = useFonts({
        mainFont: require("../pages/assests/fonts/Metropolis-Medium.otf")
    });
    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    const resetPassword = async () => {
        const url = 'https://trackingtime-c5jw.onrender.com/api/user/changePassword/65cdf0c95420cdd02915b25f';
        const data = {
            oldPassword: currentpassword,
            newPassword: newpassword,
            confirmPassword: confirmpassword
        };

        try {
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            console.log('Response:', await response.text());

            if (!response.ok) {
                throw new Error('Failed to reset password');
            }

            console.log('Password reset successfully');

            navigation.navigate('Profile');
        } catch (error) {
            console.error('Error:', error.message);
            let errorMessage = 'Failed to reset password. Please try again.';
            if (error.message) {
                errorMessage = error.message;
            }
            Alert.alert('Error', errorMessage);
        }
    };

    return (
        <>
            <View style={{ width: '100%' }}>
                <View style={{ width: '100%', alignSelf: 'center', backgroundColor: '#233CBF', flexDirection: 'row' ,alignItems:'center',paddingTop:30}}>
                    <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{marginLeft:10,width:'3%'}}>
                        <FontAwesomeIcon style={{ width: '10%' }} color='white' size={20} icon={faArrowLeftLong} />
                    </TouchableOpacity>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 20, textAlign: 'center', color: 'white', padding: 20 ,width:'97%'}}>Change Password</Text>
                </View>
                <View style={{ marginTop: 30, marginBottom: 30, width: '95%', alignSelf: 'center', padding: 5}}>
                    <Text style={{ fontFamily: 'mainFont', fontSize: 12, lineHeight: 17, fontFamily: 'mainFont' ,textAlign: 'center'}}>Password must be contains at least 1 letter, 1 number, and symbol. Minimun lenght is 12 characters.</Text>
                </View>
                <Text style={{ marginLeft: 40, color: 'grey', margin: 5, fontFamily: 'mainFont' }}>Current Password</Text>
                <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 14, borderRadius: 12, margin: 12 }}>
                    <FontAwesomeIcon color={'grey'} icon={faEnvelope} />
                    <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont' }} value={currentpassword} onChangeText={val => setcurrentpassword(val)} secureTextEntry={currentpass} placeholder="Current Password" />
                    <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setcurrentpass(!currentpass)}>
                        <FontAwesomeIcon color="grey" icon={faEye} />
                    </TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 40, color: 'grey', margin: 5, fontFamily: 'mainFont' }}>New Password</Text>
                <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 14, borderRadius: 12, margin: 12 }}>
                    <FontAwesomeIcon color={'grey'} icon={faEnvelope} />
                    <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont' }} value={newpassword} onChangeText={val => setnewpassword(val)} secureTextEntry={newpass} placeholder="New Password" />
                    <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setnewpass(!newpass)}>
                        <FontAwesomeIcon color="grey" icon={faEye} />
                    </TouchableOpacity>
                </View>
                <Text style={{ marginLeft: 40, color: 'grey', margin: 5, fontFamily: 'mainFont' }}>Confirm Password</Text>
                <View style={{ flexDirection: 'row', alignItems: "center", borderColor: '#5E73E4', borderWidth: 1, width: '80%', alignSelf: 'center', padding: 14, borderRadius: 12, margin: 12 }}>
                    <FontAwesomeIcon color={'grey'} icon={faEnvelope} />
                    <TextInput style={{ paddingLeft: 8, width: '90%', fontFamily: 'mainFont' }} value={confirmpassword} onChangeText={val => setconfirmpassword(val)} secureTextEntry={confirmpass} placeholder="Confirm Password" />
                    <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={() => setconfirmpass(!confirmpass)}>
                        <FontAwesomeIcon color="grey" icon={faEye} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ backgroundColor: '#233CBF', alignSelf: 'center', width: 200, margin: 20, borderRadius: 8 }} >
                    <Text style={{ color: 'white', fontFamily: 'mainFont', fontSize: 15, padding: 12, alignSelf: 'center', fontFamily: 'mainFont' }} onPress={resetPassword}>Submit New Password</Text>
                </TouchableOpacity>

            </View>
        </>
    )
}

export default Resetpassword;