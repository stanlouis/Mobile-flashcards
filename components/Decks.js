import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { getDecks } from "../actions";

import { Card, CardSection } from "./common";

class Decks extends Component {
  state = {
    decks: {},
    cards: {}
  };
  render() {
    console.log("props", this.props);
    return (
      <Card>
        <CardSection>
          <View style={styles.deck}>
            <Text style={styles.textStyle}>Deck component</Text>
            <Text style={styles.textStyle}>0 cards</Text>
          </View>
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
  textStyle: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20
  }
});

const mapStateToProps = state => ({
  decks: state
});

export default connect(
  mapStateToProps,
  { getDecks }
)(Decks);
