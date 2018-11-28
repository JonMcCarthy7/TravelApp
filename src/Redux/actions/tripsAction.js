import axiox from "axios";
export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";
export const FETCH_TRIPS_FAILED = "FETCH_TRIPS_FAILED";
export const ADD_TRIP_SUCCESS = "ADD_TRIP_SUCCESS";
export const ADD_TRIP_FAILED = "ADD_TRIP_FAILED";

export const fetchTrips = () => {
  // return {
  //   type: FETCH_TRIPS_SUCCESS
  // };
  return async dispatch => {
    try {
      let response = await axiox.get(`http://localhost:3000/api/v1/trips`);
      let trips = response.data;
      return dispatch({
        type: FETCH_TRIPS_SUCCESS,
        payload: trips
      });
    } catch (error) {
      dispatch({
        type: FETCH_TRIPS_FAILED,
        payload: error
      });
    }
  };
};

export const addTrip = trip => {
  // return {
  //   type: ADD_TRIP_SUCCESS,
  //   payload: trip
  // };
  console.log("THIS IS THE CREATEDD TRIP", { user_id: 1, ...trip });

  return async dispatch => {
    try {
      let response = await axiox.post(`http://localhost:3000/api/v1/trips`, {
        user_id: 1,
        ...trip
      });
      console.log("This is the NEW TRIP R.DATA", response.data);
      return dispatch({
        type: ADD_TRIP_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: ADD_TRIP_FAILED,
        payload: error
      });
    }
  };
};
