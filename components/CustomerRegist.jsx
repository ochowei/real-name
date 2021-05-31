import React from 'react';
import { Text, View, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';

export default function CustomerRegist() {
  return (
    <View style={tailwind('h-full')}>
      <View style={tailwind('mt-10 pt-20 items-center')}>
        <Text> Please Enter Your Name and Phone Number</Text>

        <TextInput
          style={{
            width: 250,
            height: 44,
            padding: 10,
            marginTop: 20,
            marginBottom: 10,
            backgroundColor: '#e8e8e8',
          }}
          autoFocus
        />
      </View>
    </View>
  );
}
