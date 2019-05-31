import { FETCH_POSTS } from "../actions/types";
import data from "../data/results";

const initialState = {
  tickets: data.map(info => {
    return [
      {
        Adults: info.Adults,
        Price: info.Co2Produced,
        Seating: info.MaxClass,
        DepDate: info.DepDate,
        DepTime: info.DepTime,
        DepCode: info.DepStationCode,
        DepStation: info.DepStationCodeFull,
        Arrival: info.ArrTime,
        ArrCode: info.ArrStationCode,
        ArrStation: info.ArrStationCodeFull,
        NumLegs: info.Legs.length
      }
    ];
  })
};

export default function trainsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
