import React from "react";
import uuid from "uuid";
import { connect } from "react-redux";

import { Button, Card, CardSection, Input } from "../components/common";
import { newDeck } from "../actions";

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
      name: this.state.name
    };
    console.log("newDeck", newDeck);

    this.props.newDeck(newDeck.id, newDeck.name);
    this.setState({ title: "" });
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
