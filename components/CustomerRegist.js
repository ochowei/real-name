import React from 'react';
import {
  Text, View, TextInput, TouchableOpacity, StyleSheet,
} from 'react-native';
import tailwind from 'tailwind-rn';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

export default function CustomerRegist({ navigation }) {

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');


  async function saveName() {
    await AsyncStorage.setItem('customerName', name);
  }

  async function savePhone() {
    await AsyncStorage.setItem('customerPhone', phone);
  }

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
          value={name}

          placeholder="Name"
          autoFocus
          onChangeText={text=>setName(text)}
        />
        <View style={{ flexDirection: 'row', width: 328 }}>
          <TextInput
            style={{
              width: 236,
              height: 44,
              padding: 10,
              marginBottom: 10,
              backgroundColor: 'white',
            }}
            placeholder="Phone Number"
            onChangeText={text=>setPhone(text)}
          />
          <QRButton onPress={()=>{
            saveName();
            savePhone();
            navigation.navigate('CustomerQR');
          }} />

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
      height: 44,
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
