import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import {
  RestaurantCard,
  RestaurantCardContent,
  RestaurantCardCover,
  RestaurantTitle,
} from "../../../layout/card";
import { Title } from "../../../layout/typography";
import { RestaurantData } from "../../../models/RestaurantData";

interface Props {
  restaturantInfo?: RestaurantData;
}
export default function RestaurantInfo({ restaturantInfo = {} }: Props) {
  const {
    name = "Some rest",
    icon = "temp",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "",
    isOpenNow = true,
    rating = 5,
    isClosed = false,
  } = restaturantInfo;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantTitle title="Algo" subtitle="Somenthing" />
      <RestaurantCardCover source={{ uri: photos[0] }} key={name} />
      <RestaurantCardContent>
        <Title>Man</Title>
      </RestaurantCardContent>
    </RestaurantCard>
  );
}
