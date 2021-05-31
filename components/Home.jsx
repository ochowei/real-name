import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
import tailwind from 'tailwind-rn';
import logo from '../assets/logo.png';

export default function Home({ navigation }) {
  return (
    <View style={{ backgroundColor: '#004B9D', ...tailwind('h-full') }}>
      <View style={tailwind('mt-10 pt-20 items-center')}>
        <Image
          style={{ width: 238, height: 151, resizeMode: 'center' }}
          source={logo}
        />
        <View style={tailwind('mt-10 pt-20')} />

        <ProviderButton onPress={() => { navigation.navigate('ProviderRegist'); }} />
        <ConsumerButton onPress={() => { navigation.navigate('CustomerRegist'); }} />

      </View>
    </View>
  );
}

function ProviderButton(props) {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'white',
      width: '80%',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
  });
  const { onPress, title = 'I am Provider' } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

function ConsumerButton(props) {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
      marginTop: '10px',
      width: '80%',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  const { onPress, title = 'I am Customer' } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
