import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import Decks from "../components/Decks";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer}>
          <View>
            <Decks />
            <Decks />
            <Decks />
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
