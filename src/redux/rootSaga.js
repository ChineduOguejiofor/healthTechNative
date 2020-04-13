import { all } from 'redux-saga/effects';
import mapSaga from './mapItems/saga';

export default function* rootSaga() {
  yield all([mapSaga()]);
}
