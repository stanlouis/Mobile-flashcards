import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class AddDeckScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Deck',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

      <Text>Add Deck component</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
