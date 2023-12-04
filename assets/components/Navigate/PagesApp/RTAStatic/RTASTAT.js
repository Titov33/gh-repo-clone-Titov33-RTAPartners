import React from "react";
import Styles from "./Styles";
import { View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RFValue } from "react-native-responsive-fontsize";
import ResponsiveImage from "react-native-responsive-image";

export default function RTA({ navigation }) {
  const loadScene = () => {
    navigation.goBack();
  };

  return (
    <View style={Styles.container}>
      <LinearGradient
        style={Styles.container}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.55 }}
        locations={[0.1, 0.5, 0.8]}
        colors={["#00BFFF", "#0000ff", "#FF00FF"]}
      >
        <View
          style={[
            Styles.boxB,
            {
              backgroundColor: "white",
              paddingHorizontal: RFValue(35),
              paddingVertical: RFValue(15),
            },
          ]}
        >
          <Text style={Styles.textW}>СТАТИСТИКА</Text>
        </View>
        <View style={Styles.boxB}>
          <TouchableOpacity onPress={loadScene} style={Styles.boxGL}>
            <ResponsiveImage
              source={require("../../../../images/YkazWhite.png")}
              style={Styles.One}
            />
            <Text style={Styles.textB}>ВСЕГО СКИДОК</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.boxB}>
          <TouchableOpacity onPress={loadScene} style={Styles.boxGL}>
            <ResponsiveImage
              source={require("../../../../images/YkazWhite.png")}
              style={Styles.One}
            />
            <Text style={Styles.textB}>ПОКАЗОВ ВИДЕО</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
