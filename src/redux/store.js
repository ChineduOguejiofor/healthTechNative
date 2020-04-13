import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const initalState = {};

const store = createStore(
  rootReducer,
  initalState,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export default store;
