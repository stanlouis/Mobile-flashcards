import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, CardSection, Button } from "./common";

const Deck = props => {
  return (
    <Card>
      <CardSection>
        <View style={styles.deck}>
          <Text style={styles.deckTextStyle}>{props.item.name}</Text>
          <Text style={styles.cardTextStyle}>
            Cards: {props.item.cards.length}
          </Text>
        </View>
      </CardSection>
      <CardSection>
        <Button>Add Card</Button>

        <Button>Start Quiz</Button>
      </CardSection>
    </Card>
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
