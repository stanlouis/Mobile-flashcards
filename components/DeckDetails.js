import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "./common";

class DeckDetails extends Component {
  handleAddCard = deck => {
    this.props.navigation.navigate("AddCard", { deck: deck });
  };

  handleStartQuiz = deck => {
    this.props.navigation.navigate("Quiz", { deck: deck });
  };

  render() {
    const { deck } = this.props;

    return (
      <Card>
        <CardSection>
          <View style={styles.deck}>
            <Text style={styles.deckTextStyle}>{deck.name}</Text>
            <Text style={styles.cardTextStyle}>Cards: {deck.cards.length}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.handleAddCard(deck)}>Add Card</Button>
          {deck.cards.length > 0 && (
            <Button onPress={() => this.handleStartQuiz(deck)}>
              Start Quiz
            </Button>
          )}
        </CardSection>
      </Card>
    );
  }
}

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

const mapStateToProps = (decks, { navigation }) => {
  const deck = decks[navigation.getParam("deckId")];
  return {
    deck: deck
  };
};

export default connect(
  mapStateToProps,
  null
)(DeckDetails);
