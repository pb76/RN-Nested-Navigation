import * as React from "react";
import { Text, View } from "react-native";
import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Pages/Home";
import AboutScreen from "./Pages/About";
import JokesScreen from "./Pages/Jokes";

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Hem",
        tabBarIcon: ({ focused }) => <Text style={{ color: focused ? "blue" : "black" }}>🏠</Text>,
      },
    },
    Jokes: {
      screen: JokesScreen,
      options: {
        title: "Skämt",
        tabBarIcon: ({ focused }) => <Ionicons name="happy-outline" color={{ color: focused ? "blue" : "black" }} />,
      },
    },
    About: {
      screen: AboutScreen,
      options: {
        title: "Om",
        tabBarIcon: ({ focused }) => (
          <Ionicons name="information-circle-outline" color={{ color: focused ? "blue" : "black" }} />
        ),
      },
    },
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}
