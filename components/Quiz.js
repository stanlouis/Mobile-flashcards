import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { setLocalNotification, clearLocalNotification } from "./helpers";
import { Button, Card, CardSection } from "./common";

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.getParam("deck").name} Quiz`
  });

  state = {
    questionIndex: 0,
    correctAnswer: 0,
    incorrectAnswer: 0,
    displayResults: false,
    displayQuestion: true
  };

  handleCorrectAnswer = deck => {
    const { questionIndex } = this.state;
    if (questionIndex === deck.cards.length - 1) {
      this.setState({
        correctAnswer: this.state.correctAnswer + 1,
        displayResults: true
      });
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
      this.setState({
        incorrectAnswer: this.state.incorrectAnswer + 1,
        displayResults: true
      });
    } else {
      this.setState({
        questionIndex: this.state.questionIndex + 1,
        incorrectAnswer: this.state.incorrectAnswer + 1,
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
    return this.state.displayQuestion ? "View Answer" : "View Question";
  };

  handleReset = () => {
    this.setState({
      questionIndex: 0,
      correctAnswer: 0,
      incorrectAnswer: 0,
      displayResults: false,
      displayQuestion: true
    });
  };

  handleResult = () => {
    const { incorrectAnswer, correctAnswer } = this.state;
    return `${Math.round(
      (100 * correctAnswer) / (correctAnswer + incorrectAnswer)
    )}% correct`;
  };

  handleRedirect = () => this.props.navigation.navigate("Home");

  render() {
    const deck = this.props.navigation.getParam("deck");
    console.log("deck from quiz", deck);
    if (!this.state.displayResults) {
      clearLocalNotification();
      setLocalNotification();
      return (
        <Card>
          <CardSection>
            <View style={styles.content}>
              <Text>
                Question {this.state.questionIndex + 1} of {deck.cards.length}
              </Text>
              <Text style={styles.headerText}>{this.handleDisplay(deck)}</Text>
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

    return (
      <Card>
        <CardSection>
          <View style={styles.content}>
            <Text style={styles.headerText}>Your Score</Text>
            <Text style={styles.scoreText}>{this.handleResult()}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleReset}>Reset</Button>

          <Button onPress={this.handleRedirect}>Home</Button>
        </CardSection>
      </Card>
    );
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
  headerText: {
    fontSize: 24,
    paddingVertical: 10
  },
  scoreText: {
    fontSize: 20,
    paddingVertical: 10
  }
});

export default Quiz;
