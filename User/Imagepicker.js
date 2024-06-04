import React, { useState, useEffect } from 'react';
import { useFonts } from "expo-font";
import { Text, TextInput, TouchableOpacity, View, Image, Button, Modal, faSquareCheck } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faEnvelope, faArrowLeftLong, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import * as ImagePicker from "expo-image-picker";

const Imagepicker = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleButtonClick = () => {
    setIsModalVisible(!isModalVisible);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 2000);
  };
  const [image, setImage] = useState(null);
  const pickImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ width: 100, height: 100, borderWidth: 1, borderRadius: 10 }}>
          {image && <Image source={{ uri: image }} style={{ width: "100%", height: "100%", borderRadius: 10 }} />}
        </View>
        <Text style={{ fontSize: 10, paddingTop: 7 }} onPress={handleButtonClick}>Change Profile Image</Text>
        <Modal animationType="slide" transparent={true} visible={isModalVisible} onRequestClose={() => setIsModalVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'center', width: '38%', alignSelf: 'center' }}>
            <TouchableOpacity onPress={pickImageLibrary} style={{ backgroundColor: '#e9c4ff', padding: 5, borderRadius: 8, marginBottom: 10 }}>
              <Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>Select from gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={pickImageCamera} style={{ backgroundColor: '#e9c4ff', padding: 5, borderRadius: 8 }}>
              <Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>Select from Camera</Text>
            </TouchableOpacity>
          </View>
        </Modal >
      </View >
    </>
  )
}

export default Imagepicker;