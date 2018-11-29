import { combineReducers } from "redux";
import trips from "./reducers/tripsReducer";
import memories from "./reducers/tripMemoriesReducer";

export default combineReducers({
  trips,
  memories
});
