import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  FlatList,
  StyleSheet,
  Text,
  View
} from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../actions";
import { getSavedDecks } from "../utils/mock_db";

import { CardSection } from "./common";
import Deck from "./Deck";

class DeckList extends Component {
  static navigationOptions = {
    title: "Mobile Flashcards"
  };

  state = {
    isLoading: true
  };

  2;

  clearAsyncStorage = async () => {
    return await AsyncStorage.clear();
  };

  componentDidMount() {
    getSavedDecks()
      .then(decks => {
        console.log("from getSavedDecks", decks);
        return this.props.getDecks(decks);
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
    // for testing, to be deleted
    // this.clearAsyncStorage();
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
    console.log(decks);
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
    if (this.state.isLoading) {
      return (
        <View style={styles.deck}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
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
