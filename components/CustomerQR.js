import React from 'react';
import {
  Text, View, TextInput, TouchableOpacity, StyleSheet, Image
} from 'react-native';
import tailwind from 'tailwind-rn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRImage from "../assets/QRSample.png";


export default function CustomerQR() {
  return (
    <View style={tailwind('h-full items-center')}>
      <View style={tailwind('p-2 mt-28 bg-white')}>
       <View style={tailwind("m-0.5")}>
        <Image
          style={{ width: 170, height: 170, margin: 16, padding:16, resizeMode: "cover", ...tailwind('bg-white') }}
          source={QRImage}
        />
        
        </View>  
      </View>
      <View style={tailwind(" mt-4 ")}>
          <Text style={tailwind("text-black text-lg font-semibold")}>
            {" "}
            Personal QR Code
          </Text>
        </View>
        <SaveButton />
    </View>
  );
}



function SaveButton(props) {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "#004B9D",
      marginTop: '50%',
      width: "80%",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "white",
    },
  });
  const { onPress, title = "Save" } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
