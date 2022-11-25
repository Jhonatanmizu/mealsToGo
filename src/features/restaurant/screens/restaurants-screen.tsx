import React from "react";
import Search from "../../../components/Search";
import RestaurantInfo from "../components/restaurant-info";
import {
  ListContainer,
  SafeView,
  SearchContainer,
} from "../../../layout/container";
import { FlatList } from "react-native";
import { RestaurantData } from "../../../models/RestaurantData";

export default function RestaurantsScreen() {
  return (
    <SafeView>
      <SearchContainer>
        <Search placeholder="Busque aqui" />
      </SearchContainer>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={({ name }: RestaurantData) => name}
        contentContainerStyle={{
          padding: 16,
        }}
      />
    </SafeView>
  );
}
