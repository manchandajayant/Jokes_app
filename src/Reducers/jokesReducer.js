import { JOKES_FETCHED, NEW_JOKE } from "../Actions/jokeActions";
const initialState = [];

export default function eventsReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case JOKES_FETCHED: {
      return action.payload;
    }
    case NEW_JOKE: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
