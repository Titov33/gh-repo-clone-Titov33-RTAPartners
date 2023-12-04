import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import { BASE_URL } from "../components/config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const logiN = (login, password) => {
    axios
      .post(`${BASE_URL}/logiN`, {
        login,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      })
      .catch((e) => {
        console.log(`logiN error ${e}`);
      });
  };

  const logout = () => {
    axios
      .post(
        `${BASE_URL}/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${userInfo.access_token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        AsyncStorage.removeItem("userInfo");
        setUserInfo({});
      })
      .catch((e) => {
        console.log(`logout error ${e}`);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        logiN,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
