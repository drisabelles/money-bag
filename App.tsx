import React from "react";
// custom font
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font"; 

import Welcome from "./src/screens/Welcome";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <Welcome />
  );
}

