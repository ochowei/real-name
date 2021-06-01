import React from 'react';
import {
  Text, View, TextInput, TouchableOpacity, StyleSheet,
} from 'react-native';
import tailwind from 'tailwind-rn';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CustomerQR() {
  return (
    <View style={tailwind('h-full')}>
     <Text>QR</Text>
    </View>
  );
}



