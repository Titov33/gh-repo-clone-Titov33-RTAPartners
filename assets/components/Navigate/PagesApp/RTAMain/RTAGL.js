import React, { useState, useContext } from "react";
import Styles from "./Styles";
import RTAHead from "../../../RTAHead/RTAHead";
import UP from "../../../Carousel/UP";
import images from "../../../Carousel/images";
import { GragientTextSmall } from "../../../GragientTextSmall";
import CustomInput from "../../../CustomInput";
import { useForm } from "react-hook-form";
import ResponsiveImage from "react-native-responsive-image";
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { AuthContext } from "../../../../context/AuthContext";

export default function RTAGL({ navigation }) {
  const loadScene = () => {
    navigation.navigate("RTARK");
  };

  const LOGIN_REGEX = /^[а-яА-ЯёЁa-zA-Z]+$/;
  const PASSWORD_REGEX =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const { control } = useForm({
    mode: "all",
  });

  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const { logiN } = useContext(AuthContext);

  return (
    <View style={Styles.container}>
      <UP images={images} />
      <RTAHead />
      <KeyboardAvoidingView>
        <Text style={Styles.text}>
          Партнерская программа для сотрудничества,{"\n"}обмена скидками и
          размещения рекламы.
        </Text>
        <View style={Styles.line}></View>
        <View style={Styles.Strelkacontainer}>
          <Image
            source={require("../../../../images/YkazBlack.png")}
            style={Styles.OneST}
          />
        </View>
        <View style={Styles.spaceInput}>
          <TextInput
            name="login"
            control={control}
            placeholder="Логин"
            onChangeText={text => setLogin(text)}
            rules={{
              required: "Введите логин",
              pattern: {
                value: LOGIN_REGEX,
                message: "Логин не может содержать такие символы",
              },
              minLength: {
                value: 3,
                message: "Логин должен быть больше 3 букв",
              },
              maxLength: {
                value: 15,
                message: "Логин должен содержать не более 16 букв",
              },
            }}
          />
        </View>
        <View style={Styles.line}></View>
        <View style={Styles.Strelkacontainer}>
          <Image
            source={require("../../../../images/YkazBlack.png")}
            style={Styles.OneST}
          />
        </View>
        <View style={Styles.spaceInput}>
          <CustomInput
            name="password"
            control={control}
            placeholder="Пароль"
            onChangeText={text => setPassword(text)}
            rules={{
              required: "Введите пароль",
              pattern: {
                value: PASSWORD_REGEX,
                message:
                  "Пароль должен содержать: строчные и прописные латинские буквы, цифры, спецсимволы, минимум 8 символов",
              },
              maxLength: {
                value: 15,
                message: "Пароль должен содержать не более 16 символов",
              },
            }}
          />
        </View>
        <View style={Styles.spase}></View>
        <View style={Styles.boxB}>
          <TouchableOpacity
            onPress={() => {
              logiN(login, password);
            }}
            style={Styles.boxGL}
          >
            <ResponsiveImage
              source={require("../../../../images/YkazRed.png")}
              style={Styles.OneR}
            />
            <GragientTextSmall
              style={Styles.textR}
              text="ВОЙТИ"
            ></GragientTextSmall>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}