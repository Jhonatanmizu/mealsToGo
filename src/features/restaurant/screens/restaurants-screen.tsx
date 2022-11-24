import React from "react";
import Search from "../../../components/Search";
import RestaurantInfo from "../components/restaurant-info";
import {
  ListContainer,
  SafeView,
  SearchContainer,
} from "../../../layout/container";

export default function RestaurantsScreen() {
  return (
    <SafeView>
      <SearchContainer>
        <Search placeholder="Busque aqui" />
      </SearchContainer>
      <ListContainer>
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
        <RestaurantInfo />
      </ListContainer>
    </SafeView>
  );
}
