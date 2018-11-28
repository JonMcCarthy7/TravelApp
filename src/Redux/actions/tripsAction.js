import axiox from "axios";
export const FETCH_TRIPS_SUCCESS = "FETCH_TRIPS_SUCCESS";
export const FETCH_TRIPS_FAILED = "FETCH_TRIPS_FAILED";
export const ADD_TRIP_SUCCESS = "ADD_TRIP_SUCCESS";

export const fetchTrips = () => {
  return {
    type: FETCH_TRIPS_SUCCESS
  };
  // return async dispatch => {
  //   try {
  //     let response = await axiox.get()
  //     let trips = response.data
  //     return dispatch({
  //       type: FETCH_TRIPS_SUCCESS,
  //       payload: trips
  //     });
  //   } catch (error) {
  //     dispatch({
  //       type: FETCH_TRIPS_FAILED,
  //       payload: error
  //     });
  //   }
  // };
};

export const addTrip = trip => {
  return {
    type: ADD_TRIP_SUCCESS,
    payload: trip
  };
};
