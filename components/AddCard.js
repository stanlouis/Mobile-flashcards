import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "../actions";
import { Button, Card, CardSection, Input } from "./common";

class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };

  handleSubmit = () => {
    const id = this.props.navigation.state.params.id;
    const { question, answer } = this.state;
    console.log(id, question, answer);
    this.props.addCard(id, question, answer);
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
