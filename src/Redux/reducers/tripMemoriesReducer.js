import {
  FETCH_TRIP_MEMORIES_SUCCESS,
  FETCH_TRIP_MEMORIES_FAILED,
  ADD_TRIP_MEMORY_SUCCESS,
  ADD_TRIP_MEMORY_FAILED
} from "../actions/tripMemoriesActions";
// const initState = [
//   {
//     name: "BURRRRR",
//     start_date: "2018-11-07",
//     end_date: "2018-11-22",
//     description: "Bottom of the earth here we come!",
//     country: "Antarctica"
//   }
// ];
export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TRIP_MEMORIES_SUCCESS:
      return [...action.payload.data];
    case FETCH_TRIP_MEMORIES_FAILED:
      return action.payload;
    case ADD_TRIP_MEMORY_SUCCESS:
      return [...state, action.payload];
    case ADD_TRIP_MEMORY_FAILED:
      return action.payload;
    default:
      return state;
  }
};
