import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Card, CardSection } from "./common";

const Deck = ({ item, handleAddCard, handleStartQuiz, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DeckDetails", {
          deckId: item.id,
          handleAddCard,
          handleStartQuiz
        })
      }
    >
      <Card>
        <CardSection>
          <View style={styles.deck}>
            <Text style={styles.deckTextStyle}>{item.name}</Text>
            <Text style={styles.cardTextStyle}>Cards: {item.cards.length}</Text>
          </View>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 130
  },
  deckTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 20
  },
  cardTextStyle: {
    fontSize: 10,
    textAlign: "center",
    marginHorizontal: 20
  }
});

export default Deck;
