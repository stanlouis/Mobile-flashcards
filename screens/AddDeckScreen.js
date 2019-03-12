import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";

import { Button, Card, CardSection, Input } from "../components/common";
import { newDeck } from "../actions";
import { saveDeck } from "../utils/mock_db";

class AddDeckScreen extends React.Component {
  static navigationOptions = {
    title: "Add Deck"
  };

  state = {
    name: ""
  };

  handleSubmit = () => {
    const newDeck = {
      id: uuid(),
      name: this.state.name,
      cards: []
    };
    console.log("newDeck", newDeck, "saveDeck", saveDeck);
    // save deck
    saveDeck(newDeck);

    this.props.newDeck(newDeck.id, newDeck.name);
    this.setState({ name: "" });
    this.props.navigation.navigate("DeckList");
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Deck Name"
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSubmit}>Add Deck</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  { newDeck }
)(AddDeckScreen);
