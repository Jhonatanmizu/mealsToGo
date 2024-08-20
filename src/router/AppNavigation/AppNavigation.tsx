/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import RestaurantsScreen from "../../features/restaurant/screens/restaurants-screen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeView } from "../../layout/container";
import { Title } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

type IoniconName = keyof typeof Ionicons.glyphMap;
const TabIcon: Record<string, IoniconName> = {
  Restaurants: "restaurant",
  Maps: "map",
  Settings: "settings",
};
const Maps = () => (
  <SafeView>
    <Title>Maps</Title>
  </SafeView>
);
const Settings = () => (
  <SafeView>
    <Title>Settings</Title>
  </SafeView>
);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: IoniconName = "key";
            iconName = TabIcon[route.name] || "key";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Maps" component={Maps} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
