import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  console.log(tailwind('bg-blue-200 px-3 py-1 rounded-full'));
  return (
    <View  style={tailwind('h-full')}>
		<View style={tailwind('mt-10 pt-20 items-center')}>
    <Image
        style={ {width: 238, height: 151, resizeMode: 'center' }} 
        source={require('./assets/logo.png')}
      />
			<View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
				<Text style={tailwind('bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded')}>
					Hello Tailwind
				</Text>        
			</View>
      <Button title="Learn More" style={tailwind('bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded')}>
        Button
      </Button>
		</View>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
