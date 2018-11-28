import {
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILED,
  ADD_TRIP_SUCCESS
} from "../actions/tripsAction";
const initState = [
  {
    name: "BURRRRR",
    start_date: "2018-11-07",
    end_date: "2018-11-22",
    description: "Bottom of the earth here we come!",
    country: "Antarctica"
  }
];
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_TRIPS_SUCCESS:
      return state;
    case FETCH_TRIPS_FAILED:
      return action.payload;
    case ADD_TRIP_SUCCESS:
      return [action.payload, ...state];
    default:
      return state;
  }
};
