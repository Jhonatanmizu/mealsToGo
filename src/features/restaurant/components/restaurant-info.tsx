import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
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
    <Card style={styles.card}>
      <Card.Title title="Pedido" subtitle="algo" />
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Content>
        <Text style={styles.title}>{name}</Text>
      </Card.Content>
    </Card>
  );
}
const styles = StyleSheet.create({
  card: {
    elevation: 5,
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    padding: 16,
  },
});
