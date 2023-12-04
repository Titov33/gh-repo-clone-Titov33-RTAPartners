import React, { useEffect } from "react";
import Navigator from "./assets/components/Navigate/navigate";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { AuthProvider } from "./assets/context/AuthContext";

export default function App() {
  const [fonts] = useFonts({
    "mt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mt-reg": require("./assets/fonts/Montserrat-Regular.ttf"),
    "mt-med": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fonts) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}
