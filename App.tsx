import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text style={styles.text}>Hello world</Text>
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "#333",
    width: "100%",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ccc",
    width: "100%",
  },
  text: {
    color: "#f2f2f2",
  },
});
