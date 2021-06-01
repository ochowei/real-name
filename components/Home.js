import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";
import logo from "../assets/logo.png";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home({ navigation }) {
  const [value, setValue] = React.useState();
  async function readValue() {
    const v = await AsyncStorage.getItem('customerName');
    setValue(v);
  }

  return (
    <View style={{ backgroundColor: "#004B9D", ...tailwind("h-full") }}>
      <View style={tailwind("pt-28 items-center")}>
        <Image
          style={{ width: 238, height: 151, resizeMode: "cover" }}
          source={logo}
        />
        <View style={tailwind(" pt-28 ")}>
          <Text style={tailwind("text-white text-lg font-semibold")}>
            {" "}
            COVID-19 Real-Name Registration System
          </Text>
        </View>
        <View style={tailwind("m-2")}>
          <Text
            style={{ color: "#FFE600", ...tailwind("text-lg font-semibold") }}
          >
            Scanning QR Code instead of Texting
          </Text>
        </View>

        <ProviderButton
          onPress={() => {
            navigation.navigate("ProviderRegist");
          }}
        />
        <ConsumerButton
          onPress={() => {
            readValue();
            let localName = value;
            console.log(localName);
            if (localName == null) {
              navigation.navigate("CustomerRegist");

            }else {
              navigation.navigate("CustomerQR");

            }
          }}
        />
      </View>
    </View>
  );
}

function ProviderButton(props) {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "white",
      width: "80%",
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: "black",
    },
  });
  const { onPress, title = "I am Provider" } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

function ConsumerButton(props) {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "black",
      marginTop: 10,
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
  const { onPress, title = "I am Customer" } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
