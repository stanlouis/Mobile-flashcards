import { AsyncStorage } from "react-native";

const M_FLASHCARD_KEY = "Mobile_flashcards_Key_123";

export const saveDeck = async deck => {
  try {
    await AsyncStorage.mergeItem(
      M_FLASHCARD_KEY,
      JSON.stringify({ [deck.id]: deck })
    );
  } catch (e) {
    console.log(e.message);
  }
};

export const getSavedDecks = async () => {
  try {
    return await AsyncStorage.getItem(M_FLASHCARD_KEY).then(data =>
      JSON.parse(data)
    );
  } catch (e) {
    console.log(e.message);
  }
};

export const saveCard = (id, card) => {
  return AsyncStorage.getItem(M_FLASHCARD_KEY).then(results => {
    const data = JSON.parse(results);

    data[id] = {
      ...data[id],
      cards: [
        ...data[id].cards,
        { question: card.question, answer: card.answer }
      ]
    };

    AsyncStorage.setItem(M_FLASHCARD_KEY, JSON.stringify(data));
  });
};
