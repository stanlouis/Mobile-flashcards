import { GET_DECKS, NEW_DECK, ADD_CARD } from "./types";

export const getDecks = decks => ({
  type: GET_DECKS,
  payload: decks
});

export const newDeck = (deckId, deckName) => ({
  type: NEW_DECK,
  payload: { id, deckName }
});

export const addCard = (deckId, question, answer) => ({
  type: ADD_CARD,
  payload: { deckId, question, answer }
});