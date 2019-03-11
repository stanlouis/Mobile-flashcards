import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import DeckList from "../components/DeckList";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Mobile Flashcards"
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View>
            <DeckList />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 15
  },
  contentContainer: {
    paddingTop: 30
  }
});
