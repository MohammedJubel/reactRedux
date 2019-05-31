import { FETCH_POSTS } from "./types";
import TrainsData from "../data/results.json";

export function fetchPosts() {
  return function(dispatch) {
    dispatch({
      type: FETCH_POSTS,
      payload: TrainsData
    });
  };
}
