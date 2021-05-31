import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';

export default function CustomerRegist() {
  return (
    <View style={tailwind('h-full')}>
      <View style={tailwind('mt-10 pt-20 items-center')}>
        <Text style={tailwind('text-base')}> Please Enter Your Name and Phone Number</Text>

        <TextInput
          style={{
            width: 328,
            height: 44,
            padding: 10,
            marginTop: 20,
            marginBottom: 10,
            backgroundColor: 'white',
          }}
          placeholder="Name"
          autoFocus
        />
        <View style={{ flexDirection: "row", width: 328}}>
          <TextInput
            style={{
              width: 236,
              height: 44,
              padding: 10,
              marginBottom: 10,
              backgroundColor: 'white',
            }}
            placeholder="Phone Number"

          />
          <QRButton ></QRButton>

        </View>
      </View>
    </View>
  );
}


function QRButton(props) {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 12,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#004B9D',
      width: 88,
      height: 44
    },
    text: {
      fontSize: 8,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  const { onPress, title = 'QR Code' } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

