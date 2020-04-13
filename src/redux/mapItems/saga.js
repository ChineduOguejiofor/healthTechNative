import {
  GET_NEARBY_HOSPITALS_REQUEST,
  GET_NEARBY_HOSPITALS_SUCCESS,
  GET_NEARBY_HOSPITALS_FAILED,
} from './types';
import { takeEvery, put, select } from 'redux-saga/effects';
import { GOOGLE_API_KEY, PLACES_BASE_URL } from 'react-native-dotenv';
import axios from 'axios';

function* getNearByHospitals() {
  const longitude = (state) => state.mapItems.longitude;
  const latitude = (state) => state.mapItems.latitude;
  const radius = (state) => state.mapItems.radius;

  const currLongitude = yield select(longitude);
  const currLatitude = yield select(latitude);
  const currRadius = yield select(radius);

  try {
    const response = yield axios.get(
      `${PLACES_BASE_URL}${currLatitude},${currLongitude}&radius=${currRadius}&type=hospital&key=${GOOGLE_API_KEY}`
    );
    yield put({
      payload: response.data.results,
      type: GET_NEARBY_HOSPITALS_SUCCESS,
    });
  } catch (error) {
    yield put({
      payload: error,
      type: GET_NEARBY_HOSPITALS_FAILED,
    });
  }
}

export default function* mapSaga() {
  yield takeEvery(GET_NEARBY_HOSPITALS_REQUEST, getNearByHospitals);
}
