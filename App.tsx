import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantsScreen from "./src/features/restaurant/screens/restaurants-screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  return (
    <>
      {oswaldLoaded && latoLoaded && (
        <ThemeProvider theme={theme}>
          <RestaurantsScreen />
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      )}
    </>
  );
}
