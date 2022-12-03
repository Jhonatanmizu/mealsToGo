import React from "react";
import Search from "../../../components/Search";
import RestaurantInfo from "../components/restaurant-info";
import {
  ListContainer,
  SafeView,
  SearchContainer,
} from "../../../layout/container";
import { FlatList, StyleSheet } from "react-native";
import { RestaurantData } from "../../../models/RestaurantData";
import { useRestaurants } from "../../../contexts/RestaurantsContext";
import { ActivityIndicator } from "react-native-paper";

export default function RestaurantsScreen() {
  const { restaurants, isLoading } = useRestaurants();
  console.log(restaurants);

  return (
    <>
      <SafeView>
        <SearchContainer>
          <Search placeholder="Busque aqui" />
        </SearchContainer>
        {isLoading ? (
          <ActivityIndicator animating />
        ) : (
          <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantInfo restaturantInfo={item} />}
            keyExtractor={({ name }: RestaurantData) => name}
            contentContainerStyle={styles.list}
          />
        )}
      </SafeView>
    </>
  );
}
const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
});
