import React, { useState, useContext } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Controller } from "react-hook-form";
import { RFValue } from "react-native-responsive-fontsize";
import { AuthContext } from "../context/AuthContext";

const CustomInput = ({
  control,
  name,
  onChange,
  placeholder,
  rules = {},
  secureTextEntry,
}) => {
 
 
  return (
    <Controller
      control={control}
      name={name}
      onChange={onChange}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[styles.container, { color: error ? "red" : "#e8e8e8" }]}
          >
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.text}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && (
            <Text
              style={{
                color: "red",
                alignSelf: "stretch",
                fontFamily: "mt-med",
                fontSize: RFValue(12),
              }}
            >
              {error.message || "Ошибка"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "65%",
  },
  text: {
    fontSize: RFValue(16),
    color: "black",
    fontFamily: "mt-med",
  },
});

export default CustomInput;
