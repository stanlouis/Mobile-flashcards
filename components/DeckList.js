import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../actions";

import { CardSection } from "./common";
import Deck from "./Deck";

class DeckList extends Component {
  static navigationOptions = {
    title: "Mobile Flashcards"
  };
  componentDidMount() {
    this.props.getDecks();
  }

  handleAddCard = deck => {
    this.props.navigation.navigate("AddCard", { deck: deck });
  };

  handleStartQuiz = deck => {
    this.props.navigation.navigate("Quiz", { deck: deck });
  };

  _keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => {
    return (
      <Deck
        item={item}
        handleAddCard={this.handleAddCard}
        handleStartQuiz={this.handleStartQuiz}
      />
    );
  };

  renderDecks = () => {
    const { decks } = this.props;
    if (Object.values(decks).length > 0) {
      return (
        <FlatList
          data={Object.values(decks)}
          keyExtractor={this._keyExtractor}
          renderItem={this.renderItem}
        />
      );
    }
    return (
      <CardSection>
        <View style={styles.deck}>
          <Text style={styles.textStyle}>Add a Deck</Text>
        </View>
      </CardSection>
    );
  };

  render() {
    return <View>{this.renderDecks()}</View>;
  }
}

const styles = StyleSheet.create({
  deck: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 130
  },
  textStyle: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20
  }
});

const mapStateToProps = decks => ({
  decks
});

export default connect(
  mapStateToProps,
  { getDecks }
)(DeckList);
