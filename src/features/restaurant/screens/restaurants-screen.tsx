import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Search from "../../../components/Search";
import RestaurantInfo from "../components/restaurant-info";

export default function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Search placeholder="Busque aqui" />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
  text: {
    color: "#f2f2f2",
  },
});
