import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { Button, Card, CardSection, Input } from "./common";
import { saveCard } from "../utils/mock_db";

class AddCard extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("deck").name}`
  });

  state = {
    question: "",
    answer: ""
  };

  handleSubmit = () => {
    const deck = this.props.navigation.getParam("deck");
    const { question, answer } = this.state;
    this.props.addCard(deck.id, question, answer);
    saveCard(deck.id, { question, answer });
    this.setState({ question: "", answer: "" });
    this.props.navigation.goBack();
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Question"
            placeholder="Add a question"
            onChangeText={question => this.setState({ question })}
            value={this.state.question}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Answer"
            placeholder="Add an answer"
            onChangeText={answer => this.setState({ answer })}
            value={this.state.answer}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSubmit}>Add Card</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  null,
  { addCard }
)(AddCard);
