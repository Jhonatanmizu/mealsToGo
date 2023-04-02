import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import AppNavigation from "./src/router/AppNavigation/AppNavigation";

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
          <AppNavigation />
          <ExpoStatusBar style="auto" />
        </ThemeProvider>
      )}
    </>
  );
}
