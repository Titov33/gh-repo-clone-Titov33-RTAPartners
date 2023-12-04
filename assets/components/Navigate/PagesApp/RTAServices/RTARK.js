import React from "react";
import Styles from "./Styles";
import { LinearGradient } from "expo-linear-gradient";
import { GragientText } from "../../../GragientText";
import { View, Text, TouchableOpacity } from "react-native";
import ResponsiveImage from "react-native-responsive-image";

export default function RTA({ navigation }) {
  const loadScene = () => {
    navigation.navigate("RTASTAT");
  };
  const discount = () => {
    navigation.navigate("RTATL");
  };
  const advmanag = () => {
    navigation.navigate("RTAUR");
  };

  return (
    <View style={Styles.container}>
      <LinearGradient
        style={Styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[0.3, 0.5, 0.7]}
        colors={["#00BFFF", "#0000ff", "#FF00FF"]}
      >
        <View style={Styles.boxB}>
          <TouchableOpacity onPress={discount} style={Styles.boxGL}>
            <ResponsiveImage
              source={require("../../../../images/YkazRed.png")}
              style={Styles.One}
            />
            <GragientText
              style={Styles.textB}
              text="СДЕЛАТЬ СКИДКУ"
            ></GragientText>
          </TouchableOpacity>
        </View>
        <View style={Styles.boxB}>
          <TouchableOpacity onPress={advmanag} style={Styles.boxGL}>
            <ResponsiveImage
              source={require("../../../../images/YkazWhite.png")}
              style={Styles.One}
            />
            <Text style={Styles.textB}>УПРАВЛЯТЬ РЕКЛАМОЙ</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.boxB}>
          <TouchableOpacity onPress={loadScene} style={Styles.boxGL}>
            <ResponsiveImage
              source={require("../../../../images/YkazWhite.png")}
              style={Styles.One}
            />
            <Text style={Styles.textB}>СМОТРЕТЬ СТАТИСТИКУ</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
