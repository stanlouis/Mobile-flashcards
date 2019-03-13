import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Card, CardSection } from "./common";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("deck").name} Quiz`
  });

  state = {
    questionIndex: 0,
    correctAnswer: 0,
    totalQuestions: 0,
    displayResults: false,
    displayQuestion: true
  };

  handleCorrectAnswer = deck => {
    const { questionIndex } = this.state;
    if (questionIndex === deck.cards.length - 1) {
      this.setState({ displayResults: true });
    } else {
      this.setState({
        correctAnswer: this.state.correctAnswer + 1,
        questionIndex: this.state.questionIndex + 1,
        // revert to question
        displayQuestion: true
      });
    }
  };
  handleInCorrectAnswer = deck => {
    const { questionIndex } = this.state;
    if (questionIndex === deck.cards.length - 1) {
      this.setState({ displayResults: true });
    } else {
      this.setState({
        questionIndex: this.state.questionIndex + 1,
        // revert to question
        displayQuestion: true
      });
    }
  };

  handleDisplay = deck => {
    const { questionIndex, displayQuestion } = this.state;
    const card = deck.cards[questionIndex];

    return displayQuestion ? card.question : card.answer;
  };

  handleAnswer = () => {
    this.setState({ displayQuestion: !this.state.displayQuestion });
  };

  handleAnswerQuestion = () => {
    return this.state.displayQuestion ? "Answer" : "Question";
  };

  render() {
    const deck = this.props.navigation.getParam("deck");
    console.log("deck from quiz", deck);
    if (!this.state.displayResults) {
      return (
        <Card>
          <CardSection>
            <View style={styles.content}>
              <Text>
                Question {this.state.questionIndex + 1} of {deck.cards.length}
              </Text>
              <Text style={styles.questionText}>
                {this.handleDisplay(deck)}
              </Text>
              <TouchableOpacity
                style={styles.button}
                onPress={this.handleAnswer}
              >
                <Text>{this.handleAnswerQuestion()}</Text>
              </TouchableOpacity>
            </View>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.handleCorrectAnswer(deck)}>
              Correct
            </Button>

            <Button onPress={() => this.handleInCorrectAnswer(deck)}>
              Incorrect
            </Button>
          </CardSection>
        </Card>
      );
    }

    return <Text>No more Questions</Text>;
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 130
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 300
  },
  button: {
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20,
    padding: 10,
    borderColor: "#007aff",
    borderWidth: 2
  },
  questionText: {
    fontSize: 24,
    paddingVertical: 10
  }
});

export default Quiz;
