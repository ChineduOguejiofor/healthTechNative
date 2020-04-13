import {
  SET_COORDINATE,
  SET_RADIUS,
  GET_NEARBY_HOSPITALS_SUCCESS,
  GET_NEARBY_HOSPITALS_FAILED,
} from './types';

const initialState = {
  longitude: null,
  latitude: null,
  radius: 3000,
  hospitals: [],
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_COORDINATE:
      return {
        ...state,
        longitude: payload.longitude,
        latitude: payload.latitude,
      };
    case SET_RADIUS:
      return {
        ...state,
        radius: payload,
      };
    case GET_NEARBY_HOSPITALS_SUCCESS:
      return {
        ...state,
        hospitals: payload,
      };
    case GET_NEARBY_HOSPITALS_FAILED:
      return {
        ...state,
        error: payload,
      };
  }
  return state;
};
