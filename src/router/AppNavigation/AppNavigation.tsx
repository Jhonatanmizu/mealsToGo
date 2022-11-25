/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import RestaurantsScreen from "../../features/restaurant/screens/restaurants-screen";
import { NavigationContainer } from "@react-navigation/native";
import { SafeView } from "../../layout/container";
import { Title } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";
const Tab = createBottomTabNavigator();
const TabIcon = {
  Restaurants: "md-restarant",
  Map: "md-map",
  Setting: "md-setting",
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
// const tabBarIcon = (iconName: string, size: string, color: string) => {
//   return <Ionicons name={iconName} size={size} color={color} />;
// };
// const screenOptions = ({ route }) => {
//   const icon = TabIcon[route.name];
//   return {
//     tabBarIcon,
//   };
// };
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Restaurants") {
              iconName = "md-restaurant";
            } else if (route.name === "Settings") {
              iconName = "md-settings";
            } else if (route.name === "Maps") {
              iconName = "md-map";
            }

            // You can return any component that you like here!
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
