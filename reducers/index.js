import { GET_DECKS, ADD_CARD, NEW_DECK } from "../actions/types";

const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case NEW_DECK:
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          name: action.payload.deckName,
          cards: []
        }
      };
    case ADD_CARD:
      return {
        ...state,
        [action.payload.deckId]: {
          ...state[action.payload.deckId],
          cards: [
            ...state[action.payload.deckId].cards,
            { question: action.payload.question, answer: action.payload.answer }
          ]
        }
      };
    default:
      return state;
  }
};

export default decks;
