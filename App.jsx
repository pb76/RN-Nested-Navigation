import * as React from "react";
import { Text, View } from "react-native";
import { createStaticNavigation, useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Pages/Home";
import AboutScreen from "./Pages/About";
import JokesScreen from "./Pages/Jokes";

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Jokes: JokesScreen,
    About: AboutScreen,
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return <Navigation />;
}
