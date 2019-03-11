import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AddCard from "../components/AddCard";
import DeckList from "../components/DeckList";
import HomeScreen from "../screens/HomeScreen";
import AddDeckScreen from "../screens/AddDeckScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-apps" : "md-apps"}
    />
  )
};

const AddDeckStack = createStackNavigator({
  AddDeck: AddDeckScreen
});

AddDeckStack.navigationOptions = {
  tabBarLabel: "Add Deck",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-add" : "md-add"}
    />
  )
};

const BottomNavigator = createBottomTabNavigator({
  HomeStack,
  AddDeckStack
});

const MainStack = createStackNavigator(
  {
    Home: BottomNavigator,
    AddCard: AddCard,
    DeckList: DeckList
  },
  { initialRouteName: "Home" }
);

export default MainStack;
