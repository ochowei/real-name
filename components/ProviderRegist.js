import React from 'react';
import { View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function ProviderRegist() {
  return (
    <View style={tailwind('h-full')}>
      <View style={tailwind('mt-10 pt-20 items-center')}>
        Please Enter Provider Name

      </View>
    </View>
  );
}
