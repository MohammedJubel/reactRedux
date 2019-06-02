import { FETCH_POSTS } from "../actions/types";

// const initialState = {};

export default function trainsReducer(state, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        tickets: action.payload
      };
    default:
      return state;
  }
}
