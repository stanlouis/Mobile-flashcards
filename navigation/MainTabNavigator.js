import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import AddCard from "../components/AddCard";
import DeckList from "../components/DeckList";
import Quiz from "../components/Quiz";
import AddDeckScreen from "../screens/AddDeckScreen";
import DeckDetails from "../components/DeckDetails";

const HomeStack = createStackNavigator({
  Home: DeckList
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
    DeckList: DeckList,
    DeckDetails: DeckDetails,
    Quiz: Quiz
  },
  { initialRouteName: "Home" }
);

export default MainStack;
