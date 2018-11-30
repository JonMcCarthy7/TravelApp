import {
  FETCH_TRIPS_SUCCESS,
  FETCH_TRIPS_FAILED,
  ADD_TRIP_SUCCESS,
  ADD_TRIP_FAILED,
  DELETE_TRIP_SUCCESS,
  DELETE_TRIP_FAILED,
  EDIT_TRIP_SUCCESS,
  EDIT_TRIP_FAILED
} from "../actions/tripsAction";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_TRIPS_SUCCESS:
      return action.payload.data;
    case FETCH_TRIPS_FAILED:
      return action.payload;
    case ADD_TRIP_SUCCESS:
      return [action.payload.data, ...state];
    case ADD_TRIP_FAILED:
      return action.payload;
    case DELETE_TRIP_SUCCESS:
      return state.filter(trip => trip.id !== action.payload);
    case DELETE_TRIP_FAILED:
      return action.payload;
    case EDIT_TRIP_SUCCESS:
      return state.map(trip =>
        trip.id !== action.payload.data.id ? trip : action.payload.data
      );
    case EDIT_TRIP_FAILED:
      return action.payload;
    default:
      return state;
  }
};
