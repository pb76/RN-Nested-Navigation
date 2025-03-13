import * as React from "react";
import { Text, View } from "react-native";
import { createStaticNavigation, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./Pages/Home";
import AboutScreen from "./Pages/About";
import JokesListScreen from "./Pages/Jokes-List";
import JokesDetailScreen from "./Pages/Jokes-Detail";

const JokesStack = createNativeStackNavigator({
  screens: {
    Jokes: {
      screen: JokesListScreen,
      options: {
        title: "Skämt",
      },
    },
    JokesDetails: {
      screen: JokesDetailScreen,
      options: {
        title: "Skämt",
      },
    },
  },
});

const StackNavigation = createStaticNavigation(JokesStack);

function JokesNavigation() {
  return (
    <NavigationIndependentTree>
      <StackNavigation />
    </NavigationIndependentTree>
  );
}

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
      screen: JokesNavigation,
      options: {
        title: "Skämt",
        headerShown: false,
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
