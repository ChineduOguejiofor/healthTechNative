import {
  SET_COORDINATE,
  SET_RADIUS,
  GET_NEARBY_HOSPITALS_REQUEST,
} from './types';

export const setCoordinate = (payload) => ({
  type: SET_COORDINATE,
  payload,
});

export const setRadius = (payload) => ({
  type: SET_RADIUS,
  payload,
});

export const getNearByHospitals = (payload) => ({
  type: GET_NEARBY_HOSPITALS_REQUEST,
  payload,
});
