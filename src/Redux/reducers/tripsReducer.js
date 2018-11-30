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
    case FETCH_TRIPS_SUCCESS:
      return action.payload.data;
    case FETCH_TRIPS_FAILED:
      return action.payload;
    case ADD_TRIP_SUCCESS:
      return [action.payload, ...state];
    case ADD_TRIP_FAILED:
      return action.payload;
    case DELETE_TRIP_SUCCESS:
      return state.filter(trip => trip.id !== action.payload);
    case DELETE_TRIP_FAILED:
      return action.payload;
    case EDIT_TRIP_SUCCESS:
      console.log("EDIT TRIP PAYLOD", action.payload);

      return state.map(trip =>
        trip.id !== action.payload.data.id ? trip : action.payload.data
      );
    case EDIT_TRIP_FAILED:
      return action.payload;
    default:
      return state;
  }
};
