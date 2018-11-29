import axiox from "axios";

export const FETCH_TRIP_MEMORIES_SUCCESS = "FETCH_TRIP_MEMORIES_SUCCESS";
export const FETCH_TRIP_MEMORIES_FAILED = "FETCH_TRIP_MEMORIES_FAILED";
export const ADD_TRIP_MEMORY_SUCCESS = "ADD_TRIP_MEMORY_SUCCESS";
export const ADD_TRIP_MEMORY_FAILED = "ADD_TRIP_MEMORY_FAILED";

export const fetchTripMemories = tripId => {
  // return {
  //   type: FETCH_TRIP_MEMORIES_SUCCESS
  // };

  return async dispatch => {
    try {
      let response = await axiox.get(
        `http://localhost:3000/api/v1/trips/${tripId}/trip_memories`
      );
      let tripMemories = response.data;

      return dispatch({
        type: FETCH_TRIP_MEMORIES_SUCCESS,
        payload: tripMemories
      });
    } catch (error) {
      dispatch({
        type: FETCH_TRIP_MEMORIES_FAILED,
        payload: error
      });
    }
  };
};

export const addTripMemory = (tripId, memory, history) => {
  // return {
  //   type: ADD_TRIP_SUCCESS,
  //   payload: trip
  // };

  return async dispatch => {
    try {
      let response = await axiox.post(
        `http://localhost:3000/api/v1/trips/${tripId}/trip_memories`,
        {
          memorable_type: "Trip",
          memorable_id: tripId,
          ...memory
        }
      );
      dispatch({
        type: ADD_TRIP_MEMORY_SUCCESS,
        payload: response.data
      });
      history.goBack();
    } catch (error) {
      dispatch({
        type: ADD_TRIP_MEMORY_FAILED,
        payload: error
      });
    }
  };
};
