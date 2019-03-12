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
    displayResults: false
  };

  handleCorrectAnswer = () => {
    this.setState({ correctAnswer: this.state.correctAnswer + 1 });
  };

  render() {
    const deck = this.props.navigation.getParam("deck");
    console.log("deck from quiz", deck);
    return (
      <Card>
        <CardSection>
          <View style={styles.content}>
            <Text>
              {this.state.questionIndex + 1} / {deck.cards.length}
            </Text>
            <Text style={styles.cardTextStyle}>{deck.cards[0].question}</Text>
            <TouchableOpacity style={styles.button}>
              <Text>Answer</Text>
            </TouchableOpacity>
          </View>
        </CardSection>
        <CardSection>
          <Button>Correct</Button>

          <Button>Incorrect</Button>
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
  }
});

export default Quiz;
