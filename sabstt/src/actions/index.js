import { FETCH_POSTS } from "./types";
import TrainsData from "../data/results.json";

export const fetchPosts = {
  type: FETCH_POSTS,
  payload: TrainsData.map(info => [
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
  ])
};
