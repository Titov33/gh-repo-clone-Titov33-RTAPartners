import React from "react";
import Styles from "./Styles";
import CustomInput from "../../../CustomInput";
import { useForm } from "react-hook-form";
import { GragientText } from "../../../GragientText";
import { GragientTextBlue } from "../../../GragientTextBlue";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import ResponsiveImage from "react-native-responsive-image";

export default function RTA({ navigation }) {
  const loadScene = () => {
    navigation.navigate("RTARK");
  };

  const { handleSubmit, control } = useForm({
    mode: "all",
  });

  const onUploadPressed = async (data) => {
    const { link } = data;
    try {
      await Auth.signUp({
        attributes: { link },
      });
    } catch (e) {
      Alert.alert("Опа", e.message);
    }
  };

  const LINK_REGEX =
    /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

  return (
    <View style={Styles.container}>
      <View style={Styles.boxB}>
        <View style={[Styles.boxGL, { left: "10%" }]}>
          <ResponsiveImage
            source={require("../../../../images/YkazBlue.png")}
            style={Styles.OneU}
          />
          <GragientTextBlue
            style={[Styles.textB, { left: "-2%" }]}
            text="УПРАВЛЕНИЕ РЕКЛАМОЙ"
          ></GragientTextBlue>
        </View>
      </View>
      <Text style={Styles.text1}>
        Вставьте ссылку для{"\n"}скачивания видео
      </Text>
      <View style={Styles.line}></View>
      <View style={Styles.box}>
        <View style={Styles.OneContainer}>
          <Image
            source={require("../../../../images/YkazBlack.png")}
            style={Styles.One}
          />
        </View>
        <CustomInput
          name="link"
          control={control}
          placeholder="ССЫЛКА"
          rules={{
            required: "Введите ссылку",
            pattern: { value: LINK_REGEX, message: "Не верно введена ссылка" },
          }}
        />
      </View>
      <View style={Styles.line}></View>
      <Text style={Styles.text2}>
        Разрешение видео - 1080р,{"\n"}Формат - mp4,{"\n"}Длительность - не
        более 30 сек.
      </Text>
      <View style={[Styles.boxB, { top: "3.5%" }]}>
        <TouchableOpacity
          onPress={handleSubmit(onUploadPressed)}
          style={Styles.boxGL}
        >
          <ResponsiveImage
            source={require("../../../../images/YkazRed.png")}
            style={Styles.OneO}
          />
          <GragientText style={Styles.textB} text="ОТПРАВИТЬ"></GragientText>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../../../../images/Fire2.png")}
        style={Styles.imageBackground}
      />
    </View>
  );
}
